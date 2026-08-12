import { AMOUNT_SOURCE } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';

/** subtotal - discountAmount + totalTaxAmount */
export function handleGetGrandTotalPreview(fltSubtotal, fltDiscountAmount = 0, fltTotalTaxAmount = 0) {
  const fltNet = (parseFloat(fltSubtotal) || 0) - (parseFloat(fltDiscountAmount) || 0) + (parseFloat(fltTotalTaxAmount) || 0);
  return parseFloat(Math.max(0, fltNet).toFixed(2));
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
    totalTaxAmount: Number(objRaw.totalTaxAmount ?? objRaw.total_tax_amount ?? 0),
    grandTotalAmount: Number(objRaw.grandTotalAmount ?? objRaw.grand_total_amount ?? objRaw.totalAmount ?? objRaw.total_amount ?? 0),
    paidAmount: Number(objRaw.paidAmount ?? objRaw.paid_amount ?? 0),
    balanceAmount: Number(objRaw.balanceAmount ?? objRaw.balance_amount ?? 0),
    notes: objRaw.notes ?? null,
    termsAndConditions: objRaw.termsAndConditions ?? objRaw.terms_and_conditions ?? null,
    description: objRaw.description ?? null,
    account: objRaw.account || null,
    currency: objRaw.currency || null,
    pricebook: objRaw.pricebook || null,
    billToAddress: objRaw.billToAddress ?? objRaw.bill_to_address ?? null,
    shipToAddress: objRaw.shipToAddress ?? objRaw.ship_to_address ?? null
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
    taxAmount: Number(objRaw.taxAmount ?? objRaw.tax_amount ?? 0),
    totalPrice: Number(objRaw.totalPrice ?? objRaw.total_price ?? 0),
    description: objRaw.description ?? null
  };
}

/**
 * Formatea address JSON (org/account) a líneas de preview.
 * @param {Object|null} objAddress
 * @returns {{ street: String, cityLine: String }}
 */
export function handleFormatAddressLines(objAddress) {
  if (!objAddress || typeof objAddress !== 'object') {
    return { street: '', cityLine: '' };
  }

  const strStreetCore = [
    objAddress.street,
    objAddress.ext_num || objAddress.extNum ? `Ext. ${objAddress.ext_num || objAddress.extNum}` : '',
    objAddress.int_num || objAddress.intNum ? `Int. ${objAddress.int_num || objAddress.intNum}` : ''
  ].filter(Boolean).join(' ');

  const strNeighborhood = objAddress.neighborhood
    ? (String(objAddress.neighborhood).startsWith('Col.') ? objAddress.neighborhood : `Col. ${objAddress.neighborhood}`)
    : '';

  const street = [strStreetCore, strNeighborhood].filter(Boolean).join(', ');
  const cityLine = [
    objAddress.city,
    objAddress.state,
    objAddress.zip_code || objAddress.zipCode || objAddress.zip || ''
  ].filter(Boolean).join(', ');
  const strCountry = objAddress.country || '';
  const strCityWithCountry = [cityLine, strCountry].filter(Boolean).join(' · ');

  return { street, cityLine: strCityWithCountry };
}

/**
 * Org API → bloque Compañía del preview.
 * @param {Object|null} objOrg
 * @returns {{ name: String, street: String, cityLine: String, taxId: String, phone: String, email: String }}
 */
export function handleMapOrgToCompanyBlock(objOrg) {
  if (!objOrg) {
    return { name: '—', street: '', cityLine: '', taxId: '—', phone: '', email: '' };
  }
  const objAddr = handleFormatAddressLines(objOrg.address || {});
  return {
    name: objOrg.legal_name || objOrg.legalName || objOrg.name || '—',
    street: objAddr.street,
    cityLine: objAddr.cityLine,
    taxId: objOrg.tax_id || objOrg.taxId || '—',
    phone: objOrg.phone || '',
    email: objOrg.email || ''
  };
}

/**
 * Account API → bloque de dirección (billing fiscal o shipping envío).
 * @param {Object|null} objAccount
 * @param {'billing'|'shipping'} strAddressType
 * @param {Object|null} objOrderAddress - billToAddress / shipToAddress de la SO si existe
 * @returns {{ name: String, street: String, cityLine: String, taxId: String, phone: String, email: String }}
 */
export function handleMapAccountToPartyBlock(objAccount, strAddressType = 'billing', objOrderAddress = null) {
  if (!objAccount && !objOrderAddress) {
    return { name: '—', street: '', cityLine: '', taxId: '—', phone: '', email: '' };
  }

  const strPerson = objAccount
    ? `${objAccount.first_name || objAccount.firstName || ''} ${objAccount.last_name || objAccount.lastName || ''} ${objAccount.second_last_name || objAccount.secondLastName || ''}`.trim()
    : '';
  const strName = objAccount?.name
    || objAccount?.legal_name
    || objAccount?.legalName
    || strPerson
    || '—';

  let objAddrSource = objOrderAddress || null;
  if (!objAddrSource && objAccount) {
    if (strAddressType === 'shipping') {
      objAddrSource = objAccount.shipping_address || objAccount.shippingAddress || null;
    } else {
      objAddrSource = objAccount.billing_address || objAccount.billingAddress || null;
    }
  }
  const objAddr = handleFormatAddressLines(objAddrSource);

  return {
    name: strName,
    street: objAddr.street,
    cityLine: objAddr.cityLine,
    taxId: objAccount?.tax_id || objAccount?.taxId || objAccount?.code || '—',
    phone: objAccount?.phone || objAccount?.mobile || '',
    email: objAccount?.email || ''
  };
}
