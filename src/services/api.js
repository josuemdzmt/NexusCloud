import axios from 'axios';

/**
 * ApiService
 * Cliente Axios centralizado para la comunicación con el backend Vertex (Laravel).
 * Maneja automáticamente la inyección del token de autorización y la gestión de errores.
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

    this.setupInterceptors();
  }

  /**
   * Configura los interceptores de Axios para manejar tokens y respuestas.
   */
  setupInterceptors() {
    this.api.interceptors.request.use(
      (config) => {
        const strUser = localStorage.getItem('user');
        let strToken = null;

        if (strUser) {
          try {
            const objUser = JSON.parse(strUser);
            strToken = objUser.token;
          } catch (e) {
            console.error('Error al parsear el usuario del localStorage:', e);
          }
        }

        if (strToken && config.headers) {
          config.headers.Authorization = `Bearer ${strToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const objErrorData = error.response?.data || { message: 'Ocurrió un error inesperado' };

        if (error.response?.status === 401) {
          console.warn('Sesión expirada o inválida. Activando pantalla de bloqueo...');

          // Guardar datos básicos para la pantalla de bloqueo antes de borrar el token
          const strUserLocal = localStorage.getItem('user');
          if (strUserLocal) {
            try {
              const objUserLocal = JSON.parse(strUserLocal);
              localStorage.setItem(
                'expired_user',
                JSON.stringify({
                  email: objUserLocal.email,
                  name: objUserLocal.name || 'Usuario'
                })
              );
              localStorage.setItem('session_expired', 'true');
            } catch (e) {
              console.error('Error al guardar datos de sesión expirada:', e);
            }
          }

          localStorage.removeItem('user');

          // Redirigir a la pantalla de bloqueo
          window.location.href = '/lock-screen';
        }

        return Promise.reject({
          status: error.response?.status,
          ...objErrorData
        });
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
