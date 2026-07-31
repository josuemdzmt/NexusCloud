import { NUM_TAX_RATE } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';

let numNextItemId = 1;

/**
 * Crea una partida vacía de orden (Salesforce OrderItem / PricebookEntry).
 * @param {Number} numQty
 * @returns {Object}
 */
export function handleBuildLineItem(numQty = 1) {
  return {
    id: numNextItemId++,
    pricebookEntryId: null,
    productId: null,
    productName: '',
    quantity: numQty,
    unitPrice: '',
    discountPercent: '',
    totalPrice: 0
  };
}

/**
 * Importe de una partida (qty * price * (1 - discount%)).
 * @param {Object} objItem
 * @returns {String}
 */
export function handleGetItemAmount(objItem) {
  const fltPrice = parseFloat(objItem.unitPrice) || 0;
  const numQty = parseInt(objItem.quantity) || 0;
  const fltDiscPercent = parseFloat(objItem.discountPercent) || 0;
  const fltLineTotal = (fltPrice * numQty) * (1 - fltDiscPercent / 100);
  return fltLineTotal ? fltLineTotal.toFixed(2) : '';
}

/**
 * Recalcula totalPrice por línea y totales de cabecera.
 * @param {Object} objParams
 * @returns {{ fltSubtotal: Number, fltDiscount: Number, fltTax: Number, fltTotal: Number }}
 */
export function handleCalculateOrderTotals({
  lstItems = [],
  fltDiscountPercent = 0,
  fltShippingCharge = 0,
  numTaxRate = NUM_TAX_RATE
} = {}) {
  let fltSubtotal = 0;

  lstItems.forEach((objItem) => {
    const numQty = parseInt(objItem.quantity) || 0;
    const fltPrice = parseFloat(objItem.unitPrice) || 0;
    const fltDiscPercent = parseFloat(objItem.discountPercent) || 0;
    const fltLineDisc = (fltPrice * numQty) * (fltDiscPercent / 100);
    objItem.totalPrice = parseFloat(((fltPrice * numQty) - fltLineDisc).toFixed(2));
    fltSubtotal += objItem.totalPrice;
  });

  fltSubtotal = parseFloat(fltSubtotal.toFixed(2));
  const fltDiscount = parseFloat((fltSubtotal * ((parseFloat(fltDiscountPercent) || 0) / 100)).toFixed(2));
  const fltTaxable = Math.max(0, fltSubtotal - fltDiscount);
  const fltTax = parseFloat((fltTaxable * (numTaxRate / 100)).toFixed(2));
  const fltShipping = parseFloat(fltShippingCharge) || 0;
  const fltTotal = parseFloat((fltTaxable + fltTax + fltShipping).toFixed(2));

  return {
    fltSubtotal,
    fltDiscount,
    fltTax,
    fltTotal
  };
}

/**
 * Filtra entries por pricebook + currency + activos (defensivo).
 * @param {Array} lstRaw
 * @param {Number|String} numPricebookId
 * @param {Number|String} numCurrencyId
 * @returns {Array}
 */
export function handleFilterPricebookEntries(lstRaw, numPricebookId, numCurrencyId) {
  if (!Array.isArray(lstRaw)) return [];

  return lstRaw.filter((objEntry) => {
    const entryPricebookId = objEntry.pricebookId ?? objEntry.pricebook_id;
    const entryCurrencyId = objEntry.currencyId ?? objEntry.currency_id;
    const bActive = objEntry.isActive ?? objEntry.is_active ?? true;
    return (
      bActive &&
      Number(entryPricebookId) === Number(numPricebookId) &&
      Number(entryCurrencyId) === Number(numCurrencyId)
    );
  });
}

/**
 * Mapea entries a opciones de combobox.
 * @param {Array} lstEntries
 * @returns {Array<{ label: String, value: Number|String }>}
 */
export function handleMapEntryOptions(lstEntries) {
  return (lstEntries || []).map((objEntry) => ({
    label: `${objEntry.product?.name || 'Producto'} - $${objEntry.unitPrice ?? objEntry.unit_price}`,
    value: objEntry.id
  }));
}

/**
 * Limpia partidas cuyo pricebookEntry ya no es válido.
 * @param {Array} lstItems
 * @param {Array} lstEntries
 * @returns {Array}
 */
export function handleSyncItemsWithEntries(lstItems, lstEntries) {
  const lstValidIds = (lstEntries || []).map((objEntry) => Number(objEntry.id));

  lstItems.forEach((objItem) => {
    if (objItem.pricebookEntryId && !lstValidIds.includes(Number(objItem.pricebookEntryId))) {
      objItem.pricebookEntryId = null;
      objItem.productId = null;
      objItem.productName = '';
      objItem.unitPrice = '';
      objItem.totalPrice = 0;
    }
  });

  return lstItems;
}

/**
 * Valida que existan partidas con producto.
 * @param {Array} lstItems
 * @returns {{ bValid: Boolean, strMessage: String }}
 */
export function handleValidateOrderItems(lstItems) {
  if (!lstItems || lstItems.length === 0) {
    return { bValid: false, strMessage: 'Debes agregar al menos un producto a la orden.' };
  }

  const bMissingProduct = lstItems.some((objItem) => !objItem.pricebookEntryId);
  if (bMissingProduct) {
    return { bValid: false, strMessage: 'Todas las partidas deben tener un producto seleccionado.' };
  }

  return { bValid: true, strMessage: '' };
}

/**
 * Payload de items para create/update.
 * @param {Array} lstItems
 * @returns {Array}
 */
export function handleBuildItemsPayload(lstItems) {
  return (lstItems || []).map((objItem) => ({
    pricebookEntryId: Number(objItem.pricebookEntryId),
    productId: objItem.productId,
    quantity: Number(objItem.quantity) || 0,
    unitPrice: Number(objItem.unitPrice) || 0,
    discountPercent: Number(objItem.discountPercent) || 0,
    totalPrice: Number(objItem.totalPrice) || 0
  }));
}
