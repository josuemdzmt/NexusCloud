import authApi from '@/services/auth/authApi';
import { all_routes } from '@/router/all_routes';
import {
  setSession,
  clearSession,
  getAccessToken,
  getRefreshToken
} from '@/services/auth/authSession';

const ENDPOINT = '/api/v1/auth';

/**
 * AuthService
 * Contrato Auth contra VITE_AUTH_API_BASE_URL (no el client de negocio).
 */
export default {
  /**
   * @param {{ email: string, password: string }} objCredentials
   */
  async login(objCredentials) {
    const objResponse = await authApi.post(`${ENDPOINT}/login`, objCredentials);
    const objData = objResponse?.data || objResponse;
    this._persistPair(objData);
    return objData;
  },

  /**
   * @param {object} objPayload
   */
  async register(objPayload) {
    const objResponse = await authApi.post(`${ENDPOINT}/register`, objPayload);
    const objData = objResponse?.data || objResponse;
    this._persistPair(objData);
    return objData;
  },

  /**
   * Renueva access + refresh. Usado por el interceptor de negocio.
   */
  async refresh() {
    const strRefresh = getRefreshToken();
    if (!strRefresh) {
      throw { status: 401, message: 'Sin refresh token' };
    }

    const objResponse = await authApi.post(`${ENDPOINT}/refresh`, {
      refresh_token: strRefresh
    });
    const objData = objResponse?.data || objResponse;
    this._persistPair(objData);
    return objData;
  },

  async me() {
    const objResponse = await authApi.get(`${ENDPOINT}/me`, {
      headers: { Authorization: `Bearer ${getAccessToken()}` }
    });
    return objResponse?.data || objResponse;
  },

  async logout() {
    try {
      const strAccess = getAccessToken();
      if (strAccess) {
        await authApi.post(
          `${ENDPOINT}/logout`,
          {},
          { headers: { Authorization: `Bearer ${strAccess}` } }
        );
      }
    } catch {
      // Ignorar errores de red al cerrar sesión local
    } finally {
      clearSession();
    }
  },

  /**
   * Bloquea la sesión (idle o Lock Screen manual):
   * revoca refresh en servidor si hay access, conserva expired_user y va a lock-screen.
   */
  async handleLockSession() {
    try {
      const strAccess = getAccessToken();
      if (strAccess) {
        await authApi.post(
          `${ENDPOINT}/logout`,
          {},
          { headers: { Authorization: `Bearer ${strAccess}` } }
        );
      }
    } catch {
      // Best-effort: aunque falle la API, se limpia local
    }

    clearSession({ keepExpired: true });

    const strPath = window.location.pathname || '';
    if (!strPath.includes('lock-screen')) {
      window.location.href = all_routes.lockScreen;
    }
  },

  /**
   * @param {object} objData  Payload AuthTokenPair del API
   */
  _persistPair(objData) {
    const objUser = objData.user || {};
    const strAccess = objData.accessToken || objData.access_token;
    const strRefresh = objData.refreshToken || objData.refresh_token;
    const intExpiresAt = objData.expiresAt || objData.expires_at;
    const intExpiresIn = objData.expiresIn || objData.expires_in;

    if (!strAccess || !strRefresh) {
      throw { status: 500, message: 'Respuesta de autenticación incompleta' };
    }

    setSession({
      user: objUser,
      accessToken: strAccess,
      refreshToken: strRefresh,
      expiresAt: intExpiresAt,
      expiresIn: intExpiresIn
    });
  }
};
