import api from '@/services/api.js';

const ENDPOINT = '/api/v1/inventory/product-categories';

export default {
  /**
   * Get a paginated list of product categories or filtered by params
   * @param {Object} params - Query parameters (e.g., page, limit, sort)
   */
  getAll(params = {}) {
    return api.get(ENDPOINT, { params });
  },

  /**
   * Get a single product category by its ID
   * @param {Number|String} id - Category ID
   */
  getById(id) {
    return api.get(`${ENDPOINT}/${id}`);
  },

  /**
   * Create a new product category
   * @param {Object} data - Category payload
   */
  create(data) {
    return api.post(ENDPOINT, data);
  },

  /**
   * Update an existing product category
   * @param {Number|String} id - Category ID
   * @param {Object} data - Category payload to update
   */
  update(id, data) {
    return api.put(`${ENDPOINT}/${id}`, data);
  },

  /**
   * Delete a product category
   * @param {Number|String} id - Category ID
   */
  delete(id) {
    return api.delete(`${ENDPOINT}/${id}`);
  }
};
