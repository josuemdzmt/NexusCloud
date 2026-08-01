import api from '@/services/api';

const ENDPOINT = '/api/v1/inventory/product-items';

export default {
  /**
   * Get a paginated list of product items or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single product item by its ID
   * @param {Number|String} recordId - Product Item ID
   * @param {Object} objParams - Query parameters (e.g. include)
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Create a new product item
   * @param {Object} objData - Product Item payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing product item (stock levels only)
   * @param {Number|String} recordId - Product Item ID
   * @param {Object} objData - Product Item payload to update
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete a product item
   * @param {Number|String} recordId - Product Item ID
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
