import api from '@/services/api';

const ENDPOINT = '/api/v1/purchasing/purchase-orders';

export default {
  /**
   * Get list of purchase orders
   * Allowed includes: account, currency
   * Filters (snake_case): id, account_id, currency_id, status, amount_source,
   *   supplier_document_number, purchase_number
   * @param {Object} objParams
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get single purchase order by ID
   * @param {Number|String} recordId
   * @param {Object} objParams - e.g. { include: 'account,currency' }
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Create a new purchase order (header only — no nested items)
   * Write: accountId, currencyId, status, effectiveDate, amountSource?,
   *   discountAmount?, subtotal?, totalTaxAmount? (solo Manual),
   *   supplierDocumentType?, supplierDocumentNumber?, notes?, termsAndConditions?
   * Response-only (do not send): id, purchaseNumber, grandTotalAmount, paidAmount, balanceAmount
   * @param {Object} objData
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update purchase order (header only — no nested items)
   * @param {Number|String} recordId
   * @param {Object} objData
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete purchase order
   * @param {Number|String} recordId
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
