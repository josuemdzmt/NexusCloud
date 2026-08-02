export const PAYMENT_COLUMNS = [
  { label: 'Fecha', fieldName: 'paymentDateLabel', type: 'text', sortable: true },
  { label: 'Método de Pago', fieldName: 'paymentMethodLabel', type: 'text', sortable: true },
  { label: 'Banco', fieldName: 'bankLabel', type: 'text', sortable: true },
  { label: 'Referencia', fieldName: 'paymentReferenceLabel', type: 'text', sortable: true },
  { label: 'Monto', fieldName: 'amountLabel', type: 'text', sortable: true }
];

export const ACCOUNT_PAYMENT_COLUMNS = [
  { label: 'Fecha', fieldName: 'paymentDateLabel', type: 'text', sortable: true },
  { label: 'Orden', fieldName: 'purchaseOrderLabel', type: 'text', sortable: true },
  { label: 'Método de Pago', fieldName: 'paymentMethodLabel', type: 'text', sortable: true },
  { label: 'Banco', fieldName: 'bankLabel', type: 'text', sortable: true },
  { label: 'Referencia', fieldName: 'paymentReferenceLabel', type: 'text', sortable: true },
  { label: 'Monto', fieldName: 'amountLabel', type: 'text', sortable: true }
];
