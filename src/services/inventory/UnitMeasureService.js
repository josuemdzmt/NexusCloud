import api from '@/services/api';

const ENDPOINT = '/api/v1/inventory/unit-measures';

export default {
  /**
   * Get a paginated list of unit measures or filtered by params
   * @param {Object} objParams - Query parameters (e.g., page, limit, sort)
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get a single unit measure by its ID
   * @param {Number|String} numId - Unit Measure ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new unit measure
   * @param {Object} objData - Unit Measure payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing unit measure
   * @param {Number|String} numId - Unit Measure ID
   * @param {Object} objData - Unit Measure payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a unit measure
   * @param {Number|String} numId - Unit Measure ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
