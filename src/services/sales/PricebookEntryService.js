import api from '@/services/api';

const ENDPOINT = '/api/v1/sales/pricebook-entries';

export default {
  /**
   * Get a paginated list of pricebook entries or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single pricebook entry by its ID
   * @param {Number|String} numId - Pricebook Entry ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new pricebook entry
   * @param {Object} objData - Pricebook Entry payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing pricebook entry
   * @param {Number|String} numId - Pricebook Entry ID
   * @param {Object} objData - Pricebook Entry payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a pricebook entry
   * @param {Number|String} numId - Pricebook Entry ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
