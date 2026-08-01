import api from '@/services/api';

const ENDPOINT = '/api/v1/inventory/product-item-transactions';

export default {
  /**
   * Get a paginated list of product item transactions or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single product item transaction by its ID
   * @param {Number|String} recordId - Transaction ID
   * @param {Object} objParams - Query parameters (e.g. include)
   */
  getById(recordId, objParams = {}) {
    return api.get(`${ENDPOINT}/${recordId}`, { params: objParams });
  },

  /**
   * Create a new product item transaction (ledger movement / adjustment)
   * @param {Object} objData - Transaction payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  }
};
