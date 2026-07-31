import api from '@/services/api';

const ENDPOINT = '/api/v1/sales/sales-order-payments';

export default {
  /**
   * Get payments (can filter by sales_order_id)
   * @param {Object} objParams
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Create/register a new payment for a sales order
   * @param {Object} objData
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  }
};
