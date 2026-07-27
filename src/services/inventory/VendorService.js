import api from '@/services/api';

const ENDPOINT = '/api/v1/core/accounts';

export default {
  /**
   * Get a paginated list of vendors or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    // Force account_type to Vendor
    return api.get(ENDPOINT, { params: { ...objParams, account_type: 'Vendor' } });
  },

  /**
   * Get a single vendor by its ID
   * @param {Number|String} numId - Vendor ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new vendor
   * @param {Object} objData - Vendor payload
   */
  create(objData) {
    return api.post(ENDPOINT, { ...objData, account_type: 'Vendor' });
  },

  /**
   * Update an existing vendor
   * @param {Number|String} numId - Vendor ID
   * @param {Object} objData - Vendor payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, { ...objData, account_type: 'Vendor' });
  },

  /**
   * Delete a vendor
   * @param {Number|String} numId - Vendor ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
