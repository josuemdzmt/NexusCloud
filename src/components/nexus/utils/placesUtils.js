/**
 * Cliente HTTP para nx-address-search (geocodificación vía Vertex).
 *
 * Contrato: GET /api/v1/address-search?q=… y GET /api/v1/address-search/{placeId}.
 * La API key de Google no vive en NexusCloud.
 *
 * @see docs/components/NX-ADDRESS-SEARCH.md
 */
import api from '@/services/api';

const ADDRESS_SEARCH_ENDPOINT = '/api/v1/address-search';

/** Session token del proveedor (UUID) para agrupar búsqueda + detalle. */
export function handleCreatePlacesSession() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return `sess-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * @param {String} strQuery Texto escrito por el usuario.
 * @param {String} strSession UUID de sesión.
 * @returns {Promise<Array<{ placeId: String, name: String, secondary: String }>>}
 */
export function handleSearchPlaces(strQuery, strSession) {
  return api
    .get(ADDRESS_SEARCH_ENDPOINT, {
      params: { q: strQuery, session: strSession }
    })
    .then((objResponse) => {
      if (Array.isArray(objResponse?.data)) return objResponse.data;
      if (Array.isArray(objResponse)) return objResponse;
      return [];
    });
}

/**
 * @param {String} strPlaceId Identificador del lugar en el proveedor.
 * @param {String} strSession UUID de sesión.
 * @returns {Promise<Object>} JSON de dirección unificado.
 */
export function handleGetPlaceDetails(strPlaceId, strSession) {
  return api
    .get(`${ADDRESS_SEARCH_ENDPOINT}/${encodeURIComponent(strPlaceId)}`, {
      params: { session: strSession }
    })
    .then((objResponse) => {
      if (objResponse?.data && typeof objResponse.data === 'object' && !Array.isArray(objResponse.data)) {
        return objResponse.data;
      }
      return objResponse;
    });
}
