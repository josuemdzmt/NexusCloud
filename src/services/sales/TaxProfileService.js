import api from '@/services/api';

const ENDPOINT = '/api/v1/core/tax-profiles';

export default {
  /**
   * Get a paginated list of tax profiles or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single tax profile by its ID
   * @param {Number|String} numId - Tax Profile ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new tax profile
   * @param {Object} objData - Tax Profile payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing tax profile
   * @param {Number|String} numId - Tax Profile ID
   * @param {Object} objData - Tax Profile payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a tax profile
   * @param {Number|String} numId - Tax Profile ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
