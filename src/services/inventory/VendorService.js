import api from '@/services/api';

const ENDPOINT = '/api/v1/core/accounts';
const ACCOUNT_TYPE = 'Vendor';

export default {
  ACCOUNT_TYPE,

  /**
   * Get a paginated list of vendors
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
   * Get a single vendor by its ID
   * @param {Number|String} numId - Vendor ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
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
   * @param {Number|String} numId - Vendor ID
   * @param {Object} objData - Vendor payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, { ...objData, account_type: ACCOUNT_TYPE });
  },

  /**
   * Delete a vendor
   * @param {Number|String} numId - Vendor ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
