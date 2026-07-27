import api from '@/services/api.js';

const ENDPOINT = '/api/v1/inventory/brands';

export default {
  /**
   * Get a paginated list of brands or filtered by params
   * @param {Object} params - Query parameters (e.g., page, limit, sort)
   */
  getAll(params = {}) {
    return api.get(ENDPOINT, { params });
  },

  /**
   * Get a single brand by its ID
   * @param {Number|String} id - Brand ID
   */
  getById(id) {
    return api.get(`${ENDPOINT}/${id}`);
  },

  /**
   * Create a new brand
   * @param {Object} data - Brand payload
   */
  create(data) {
    return api.post(ENDPOINT, data);
  },

  /**
   * Update an existing brand
   * @param {Number|String} id - Brand ID
   * @param {Object} data - Brand payload to update
   */
  update(id, data) {
    return api.put(`${ENDPOINT}/${id}`, data);
  },

  /**
   * Delete a brand
   * @param {Number|String} id - Brand ID
   */
  delete(id) {
    return api.delete(`${ENDPOINT}/${id}`);
  }
};
