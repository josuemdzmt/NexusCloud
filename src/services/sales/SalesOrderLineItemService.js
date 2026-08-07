import api from '@/services/api';

const ENDPOINT = '/api/v1/sales/sales-order-line-items';

export default {
  /**
   * Get a paginated list of sales order line items
   * @param {Object} objParams - Query parameters (e.g. filter[sales_order_id], include)
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
   * Create a new sales order line item
   * @param {Object} objData - { salesOrderId, pricebookEntryId, productId, quantity, unitPrice?, description?, discountAmount?, taxAmount? }
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
