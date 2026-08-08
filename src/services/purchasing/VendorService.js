import api from '@/services/api';

const ENDPOINT = '/api/v1/core/accounts';
const ACCOUNT_TYPE = 'Vendor';
const ACCOUNT_TYPES = ['Vendor', 'Both'];

export default {
  ACCOUNT_TYPE,
  ACCOUNT_TYPES,

  /**
   * Get a paginated list of vendors (Vendor | Both)
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
   * Get a single vendor by its ID
   * @param {Number|String} recordId - Vendor ID
   */
  getById(recordId) {
    return api.get(`${ENDPOINT}/${recordId}`);
  },

  /**
   * Create a new vendor
   * @param {Object} objData - Vendor payload
   */
  create(objData) {
    return api.post(ENDPOINT, { ...objData, account_type: ACCOUNT_TYPE });
  },

  /**
   * Update an existing vendor
   * @param {Number|String} recordId - Vendor ID
   * @param {Object} objData - Vendor payload to update
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, { ...objData, account_type: ACCOUNT_TYPE });
  },

  /**
   * Delete a vendor
   * @param {Number|String} recordId - Vendor ID
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  },

  /**
   * True if account type is Vendor or Both
   * @param {Object} objAccount
   * @returns {Boolean}
   */
  handleIsVendorAccount(objAccount) {
    const strType = objAccount?.account_type || objAccount?.accountType;
    return !strType || ACCOUNT_TYPES.includes(strType);
  }
};
