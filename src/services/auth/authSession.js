/**
 * authSession
 * Persistencia de sesión Auth (access en sessionStorage, refresh en localStorage).
 * Preparado para VITE_AUTH_API_BASE_URL distinto al API de negocio.
 */

const KEY_ACCESS = 'nexus_access_token';
const KEY_REFRESH = 'nexus_refresh_token';
const KEY_USER = 'nexus_auth_user';
const KEY_EXPIRES = 'nexus_access_expires_at';
const KEY_EXPIRED_USER = 'expired_user';
const KEY_SESSION_EXPIRED = 'session_expired';

/** @type {{ user: object|null, accessToken: string|null, expiresAt: number|null }} */
let objMemory = {
  user: null,
  accessToken: null,
  expiresAt: null
};

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
 * Hidrata memoria desde storage (reload).
 */
function hydrateFromStorage() {
  if (objMemory.accessToken) return;
  objMemory.accessToken = sessionStorage.getItem(KEY_ACCESS);
  objMemory.expiresAt = Number(sessionStorage.getItem(KEY_EXPIRES) || 0) || null;
  objMemory.user = readJson(sessionStorage, KEY_USER) || readJson(localStorage, KEY_USER);
}

/**
 * Guarda la sesión tras login/refresh.
 * @param {{ user: object, accessToken: string, refreshToken: string, expiresAt?: number, expiresIn?: number }} objSession
 */
export function setSession(objSession) {
  const intExpiresAt =
    objSession.expiresAt ||
    (objSession.expiresIn ? Math.floor(Date.now() / 1000) + Number(objSession.expiresIn) : null);

  objMemory = {
    user: objSession.user,
    accessToken: objSession.accessToken,
    expiresAt: intExpiresAt
  };

  sessionStorage.setItem(KEY_ACCESS, objSession.accessToken);
  if (intExpiresAt) {
    sessionStorage.setItem(KEY_EXPIRES, String(intExpiresAt));
  }
  sessionStorage.setItem(KEY_USER, JSON.stringify(objSession.user));
  localStorage.setItem(KEY_USER, JSON.stringify(objSession.user));
  localStorage.setItem(KEY_REFRESH, objSession.refreshToken);

  // Compat legacy api.js / lock-screen
  localStorage.removeItem(KEY_EXPIRED_USER);
  localStorage.removeItem(KEY_SESSION_EXPIRED);
}

/**
 * Limpia la sesión. Si bolKeepExpired, guarda nombre/email para lock-screen.
 * @param {{ keepExpired?: boolean }} [objOptions]
 */
export function clearSession(objOptions = {}) {
  hydrateFromStorage();
  if (objOptions.keepExpired && objMemory.user) {
    localStorage.setItem(
      KEY_EXPIRED_USER,
      JSON.stringify({
        email: objMemory.user.email,
        name: objMemory.user.name || 'Usuario'
      })
    );
    localStorage.setItem(KEY_SESSION_EXPIRED, 'true');
  }

  objMemory = { user: null, accessToken: null, expiresAt: null };
  sessionStorage.removeItem(KEY_ACCESS);
  sessionStorage.removeItem(KEY_EXPIRES);
  sessionStorage.removeItem(KEY_USER);
  localStorage.removeItem(KEY_REFRESH);
  localStorage.removeItem(KEY_USER);
  localStorage.removeItem('user'); // legacy
}

export function getAccessToken() {
  hydrateFromStorage();
  return objMemory.accessToken;
}

export function getRefreshToken() {
  return localStorage.getItem(KEY_REFRESH);
}

export function getUser() {
  hydrateFromStorage();
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
  return readJson(localStorage, KEY_EXPIRED_USER);
}

export function clearExpiredUser() {
  localStorage.removeItem(KEY_EXPIRED_USER);
  localStorage.removeItem(KEY_SESSION_EXPIRED);
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
  clearSession,
  getAccessToken,
  getRefreshToken,
  getUser,
  getExpiresAt,
  isAuthenticated,
  getExpiredUser,
  clearExpiredUser,
  handleUnauthorized
};
