import api from '@/services/api';

const ENDPOINT = '/api/v1/core/accounts';
const ACCOUNT_TYPE = 'Customer';
const ACCOUNT_TYPES = ['Customer', 'Both'];

export default {
  ACCOUNT_TYPE,
  ACCOUNT_TYPES,

  /**
   * Get a paginated list of customers (Customer | Both)
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    const objBaseParams = { ...objParams };
    delete objBaseParams.account_type;
    delete objBaseParams['filter[account_type]'];

    return api.get(ENDPOINT, {
      params: {
        ...objBaseParams,
        'filter[account_type]': ACCOUNT_TYPES
      }
    });
  },

  /**
   * Get a single customer by its ID
   * @param {Number|String} recordId - Customer ID
   */
  getById(recordId) {
    return api.get(`${ENDPOINT}/${recordId}`);
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
   * @param {Number|String} recordId - Customer ID
   * @param {Object} objData - Customer payload to update
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, { ...objData, account_type: ACCOUNT_TYPE });
  },

  /**
   * Delete a customer
   * @param {Number|String} recordId - Customer ID
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  },

  /**
   * True if account type is Customer or Both
   * @param {Object} objAccount
   * @returns {Boolean}
   */
  handleIsCustomerAccount(objAccount) {
    const strType = objAccount?.account_type || objAccount?.accountType;
    return !strType || ACCOUNT_TYPES.includes(strType);
  }
};
