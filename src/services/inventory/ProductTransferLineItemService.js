import api from '@/services/api';

const ENDPOINT = '/api/v1/inventory/product-transfer-line-items';

export default {
  /**
   * Get a paginated list of product transfer line items
   * @param {Object} objParams - Query parameters (e.g. filter[product_transfer_id], include)
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single line item by its ID
   * @param {Number|String} recordId - Line item ID
   * @param {Object} objParams - Query parameters (e.g. include)
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Create a new product transfer line item
   * @param {Object} objData - { productTransferId, productId, quantityRequested }
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing product transfer line item
   * @param {Number|String} recordId - Line item ID
   * @param {Object} objData - Line item payload to update
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete a product transfer line item
   * @param {Number|String} recordId - Line item ID
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
