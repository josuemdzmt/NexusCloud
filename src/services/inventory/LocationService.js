import api from '@/services/api.js';

const ENDPOINT = '/api/v1/inventory/locations';

export default {
  /**
   * Get a paginated list of locations or filtered by params
   * @param {Object} params - Query parameters (e.g., page, limit, sort)
   */
  getAll(params = {}) {
    return api.get(ENDPOINT, { params });
  },

  /**
   * Get a single location by its ID
   * @param {Number|String} id - Location ID
   */
  getById(id) {
    return api.get(`${ENDPOINT}/${id}`);
  },

  /**
   * Create a new location
   * @param {Object} data - Location payload
   */
  create(data) {
    return api.post(ENDPOINT, data);
  },

  /**
   * Update an existing location
   * @param {Number|String} id - Location ID
   * @param {Object} data - Location payload to update
   */
  update(id, data) {
    return api.put(`${ENDPOINT}/${id}`, data);
  },

  /**
   * Delete a location
   * @param {Number|String} id - Location ID
   */
  delete(id) {
    return api.delete(`${ENDPOINT}/${id}`);
  }
};
