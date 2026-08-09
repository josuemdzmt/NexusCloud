import api from '@/services/api';

const ENDPOINT = '/api/v1/core/currencies';

/**
 * Resolve the system default currency from a list (client-side).
 * @param {Array} lstCurrencies
 * @returns {Object|null}
 */
export function handleFindDefaultCurrency(lstCurrencies) {
  const lstData = Array.isArray(lstCurrencies) ? lstCurrencies : [];
  return (
    lstData.find((objCurrency) => {
      const bIsDefault = Boolean(objCurrency.is_default ?? objCurrency.isDefault);
      const strStatus = objCurrency.status || (objCurrency.is_active === false || objCurrency.isActive === false ? 'Inactive' : 'Active');
      return bIsDefault && strStatus !== 'Inactive';
    }) || null
  );
}

export default {
  /**
   * Get a paginated list of currencies or filtered by params
   * @param {Object} objParams - Query parameters
   */
  getAll(objParams = {}) {
    return api.get(ENDPOINT, { params: objParams });
  },

  /**
   * Get the corporate/default currency (active + is_default).
   * If lstPreloaded is provided, resolves from that list (no network).
   * Otherwise tries API filter, then full list scan.
   * @param {Array|null} [lstPreloaded]
   * @returns {Promise<Object|null>}
   */
  getDefault(lstPreloaded = null) {
    if (lstPreloaded != null) {
      return Promise.resolve(handleFindDefaultCurrency(lstPreloaded));
    }

    return api
      .get(ENDPOINT, { params: { 'filter[is_default]': 1, per_page: 10 } })
      .then((objResponse) => {
        const lstData = objResponse.data || objResponse;
        const lstCurrencies = Array.isArray(lstData) ? lstData : [];
        const objFromFilter = handleFindDefaultCurrency(lstCurrencies);
        if (objFromFilter) return objFromFilter;

        return api.get(ENDPOINT, { params: { per_page: 500 } }).then((objAllResponse) => {
          const lstAll = objAllResponse.data || objAllResponse;
          return handleFindDefaultCurrency(Array.isArray(lstAll) ? lstAll : []);
        });
      })
      .catch(() =>
        api.get(ENDPOINT, { params: { per_page: 500 } }).then((objAllResponse) => {
          const lstAll = objAllResponse.data || objAllResponse;
          return handleFindDefaultCurrency(Array.isArray(lstAll) ? lstAll : []);
        })
      );
  },

  /**
   * Get a single currency by its ID
   * @param {Number|String} numId - Currency ID
   */
  getById(numId) {
    return api.get(`${ENDPOINT}/${numId}`);
  },

  /**
   * Create a new currency
   * @param {Object} objData - Currency payload
   */
  create(objData) {
    return api.post(ENDPOINT, objData);
  },

  /**
   * Update an existing currency
   * @param {Number|String} numId - Currency ID
   * @param {Object} objData - Currency payload to update
   */
  update(numId, objData) {
    return api.put(`${ENDPOINT}/${numId}`, objData);
  },

  /**
   * Delete a currency
   * @param {Number|String} numId - Currency ID
   */
  delete(numId) {
    return api.delete(`${ENDPOINT}/${numId}`);
  }
};
