import api from '@/services/api';

const ENDPOINT = '/api/v1/core/orgs';

export default {
  /**
   * Get a paginated list of organizations or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single organization by its ID
   * @param {Number|String} numId - Organization ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new organization
   * @param {Object} objData - Organization payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing organization
   * @param {Number|String} numId - Organization ID
   * @param {Object} objData - Organization payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete an organization
   * @param {Number|String} numId - Organization ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
