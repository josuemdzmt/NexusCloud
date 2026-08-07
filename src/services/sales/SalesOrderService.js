import api from '@/services/api';

const ENDPOINT = '/api/v1/sales/sales-orders';

export default {
  /**
   * Get list of sales orders
   * Allowed includes: account, currency, pricebook
   * Filters (snake_case): id, account_id, pricebook_id, currency_id, status, amount_source
   * @param {Object} objParams
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get single sales order by ID
   * @param {Number|String} numId
   * @param {Object} objParams - e.g. { include: 'account,currency,pricebook' }
   */
  getById(numId, objParams = {}) {
    return api.get(`${ENDPOINT}/${numId}`, { params: objParams });
  },

  /**
   * Create a new sales order (header only — no nested items)
   * Write: accountId, currencyId, status, effectiveDate, pricebookId?,
   *   billToContactId?, shipToContactId?, amountSource?, discountAmount?,
   *   subtotal?, billToAddress?, shipToAddress?, description?, notes?, termsAndConditions?
   * Response-only (do not send): id, orderNumber, grandTotalAmount, paidAmount, balanceAmount
   * @param {Object} objData
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update sales order (header only — no nested items)
   * @param {Number|String} numId
   * @param {Object} objData
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete sales order
   * @param {Number|String} numId
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
