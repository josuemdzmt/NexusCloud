import api from '@/services/api';

const ENDPOINT = '/api/v1/sales/pricebooks';

export default {
  /**
   * Get a paginated list of pricebooks or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single pricebook by its ID
   * @param {Number|String} numId - Pricebook ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new pricebook
   * @param {Object} objData - Pricebook payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing pricebook
   * @param {Number|String} numId - Pricebook ID
   * @param {Object} objData - Pricebook payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a pricebook
   * @param {Number|String} numId - Pricebook ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
