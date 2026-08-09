/**
 * catalogCache
 * Caché en memoria tipo LDS para catálogos compartidos.
 *
 * Convención Salesforce-aligned:
 * - Record pages: getById (header) + related list getAll solo al activar nx-tab.
 * - Modales: catálogos en handleOpen vía este módulo; nunca en mounted.
 * - Página form connected (ej. ProductForm): mounted OK, preferible vía cache.
 * - No usar un mega-endpoint que hidrate todas las related lists al montar.
 *
 * Keys usadas: customers, vendors, pricebooks, currencies, paymentMethods, banks,
 * orgs, products, productsActive, inventoryLocations, productItems, brands,
 * unitMeasures, productCategories.
 */

const objDataByKey = new Map();
const objPromiseByKey = new Map();

/**
 * Devuelve data cacheada o ejecuta fnLoader una sola vez (reusa Promise in-flight).
 * @param {string} strKey
 * @param {() => Promise<unknown>} fnLoader
 * @returns {Promise<unknown>}
 */
export function handleGetOrLoad(strKey, fnLoader) {
  if (objDataByKey.has(strKey)) {
    return Promise.resolve(objDataByKey.get(strKey));
  }
  if (objPromiseByKey.has(strKey)) {
    return objPromiseByKey.get(strKey);
  }

  const objPromise = Promise.resolve()
    .then(() => fnLoader())
    .then((objData) => {
      objDataByKey.set(strKey, objData);
      objPromiseByKey.delete(strKey);
      return objData;
    })
    .catch((objError) => {
      objPromiseByKey.delete(strKey);
      throw objError;
    });

  objPromiseByKey.set(strKey, objPromise);
  return objPromise;
}

/**
 * Invalida una key (p.ej. tras CRUD de catálogo).
 * @param {string} strKey
 */
export function handleInvalidateCatalog(strKey) {
  objDataByKey.delete(strKey);
  objPromiseByKey.delete(strKey);
}

/**
 * Limpia toda la caché (p.ej. logout).
 */
export function handleClearCatalogCache() {
  objDataByKey.clear();
  objPromiseByKey.clear();
}

export default {
  handleGetOrLoad,
  handleInvalidateCatalog,
  handleClearCatalogCache
};
