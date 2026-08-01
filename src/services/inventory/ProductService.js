import api from '@/services/api.js';

const ENDPOINT = '/api/v1/inventory/products';

export default {
  /**
   * Get a paginated list of products or filtered by params
   * @param {Object} params - Query parameters (e.g., page, limit, sort)
   */
  getAll(params = {}) {
    return api.get(ENDPOINT, { params });
  },

  /**
   * Get a single product by its ID
   * @param {Number|String} id - Product ID
   * @param {Object} objParams - Query parameters (e.g. include)
   */
  getById(id, objParams = {}) {
    return api.get(`${ENDPOINT}/${id}`, { params: objParams });
  },

  /**
   * Create a new product
   * @param {Object} data - Product payload
   */
  create(data) {
    return api.post(ENDPOINT, data);
  },

  /**
   * Update an existing product
   * @param {Number|String} id - Product ID
   * @param {Object} data - Product payload to update
   */
  update(id, data) {
    return api.put(`${ENDPOINT}/${id}`, data);
  },

  /**
   * Delete a product
   * @param {Number|String} id - Product ID
   */
  delete(id) {
    return api.delete(`${ENDPOINT}/${id}`);
  }
};
