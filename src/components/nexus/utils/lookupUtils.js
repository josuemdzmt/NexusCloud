/**
 * Cliente HTTP y mapper para nx-lookup.
 *
 * Contrato Vertex: GET /api/v1/lookup?type=… → { id, name, code }.
 * El front NO proyecta legal_name / iso_code / sku: eso vive en LookupTypeRegistry (PHP).
 *
 * @see docs/components/NX-LOOKUP.md
 */
import api from '@/services/api';

/** Path absoluto del endpoint tipado (axios baseURL suele terminar en /api). */
const LOOKUP_ENDPOINT = '/api/v1/lookup';

/**
 * Crea un mini-servicio getAll / getById contra /lookup para un type.
 *
 * - getAll: búsqueda / listado (params Spatie + type).
 * - getById: hidrata con filter[id] (mismo endpoint; no hay GET /lookup/:id).
 *
 * @param {String} strType Clave registry Vertex (account, currency, pricebook, …).
 * @returns {{ getAll: Function, getById: Function }|null} null si type vacío.
 */
export function handleCreateLookupService(strType) {
  const strLookupType = String(strType || '').trim();
  if (!strLookupType) return null;

  return {
    /**
     * @param {Object} [objParams={}] Query Spatie (filter[*], page, per_page, …).
     * @returns {Promise} Envelope Vertex { data, meta }.
     */
    getAll(objParams = {}) {
      return api.get(LOOKUP_ENDPOINT, {
        params: { ...objParams, type: strLookupType }
      });
    },
    /**
     * @param {Number|String} recordId Id a hidratar.
     * @returns {Promise<Object|null>} Primer LookupDTO o null.
     */
    getById(recordId) {
      return api
        .get(LOOKUP_ENDPOINT, {
          params: {
            type: strLookupType,
            'filter[id]': recordId,
            per_page: 1
          }
        })
        .then((objResponse) => {
          const lstData = Array.isArray(objResponse?.data)
            ? objResponse.data
            : Array.isArray(objResponse)
              ? objResponse
              : [];
          return lstData[0] || null;
        });
    }
  };
}

/**
 * LookupDTO → opción de UI.
 *
 * @param {Object} objRaw Registro { id, name, code } (u opción ya mapeada con value).
 * @returns {{ value: Number|String, label: String, secondary: String }|null}
 */
export function handleMapRecordOption(objRaw) {
  if (!objRaw || typeof objRaw !== 'object') return null;

  const value = objRaw.id ?? objRaw.value ?? null;
  if (value === null || value === undefined || value === '') return null;

  return {
    value,
    label: objRaw.name != null && objRaw.name !== '' ? String(objRaw.name) : String(value),
    secondary: objRaw.code != null && objRaw.code !== '' ? String(objRaw.code) : ''
  };
}
