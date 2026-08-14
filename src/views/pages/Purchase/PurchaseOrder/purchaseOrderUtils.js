import { AMOUNT_SOURCE } from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';

/** subtotal - discountAmount + totalTaxAmount */
export function handleGetGrandTotalPreview(fltSubtotal, fltDiscountAmount = 0, fltTotalTaxAmount = 0) {
  const fltNet = (parseFloat(fltSubtotal) || 0) - (parseFloat(fltDiscountAmount) || 0) + (parseFloat(fltTotalTaxAmount) || 0);
  return parseFloat(Math.max(0, fltNet).toFixed(2));
}

/** Normaliza cabecera PO (camelCase / snake_case). */
export function handleNormalizePurchaseOrder(objRaw) {
  if (!objRaw) return null;
  return {
    ...objRaw,
    id: objRaw.id,
    purchaseNumber: objRaw.purchaseNumber ?? objRaw.purchase_number ?? null,
    accountId: objRaw.accountId ?? objRaw.account_id ?? objRaw.account?.id ?? null,
    currencyId: objRaw.currencyId ?? objRaw.currency_id ?? objRaw.currency?.id ?? null,
    status: objRaw.status,
    effectiveDate: objRaw.effectiveDate ?? objRaw.effective_date ?? null,
    amountSource: objRaw.amountSource ?? objRaw.amount_source ?? AMOUNT_SOURCE.LINE_ITEMS,
    discountAmount: Number(objRaw.discountAmount ?? objRaw.discount_amount ?? 0),
    subtotal: Number(objRaw.subtotal ?? 0),
    totalTaxAmount: Number(objRaw.totalTaxAmount ?? objRaw.total_tax_amount ?? 0),
    grandTotalAmount: Number(objRaw.grandTotalAmount ?? objRaw.grand_total_amount ?? objRaw.totalAmount ?? objRaw.total_amount ?? 0),
    paidAmount: Number(objRaw.paidAmount ?? objRaw.paid_amount ?? 0),
    balanceAmount: Number(objRaw.balanceAmount ?? objRaw.balance_amount ?? 0),
    supplierDocumentType: objRaw.supplierDocumentType ?? objRaw.supplier_document_type ?? null,
    supplierDocumentNumber: objRaw.supplierDocumentNumber ?? objRaw.supplier_document_number ?? null,
    notes: objRaw.notes ?? null,
    termsAndConditions: objRaw.termsAndConditions ?? objRaw.terms_and_conditions ?? null,
    account: objRaw.account || null,
    currency: objRaw.currency || null,
    billToAddress: objRaw.billToAddress ?? objRaw.bill_to_address ?? null,
    shipToAddress: objRaw.shipToAddress ?? objRaw.ship_to_address ?? null
  };
}

export function handleNormalizePurchaseOrderLineItem(objRaw) {
  if (!objRaw) return null;
  const objProduct = objRaw.product || {};
  return {
    ...objRaw,
    id: objRaw.id,
    purchaseOrderId: objRaw.purchaseOrderId ?? objRaw.purchase_order_id ?? null,
    productId: objRaw.productId ?? objRaw.product_id ?? objProduct.id ?? null,
    productName: objProduct.name || objRaw.description || '—',
    quantity: Number(objRaw.quantity ?? 0),
    unitCost: Number(objRaw.unitCost ?? objRaw.unit_cost ?? 0),
    discountAmount: Number(objRaw.discountAmount ?? objRaw.discount_amount ?? 0),
    taxAmount: Number(objRaw.taxAmount ?? objRaw.tax_amount ?? 0),
    totalPrice: Number(objRaw.totalPrice ?? objRaw.total_price ?? 0),
    description: objRaw.description ?? null
  };
}
