import api from '@/services/api';

const ENDPOINT = '/api/v1/purchasing/purchase-order-payments';

export default {
  /**
   * Get payments (filter: purchase_order_id)
   * @param {Object} objParams
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get single payment by ID
   * @param {Number|String} recordId
   * @param {Object} objParams
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Register a payment against a purchase order
   * @param {Object} objData
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update payment
   * @param {Number|String} recordId
   * @param {Object} objData
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete payment
   * @param {Number|String} recordId
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
