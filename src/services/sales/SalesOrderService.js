import api from '@/services/api';

const ENDPOINT = '/api/v1/sales/sales-orders';

export default {
  /**
   * Get list of sales orders
   * @param {Object} objParams
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get single sales order by ID
   * @param {Number|String} numId
   */
  getById(numId, objParams = {}) {
    return api.get(`${ENDPOINT}/${numId}`, { params: objParams });
  },

  /**
   * Create a new sales order
   * @param {Object} objData
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update sales order
   * @param {Number|String} numId
   * @param {Object} objData
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete sales order
   * @param {Number|String} numId
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
