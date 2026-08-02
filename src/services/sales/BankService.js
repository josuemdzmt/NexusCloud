import api from '@/services/api';

const ENDPOINT = '/api/v1/billing/banks';

export default {
  /**
   * Get a paginated list of banks or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single bank by its ID
   * @param {Number|String} recordId - Bank ID
   */
  getById(recordId) {
    return api.get(`${ENDPOINT}/${recordId}`);
  },

  /**
   * Create a new bank
   * @param {Object} objData - Bank payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing bank
   * @param {Number|String} recordId - Bank ID
   * @param {Object} objData - Bank payload to update
   */
  update(recordId, objData) {
    return api.put(`${ENDPOINT}/${recordId}`, objData);
  },

  /**
   * Delete a bank
   * @param {Number|String} recordId - Bank ID
   */
  delete(recordId) {
    return api.delete(`${ENDPOINT}/${recordId}`);
  }
};
