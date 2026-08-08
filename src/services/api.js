import axios from 'axios';
import AuthService from '@/services/auth/AuthService';
import { getAccessToken, handleUnauthorized } from '@/services/auth/authSession';

/**
 * ApiService
 * Cliente Axios del API de negocio (Vertex). No llama login/refresh.
 * En 401 renueva vía AuthService (VITE_AUTH_API_BASE_URL) y reintenta una vez.
 */
class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      timeout: 15000
    });

    /** @type {Promise|null} */
    this.refreshPromise = null;
    this.setupInterceptors();
  }

  setupInterceptors() {
    this.api.interceptors.request.use(
      (config) => {
        const strToken = getAccessToken();
        if (strToken && config.headers) {
          config.headers.Authorization = `Bearer ${strToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response) => response.data,
      async (error) => {
        const objOriginal = error.config;
        const intStatus = error.response?.status;
        const objErrorData = error.response?.data || { message: 'Ocurrió un error inesperado' };

        if (intStatus !== 401 || !objOriginal || objOriginal._retry) {
          return Promise.reject({
            status: intStatus,
            ...objErrorData
          });
        }

        objOriginal._retry = true;

        try {
          if (!this.refreshPromise) {
            this.refreshPromise = AuthService.refresh().finally(() => {
              this.refreshPromise = null;
            });
          }
          await this.refreshPromise;
          objOriginal.headers = objOriginal.headers || {};
          objOriginal.headers.Authorization = `Bearer ${getAccessToken()}`;
          return this.api(objOriginal);
        } catch (objRefreshError) {
          handleUnauthorized();
          return Promise.reject({
            status: 401,
            ...(objRefreshError || objErrorData)
          });
        }
      }
    );
  }

  get(url, config = {}) {
    return this.api.get(url, config);
  }

  post(url, data = {}, config = {}) {
    return this.api.post(url, data, config);
  }

  put(url, data = {}, config = {}) {
    return this.api.put(url, data, config);
  }

  delete(url, config = {}) {
    return this.api.delete(url, config);
  }
}

export default new ApiService();
