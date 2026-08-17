import api from '@/services/api';

const ENDPOINT = '/api/v1/core/users';

/**
 * UserService
 * CRUD autenticado de usuarios (User + Staff + Profile).
 */
export default {
  /**
   * Lista paginada de usuarios del tenant.
   * @param {Object} objParams Parámetros de query.
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Usuario por ID.
   * @param {Number|String} recordId ID del usuario.
   */
  getById(recordId) {
    return api.get(`${ENDPOINT}/${recordId}`);
  },

  /**
   * Alta de usuario + staff + perfil.
   * @param {Object} objData Payload de alta.
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Actualiza usuario y staff.
   * @param {Number|String} recordId ID del usuario.
   * @param {Object} objData Payload a actualizar.
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Elimina el staff del usuario (no permite auto-eliminarse).
   * @param {Number|String} recordId ID del usuario.
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
