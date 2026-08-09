import api from '@/services/api';

const ENDPOINT = '/api/v1/sales/sales-order-payments';

export default {
  /**
   * Get payments
   * Filter with Spatie: filter[sales_order_id], filter[account_id]
   * Includes: paymentMethod, bank, salesOrder
   * @param {Object} objParams
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get single payment by ID
   * @param {Number|String} recordId
   * @param {Object} objParams
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Create/register a new payment for a sales order
   * @param {Object} objData - { salesOrderId, amount, paymentMethodId, bankId?, paymentReference?, paymentDate, currencyId }
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update payment
   * @param {Number|String} recordId
   * @param {Object} objData
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete payment
   * @param {Number|String} recordId
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
