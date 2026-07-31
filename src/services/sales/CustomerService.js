import api from '@/services/api';

const ENDPOINT = '/api/v1/core/accounts';
const ACCOUNT_TYPE = 'Customer';

export default {
  ACCOUNT_TYPE,

  /**
   * Get a paginated list of customers
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, {
      params: {
        ...objParams,
        account_type: ACCOUNT_TYPE,
        'filter[account_type]': ACCOUNT_TYPE
      }
    });
  },

  /**
   * Get a single customer by its ID
   * @param {Number|String} numId - Customer ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new customer
   * @param {Object} objData - Customer payload
   */
  create(objData) {
    return api.post(ENDPOINT, { ...objData, account_type: ACCOUNT_TYPE });
  },

  /**
   * Update an existing customer
   * @param {Number|String} numId - Customer ID
   * @param {Object} objData - Customer payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, { ...objData, account_type: ACCOUNT_TYPE });
  },

  /**
   * Delete a customer
   * @param {Number|String} numId - Customer ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
