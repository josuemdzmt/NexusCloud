import api from '@/services/api';

const ENDPOINT = '/api/v1/core/branches';

export default {
  /**
   * Get a paginated list of branches or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single branch by its ID
   * @param {Number|String} numId - Branch ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new branch
   * @param {Object} objData - Branch payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing branch
   * @param {Number|String} numId - Branch ID
   * @param {Object} objData - Branch payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a branch
   * @param {Number|String} numId - Branch ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
