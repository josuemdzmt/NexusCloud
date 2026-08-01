import api from '@/services/api';

const ENDPOINT = '/api/v1/inventory/product-transfers';

export default {
  /**
   * Get a paginated list of product transfers or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single product transfer by its ID
   * @param {Number|String} recordId - Transfer ID
   * @param {Object} objParams - Query parameters (e.g. include)
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Create a new product transfer
   * @param {Object} objData - Transfer payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing product transfer
   * @param {Number|String} recordId - Transfer ID
   * @param {Object} objData - Transfer payload to update
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete a product transfer
   * @param {Number|String} recordId - Transfer ID
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  },

  /**
   * Process a product transfer status transition
   * @param {Number|String} recordId - Transfer ID
   * @param {Object} objData - Process payload (e.g. { status })
   */
  process(recordId, objData) {
    return api.post(`${ENDPOINT}/${recordId}/process`, objData);
  }
};
