import api from '@/services/api';

const ENDPOINT = '/api/v1/purchasing/purchase-orders';

export default {
  /**
   * Get list of purchase orders
   * @param {Object} objParams
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get single purchase order by ID
   * @param {Number|String} recordId
   * @param {Object} objParams
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Create a new purchase order
   * @param {Object} objData
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update purchase order
   * @param {Number|String} recordId
   * @param {Object} objData
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete purchase order
   * @param {Number|String} recordId
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
