import authApi from '@/services/auth/authApi';
import { all_routes } from '@/router/all_routes';
import {
  setSession,
  setUser,
  clearSession,
  getAccessToken,
  getRefreshToken,
  toSessionUser
} from '@/services/auth/authSession';
import { handleExecuteRecaptcha } from '@/services/auth/recaptcha';

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
    const strRecaptchaToken = await handleExecuteRecaptcha();
    const objResponse = await authApi.post(`${ENDPOINT}/login`, {
      email: objCredentials.email,
      password: objCredentials.password,
      recaptchaToken: strRecaptchaToken
    });
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

  /**
   * Vuelve a leer /me y persiste permisos de sesión (tras cambio de perfil o reload).
   */
  async handleRefreshSessionUser() {
    if (!getAccessToken()) return null;
    const objUser = await this.me();
    if (objUser && typeof objUser === 'object') {
      setUser(toSessionUser(objUser));
    }
    return objUser;
  },

  /**
   * Actualiza perfil Staff (Vertex: PUT /profile).
   * Persiste solo el subset de sesión en el blob.
   * @param {{ first_name: string, last_name: string, second_last_name?: string|null, phone?: string|null, job_title?: string|null }} objPayload
   */
  async updateProfile(objPayload) {
    const objResponse = await authApi.put(
      `${ENDPOINT}/profile`,
      {
        first_name: objPayload.first_name,
        last_name: objPayload.last_name,
        second_last_name: objPayload.second_last_name ?? null,
        phone: objPayload.phone ?? null,
        job_title: objPayload.job_title ?? null
      },
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
    const objUser = objResponse?.data || objResponse;
    if (objUser && typeof objUser === 'object') {
      setUser(toSessionUser(objUser));
    }
    return objUser;
  },

  /**
   * Actualiza contraseña. Tras éxito el cliente debe cerrar sesión local.
   * @param {{ current_password: string, password: string, password_confirmation: string }} objPayload
   */
  async updatePassword(objPayload) {
    const objResponse = await authApi.put(
      `${ENDPOINT}/password`,
      {
        current_password: objPayload.current_password,
        password: objPayload.password,
        password_confirmation: objPayload.password_confirmation
      },
      { headers: { Authorization: `Bearer ${getAccessToken()}` } }
    );
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
   * revoca refresh en servidor si hay access, conserva lockUser y va a lock-screen.
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
    const objUser = toSessionUser(objData.user || {});
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
