import api from '@/services/api';

const ENDPOINT = '/api/v1/core/profiles';
const PERMISSION_ENDPOINT = '/api/v1/core/permissions';

/**
 * ProfileService
 * Catálogo de perfiles (Spatie Role type=profile) y matriz de permisos.
 */
export default {
  /**
   * Lista paginada de perfiles.
   * @param {Object} objParams Parámetros de query.
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Perfil por ID.
   * @param {Number|String} recordId ID del perfil.
   */
  getById(recordId) {
    return api.get(`${ENDPOINT}/${recordId}`);
  },

  /**
   * Catálogo fijo objeto × acción para la matriz del formulario.
   */
  getCatalog() {
    return api.get(PERMISSION_ENDPOINT);
  },

  /**
   * Alta de perfil con permisos.
   * @param {Object} objData Payload (name, permissions).
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Actualiza nombre y permisos.
   * @param {Number|String} recordId ID del perfil.
   * @param {Object} objData Payload a actualizar.
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Elimina un perfil no bloqueado y sin usuarios.
   * @param {Number|String} recordId ID del perfil.
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
