import axios from 'axios';

/**
 * Cliente HTTP del bounded context Auth (separable vía VITE_AUTH_API_BASE_URL).
 * No usar para Inventory/Sales — solo /v1/auth/*.
 */
const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API_BASE_URL || import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 15000
});

authApi.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const objErrorData = error.response?.data || { message: 'Ocurrió un error inesperado' };
    return Promise.reject({
      status: error.response?.status,
      ...objErrorData
    });
  }
);

export default authApi;
