import api from '@/services/api';

const ENDPOINT = '/api/v1/core/accounts';

export default {
  /**
   * Get a paginated list of customers or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    // Force account_type to Customer
    return api.get(ENDPOINT, { params: { ...objParams, account_type: 'Customer' } });
  },

  /**
   * Get a single customer by its ID
   * @param {Number|String} numId - Customer ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new customer
   * @param {Object} objData - Customer payload
   */
  create(objData) {
    return api.post(ENDPOINT, { ...objData, account_type: 'Customer' });
  },

  /**
   * Update an existing customer
   * @param {Number|String} numId - Customer ID
   * @param {Object} objData - Customer payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, { ...objData, account_type: 'Customer' });
  },

  /**
   * Delete a customer
   * @param {Number|String} numId - Customer ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
