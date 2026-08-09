/**
 * authSession
 * Una sola key localStorage `nexus_auth_session` con tokens + user mínimo + lockUser.
 */

import { shallowRef } from 'vue';
import { handleClearCatalogCache } from '@/services/catalog/catalogCache';

const KEY_SESSION = 'nexus_auth_session';

/** Keys legacy (migración única → borrar). */
const LEGACY_KEYS = [
  'nexus_access_token',
  'nexus_refresh_token',
  'nexus_auth_user',
  'nexus_access_expires_at',
  'expired_user',
  'session_expired',
  'user'
];

/** Campos permitidos en el blob de sesión (no PII de perfil). */
const SESSION_USER_KEYS = ['id', 'name', 'email', 'tenantName', 'isActive'];

/** @type {{ accessToken: string|null, refreshToken: string|null, expiresAt: number|null, user: object|null, lockUser: object|null }} */
let objMemory = {
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  user: null,
  lockUser: null
};

/** Ref reactiva del usuario de sesión (header / perfil). */
export const objSessionUser = shallowRef(null);

let bHydrated = false;

function readJson(storage, strKey) {
  const strRaw = storage.getItem(strKey);
  if (!strRaw) return null;
  try {
    return JSON.parse(strRaw);
  } catch {
    return null;
  }
}

/**
 * Reduce cualquier payload (login o profile) al subset de sesión.
 * @param {object|null|undefined} objUser
 * @returns {object|null}
 */
export function toSessionUser(objUser) {
  if (!objUser || typeof objUser !== 'object') return null;
  const objOut = {};
  for (const strKey of SESSION_USER_KEYS) {
    const mixed =
      objUser[strKey] !== undefined
        ? objUser[strKey]
        : objUser[strKey === 'tenantName' ? 'tenant_name' : strKey === 'isActive' ? 'is_active' : strKey];
    if (mixed !== undefined) {
      objOut[strKey] = mixed;
    }
  }
  if (objOut.id == null && objOut.email == null) return null;
  return objOut;
}

function clearLegacyKeys() {
  for (const strKey of LEGACY_KEYS) {
    localStorage.removeItem(strKey);
    sessionStorage.removeItem(strKey);
  }
}

/**
 * Migra keys sueltas antiguas a nexus_auth_session (una vez).
 */
function migrateLegacySession() {
  const objExisting = readJson(localStorage, KEY_SESSION);
  if (objExisting?.accessToken || objExisting?.refreshToken) {
    clearLegacyKeys();
    return objExisting;
  }

  const strAccess =
    sessionStorage.getItem('nexus_access_token') || localStorage.getItem('nexus_access_token');
  const strRefresh = localStorage.getItem('nexus_refresh_token');
  const intExpiresAt =
    Number(sessionStorage.getItem('nexus_access_expires_at') || localStorage.getItem('nexus_access_expires_at') || 0) ||
    null;
  const objUser = toSessionUser(
    readJson(sessionStorage, 'nexus_auth_user') || readJson(localStorage, 'nexus_auth_user')
  );
  const objLockUser = readJson(localStorage, 'expired_user');

  if (!strAccess && !strRefresh && !objLockUser) {
    clearLegacyKeys();
    return null;
  }

  const objBlob = {
    accessToken: strAccess || null,
    refreshToken: strRefresh || null,
    expiresAt: intExpiresAt,
    user: objUser,
    lockUser: objLockUser
  };
  localStorage.setItem(KEY_SESSION, JSON.stringify(objBlob));
  clearLegacyKeys();
  return objBlob;
}

function persistMemory() {
  localStorage.setItem(
    KEY_SESSION,
    JSON.stringify({
      accessToken: objMemory.accessToken,
      refreshToken: objMemory.refreshToken,
      expiresAt: objMemory.expiresAt,
      user: objMemory.user,
      lockUser: objMemory.lockUser
    })
  );
}

/**
 * Hidrata memoria desde storage (reload).
 */
function hydrateFromStorage() {
  if (bHydrated) return;
  bHydrated = true;

  const objBlob = readJson(localStorage, KEY_SESSION) || migrateLegacySession();
  if (!objBlob) return;

  objMemory = {
    accessToken: objBlob.accessToken || null,
    refreshToken: objBlob.refreshToken || null,
    expiresAt: objBlob.expiresAt || null,
    user: toSessionUser(objBlob.user),
    lockUser: objBlob.lockUser || null
  };

  if (objSessionUser.value == null && objMemory.user) {
    objSessionUser.value = objMemory.user;
  }
}

/**
 * Guarda la sesión tras login/refresh.
 * @param {{ user: object, accessToken: string, refreshToken: string, expiresAt?: number, expiresIn?: number }} objSession
 */
export function setSession(objSession) {
  const intExpiresAt =
    objSession.expiresAt ||
    (objSession.expiresIn ? Math.floor(Date.now() / 1000) + Number(objSession.expiresIn) : null);

  const objUser = toSessionUser(objSession.user);

  objMemory = {
    accessToken: objSession.accessToken,
    refreshToken: objSession.refreshToken,
    expiresAt: intExpiresAt,
    user: objUser,
    lockUser: null
  };
  bHydrated = true;
  persistMemory();
  objSessionUser.value = objUser;
}

/**
 * Actualiza solo el usuario de sesión (subset mínimo), sin tocar tokens.
 * Si llega perfil completo (/me o PUT /profile), se mapea a mínimo.
 * @param {object} objUser
 */
export function setUser(objUser) {
  const objMinimal = toSessionUser(objUser);
  if (!objMinimal) return;
  hydrateFromStorage();
  objMemory.user = objMinimal;
  persistMemory();
  objSessionUser.value = objMinimal;
}

/**
 * Limpia la sesión. Si bolKeepExpired, guarda name/email en lockUser para lock-screen.
 * @param {{ keepExpired?: boolean }} [objOptions]
 */
export function clearSession(objOptions = {}) {
  hydrateFromStorage();
  const objLockUser =
    objOptions.keepExpired && objMemory.user
      ? {
          email: objMemory.user.email,
          name: objMemory.user.name || 'Usuario'
        }
      : null;

  objMemory = {
    accessToken: null,
    refreshToken: null,
    expiresAt: null,
    user: null,
    lockUser: objLockUser
  };
  objSessionUser.value = null;
  bHydrated = true;

  if (objLockUser) {
    persistMemory();
  } else {
    localStorage.removeItem(KEY_SESSION);
  }

  clearLegacyKeys();
  handleClearCatalogCache();
}

export function getAccessToken() {
  hydrateFromStorage();
  return objMemory.accessToken;
}

export function getRefreshToken() {
  hydrateFromStorage();
  return objMemory.refreshToken;
}

export function getUser() {
  hydrateFromStorage();
  if (objMemory.user && objSessionUser.value == null) {
    objSessionUser.value = objMemory.user;
  }
  return objMemory.user;
}

export function getExpiresAt() {
  hydrateFromStorage();
  return objMemory.expiresAt;
}

export function isAuthenticated() {
  return Boolean(getAccessToken() || getRefreshToken());
}

export function getExpiredUser() {
  hydrateFromStorage();
  return objMemory.lockUser;
}

export function clearExpiredUser() {
  hydrateFromStorage();
  objMemory.lockUser = null;
  if (objMemory.accessToken || objMemory.refreshToken || objMemory.user) {
    persistMemory();
  } else {
    localStorage.removeItem(KEY_SESSION);
  }
}

/**
 * Redirige a lock-screen tras fallar refresh.
 */
export function handleUnauthorized() {
  clearSession({ keepExpired: true });
  if (window.location.pathname !== '/lock-screen') {
    window.location.href = '/lock-screen';
  }
}

export default {
  setSession,
  setUser,
  clearSession,
  getAccessToken,
  getRefreshToken,
  getUser,
  getExpiresAt,
  isAuthenticated,
  getExpiredUser,
  clearExpiredUser,
  handleUnauthorized,
  toSessionUser,
  objSessionUser
};
