import api from '@/services/api';

const ENDPOINT = '/api/v1/billing/payment-methods';

export default {
  /**
   * Get a paginated list of payment methods or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single payment method by its ID
   * @param {Number|String} numId - Payment Method ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new payment method
   * @param {Object} objData - Payment Method payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing payment method
   * @param {Number|String} numId - Payment Method ID
   * @param {Object} objData - Payment Method payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a payment method
   * @param {Number|String} numId - Payment Method ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
