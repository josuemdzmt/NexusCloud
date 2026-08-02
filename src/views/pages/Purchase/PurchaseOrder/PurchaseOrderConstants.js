/**
 * Ciclo de vida de una Orden de Compra (PurchaseOrderStatus)
 *
 * Draft (Borrador)
 *   - Editable (cabecera + líneas). Eliminable.
 *   - Create: Draft | Activated.
 *   - Puede pasar a: Activated | Cancelled
 *   - Un abono sobre Draft la activa.
 *
 * Activated (Activa)
 *   - Confirmada. No se editan líneas/cabecera (salvo cancelar).
 *   - Permite registrar abonos.
 *   - Puede pasar a: Completed (automático si saldo = 0) | Cancelled
 *
 * Completed (Completada)
 *   - Terminal. Saldo = 0.
 *
 * Cancelled (Cancelada)
 *   - Terminal. Sin abonos ni edición.
 */

export const ORDER_STATUS = {
  DRAFT: 'Draft',
  ACTIVATED: 'Activated',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled'
};

export const ORDER_STATUS_BADGE = {
  classMap: {
    [ORDER_STATUS.DRAFT]: 'bg-warning-transparent text-warning',
    [ORDER_STATUS.ACTIVATED]: 'bg-primary-transparent text-primary',
    [ORDER_STATUS.COMPLETED]: 'bg-success-transparent text-success',
    [ORDER_STATUS.CANCELLED]: 'bg-danger-transparent text-danger'
  },
  solidClassMap: {
    [ORDER_STATUS.DRAFT]: 'bg-warning text-white',
    [ORDER_STATUS.ACTIVATED]: 'bg-primary text-white',
    [ORDER_STATUS.COMPLETED]: 'bg-success text-white',
    [ORDER_STATUS.CANCELLED]: 'bg-danger text-white'
  },
  labelMap: {
    [ORDER_STATUS.DRAFT]: 'Borrador',
    [ORDER_STATUS.ACTIVATED]: 'Activa',
    [ORDER_STATUS.COMPLETED]: 'Completada',
    [ORDER_STATUS.CANCELLED]: 'Cancelada'
  }
};

/** Estados iniciales permitidos al crear */
export const ORDER_STATUS_INITIAL = [ORDER_STATUS.DRAFT, ORDER_STATUS.ACTIVATED];

export const ORDER_STATUS_TRANSITIONS = {
  [ORDER_STATUS.DRAFT]: [ORDER_STATUS.ACTIVATED, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.ACTIVATED]: [ORDER_STATUS.COMPLETED, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.COMPLETED]: [],
  [ORDER_STATUS.CANCELLED]: []
};

/** supplierDocumentType (backend picklist) */
export const SUPPLIER_DOCUMENT_TYPE = {
  INVOICE: 'Invoice',
  CREDIT_NOTE: 'CreditNote',
  RECEIPT: 'Receipt',
  OTHER: 'Other'
};

export const SUPPLIER_DOCUMENT_TYPE_OPTIONS = [
  { label: 'Factura', value: SUPPLIER_DOCUMENT_TYPE.INVOICE },
  { label: 'Nota de crédito', value: SUPPLIER_DOCUMENT_TYPE.CREDIT_NOTE },
  { label: 'Recibo', value: SUPPLIER_DOCUMENT_TYPE.RECEIPT },
  { label: 'Otro', value: SUPPLIER_DOCUMENT_TYPE.OTHER }
];

export const SUPPLIER_DOCUMENT_TYPE_LABEL = {
  [SUPPLIER_DOCUMENT_TYPE.INVOICE]: 'Factura',
  [SUPPLIER_DOCUMENT_TYPE.CREDIT_NOTE]: 'Nota de crédito',
  [SUPPLIER_DOCUMENT_TYPE.RECEIPT]: 'Recibo',
  [SUPPLIER_DOCUMENT_TYPE.OTHER]: 'Otro'
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Detalles', name: 'details', icon: 'ph ph-eye' },
    { label: 'Editar', name: 'edit', icon: 'ph ph-pencil' },
    { label: 'Eliminar', name: 'delete', icon: 'ph ph-trash', class: 'text-danger' }
  ]
};

export function handleGetStatusLabel(strStatus) {
  return ORDER_STATUS_BADGE.labelMap[strStatus] || strStatus;
}

export function handleGetStatusClass(strStatus) {
  return ORDER_STATUS_BADGE.solidClassMap[strStatus] || 'bg-light text-default';
}

export function handleCanEditOrder(strStatus) {
  return strStatus === ORDER_STATUS.DRAFT;
}

export function handleCanDeleteOrder(strStatus) {
  return strStatus === ORDER_STATUS.DRAFT;
}

/** Abonos permitidos en Draft (activa) y Activated; no en terminales */
export function handleCanRegisterPayment(strStatus) {
  return strStatus === ORDER_STATUS.DRAFT || strStatus === ORDER_STATUS.ACTIVATED;
}

export function handleCanCancelOrder(strStatus) {
  return strStatus === ORDER_STATUS.DRAFT || strStatus === ORDER_STATUS.ACTIVATED;
}

export function handleValidateStatusTransition(strFromStatus, strToStatus, objContext = {}) {
  if (!strFromStatus) {
    if (!ORDER_STATUS_INITIAL.includes(strToStatus)) {
      return {
        bValid: false,
        strMessage: `Una orden nueva solo puede nacer como "${handleGetStatusLabel(ORDER_STATUS.DRAFT)}" o "${handleGetStatusLabel(ORDER_STATUS.ACTIVATED)}".`
      };
    }
    return { bValid: true, strMessage: '' };
  }

  if (strFromStatus === strToStatus) {
    return { bValid: true, strMessage: '' };
  }

  const lstAllowed = ORDER_STATUS_TRANSITIONS[strFromStatus] || [];
  if (!lstAllowed.includes(strToStatus)) {
    return {
      bValid: false,
      strMessage: `No se puede cambiar de "${handleGetStatusLabel(strFromStatus)}" a "${handleGetStatusLabel(strToStatus)}".`
    };
  }

  if (strToStatus === ORDER_STATUS.COMPLETED && Number(objContext.fltBalanceAmount) > 0) {
    return {
      bValid: false,
      strMessage: 'No se puede completar la orden mientras exista saldo pendiente.'
    };
  }

  return { bValid: true, strMessage: '' };
}

export function handleGetAvailableStatusOptions(strCurrentStatus = null, objContext = {}) {
  if (!strCurrentStatus) {
    return ORDER_STATUS_INITIAL.map((strStatus) => ({
      label: handleGetStatusLabel(strStatus),
      value: strStatus
    }));
  }

  const lstNext = (ORDER_STATUS_TRANSITIONS[strCurrentStatus] || []).filter((strStatus) => {
    if (strStatus === ORDER_STATUS.COMPLETED) {
      return Number(objContext.fltBalanceAmount) <= 0;
    }
    return true;
  });

  return [strCurrentStatus, ...lstNext].map((strStatus) => ({
    label: handleGetStatusLabel(strStatus),
    value: strStatus
  }));
}
