import api from '@/services/api';

const ENDPOINT = '/api/v1/core/currencies';

export default {
  /**
   * Get a paginated list of currencies or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single currency by its ID
   * @param {Number|String} numId - Currency ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new currency
   * @param {Object} objData - Currency payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing currency
   * @param {Number|String} numId - Currency ID
   * @param {Object} objData - Currency payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a currency
   * @param {Number|String} numId - Currency ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
