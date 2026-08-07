import { AMOUNT_SOURCE } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';

/** (unitPrice * quantity) - discountAmount */
export function handleGetLineTotalPrice(objItem) {
  const fltPrice = parseFloat(objItem.unitPrice) || 0;
  const numQty = parseFloat(objItem.quantity) || 0;
  const fltDisc = parseFloat(objItem.discountAmount) || 0;
  return parseFloat(Math.max(0, fltPrice * numQty - fltDisc).toFixed(2));
}

/** subtotal - discountAmount */
export function handleGetGrandTotalPreview(fltSubtotal, fltDiscountAmount = 0) {
  return parseFloat(Math.max(0, (parseFloat(fltSubtotal) || 0) - (parseFloat(fltDiscountAmount) || 0)).toFixed(2));
}

/** Filtra entries activos por pricebook + currency. */
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

export function handleMapEntryOptions(lstEntries) {
  return (lstEntries || []).map((objEntry) => ({
    label: `${objEntry.product?.name || 'Producto'} - $${objEntry.unitPrice ?? objEntry.unit_price}`,
    value: objEntry.id
  }));
}

/** Normaliza cabecera SO (camelCase / snake_case). */
export function handleNormalizeSalesOrder(objRaw) {
  if (!objRaw) return null;
  return {
    ...objRaw,
    id: objRaw.id,
    orderNumber: objRaw.orderNumber ?? objRaw.order_number ?? null,
    accountId: objRaw.accountId ?? objRaw.account_id ?? objRaw.account?.id ?? null,
    currencyId: objRaw.currencyId ?? objRaw.currency_id ?? objRaw.currency?.id ?? null,
    pricebookId: objRaw.pricebookId ?? objRaw.pricebook_id ?? objRaw.pricebook?.id ?? null,
    status: objRaw.status,
    effectiveDate: objRaw.effectiveDate ?? objRaw.effective_date ?? null,
    amountSource: objRaw.amountSource ?? objRaw.amount_source ?? AMOUNT_SOURCE.LINE_ITEMS,
    discountAmount: Number(objRaw.discountAmount ?? objRaw.discount_amount ?? 0),
    subtotal: Number(objRaw.subtotal ?? 0),
    grandTotalAmount: Number(objRaw.grandTotalAmount ?? objRaw.grand_total_amount ?? objRaw.totalAmount ?? objRaw.total_amount ?? 0),
    paidAmount: Number(objRaw.paidAmount ?? objRaw.paid_amount ?? 0),
    balanceAmount: Number(objRaw.balanceAmount ?? objRaw.balance_amount ?? 0),
    notes: objRaw.notes ?? null,
    termsAndConditions: objRaw.termsAndConditions ?? objRaw.terms_and_conditions ?? null,
    description: objRaw.description ?? null,
    account: objRaw.account || null,
    currency: objRaw.currency || null,
    pricebook: objRaw.pricebook || null
  };
}

export function handleNormalizeSalesOrderLineItem(objRaw) {
  if (!objRaw) return null;
  const objProduct = objRaw.product || {};
  return {
    ...objRaw,
    id: objRaw.id,
    salesOrderId: objRaw.salesOrderId ?? objRaw.sales_order_id ?? null,
    pricebookEntryId: objRaw.pricebookEntryId ?? objRaw.pricebook_entry_id ?? null,
    productId: objRaw.productId ?? objRaw.product_id ?? objProduct.id ?? null,
    productName: objProduct.name || objRaw.description || '—',
    quantity: Number(objRaw.quantity ?? 0),
    unitPrice: Number(objRaw.unitPrice ?? objRaw.unit_price ?? 0),
    discountAmount: Number(objRaw.discountAmount ?? objRaw.discount_amount ?? 0),
    totalPrice: Number(objRaw.totalPrice ?? objRaw.total_price ?? 0),
    description: objRaw.description ?? null
  };
}
