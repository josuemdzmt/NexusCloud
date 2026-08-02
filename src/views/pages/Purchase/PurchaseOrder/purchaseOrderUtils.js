let numNextItemId = 1;

/**
 * Crea una partida vacía de orden de compra (producto de catálogo requerido).
 * @param {Number} numQty
 * @returns {Object}
 */
export function handleBuildLineItem(numQty = 1) {
  return {
    id: numNextItemId++,
    productId: null,
    productName: '',
    quantity: numQty,
    unitCost: '',
    discountPercent: '',
    lineTotal: 0
  };
}

/**
 * Importe de una partida (qty * unitCost * (1 - discount%)).
 * @param {Object} objItem
 * @returns {String}
 */
export function handleGetItemAmount(objItem) {
  const fltCost = parseFloat(objItem.unitCost) || 0;
  const numQty = parseFloat(objItem.quantity) || 0;
  const fltDiscPercent = parseFloat(objItem.discountPercent) || 0;
  const fltLineTotal = (fltCost * numQty) * (1 - fltDiscPercent / 100);
  return fltLineTotal ? fltLineTotal.toFixed(2) : '';
}

/**
 * Recalcula lineTotal por línea y totales de cabecera.
 * @param {Object} objParams
 * @returns {{ fltSubtotal: Number, fltDiscount: Number, fltTotal: Number }}
 */
export function handleCalculateOrderTotals({
  lstItems = [],
  fltDiscountPercent = 0,
  fltDiscountAmount = 0
} = {}) {
  let fltSubtotal = 0;

  lstItems.forEach((objItem) => {
    const numQty = parseFloat(objItem.quantity) || 0;
    const fltCost = parseFloat(objItem.unitCost) || 0;
    const fltDiscPercent = parseFloat(objItem.discountPercent) || 0;
    const fltLineDisc = (fltCost * numQty) * (fltDiscPercent / 100);
    objItem.lineTotal = parseFloat(((fltCost * numQty) - fltLineDisc).toFixed(2));
    fltSubtotal += objItem.lineTotal;
  });

  fltSubtotal = parseFloat(fltSubtotal.toFixed(2));
  const fltPercentDisc = parseFloat((fltSubtotal * ((parseFloat(fltDiscountPercent) || 0) / 100)).toFixed(2));
  const fltFixedDisc = parseFloat(fltDiscountAmount) || 0;
  const fltDiscount = parseFloat((fltPercentDisc + fltFixedDisc).toFixed(2));
  const fltTotal = parseFloat(Math.max(0, fltSubtotal - fltDiscount).toFixed(2));

  return {
    fltSubtotal,
    fltDiscount,
    fltTotal
  };
}

/**
 * Valida partidas: al menos 1 y productId en todas.
 * @param {Array} lstItems
 * @returns {{ bValid: Boolean, strMessage: String }}
 */
export function handleValidateOrderItems(lstItems) {
  if (!lstItems || lstItems.length === 0) {
    return { bValid: false, strMessage: 'Debes agregar al menos un producto a la orden.' };
  }

  const bMissingProduct = lstItems.some((objItem) => !objItem.productId);
  if (bMissingProduct) {
    return { bValid: false, strMessage: 'Todas las partidas deben tener un producto seleccionado.' };
  }

  const bInvalidQty = lstItems.some((objItem) => !(parseFloat(objItem.quantity) > 0));
  if (bInvalidQty) {
    return { bValid: false, strMessage: 'Todas las líneas deben tener cantidad mayor a 0.' };
  }

  return { bValid: true, strMessage: '' };
}

/**
 * Payload de items para create/update.
 * description = nombre del producto (campo requerido por API).
 * @param {Array} lstItems
 * @returns {Array}
 */
export function handleBuildItemsPayload(lstItems) {
  return (lstItems || []).map((objItem) => ({
    description: String(objItem.productName || '').trim(),
    productId: Number(objItem.productId),
    quantity: Number(objItem.quantity) || 0,
    unitCost: Number(objItem.unitCost) || 0,
    discountPercent: Number(objItem.discountPercent) || 0
  }));
}
