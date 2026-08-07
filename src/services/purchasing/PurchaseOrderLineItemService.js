import api from '@/services/api';

const ENDPOINT = '/api/v1/purchasing/purchase-order-line-items';

export default {
  /**
   * Get a paginated list of purchase order line items
   * @param {Object} objParams - Query parameters (e.g. filter[purchase_order_id], include)
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
   * Create a new purchase order line item
   * @param {Object} objData - { purchaseOrderId, productId, quantity, unitCost, description?, discountAmount?, taxAmount? }
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing line item
   * @param {Number|String} recordId - Line item ID
   * @param {Object} objData - Line item payload to update
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete a line item
   * @param {Number|String} recordId - Line item ID
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
