/**
 * Ciclo de vida SalesOrder (Vertex / Salesforce Order)
 *
 * Draft → Activated | Cancelled
 * Activated → Completed (saldo 0) | Cancelled
 * Completed / Cancelled — terminales
 *
 * amountSource: Manual (subtotal cabecera) | LineItems (suma de líneas)
 * orderNumber es response-only (generado por backend).
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

/** amountSource picklist */
export const AMOUNT_SOURCE = {
  MANUAL: 'Manual',
  LINE_ITEMS: 'LineItems'
};

export const AMOUNT_SOURCE_OPTIONS = [
  { label: 'Líneas de producto', value: AMOUNT_SOURCE.LINE_ITEMS },
  { label: 'Monto manual', value: AMOUNT_SOURCE.MANUAL }
];

export const AMOUNT_SOURCE_LABEL = {
  [AMOUNT_SOURCE.MANUAL]: 'Monto manual',
  [AMOUNT_SOURCE.LINE_ITEMS]: 'Líneas de producto'
};

export const ORDER_STATUS_INITIAL = [ORDER_STATUS.DRAFT, ORDER_STATUS.ACTIVATED];

export const ORDER_STATUS_TRANSITIONS = {
  [ORDER_STATUS.DRAFT]: [ORDER_STATUS.ACTIVATED, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.ACTIVATED]: [ORDER_STATUS.COMPLETED, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.COMPLETED]: [],
  [ORDER_STATUS.CANCELLED]: []
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Detalle', name: 'detail', icon: 'ph ph-eye' },
    { label: 'Editar', name: 'edit', icon: 'ph ph-pencil' },
    { label: 'Eliminar', name: 'delete', icon: 'ph ph-trash', class: 'text-danger' }
  ]
};

export const LINE_ITEM_ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'ph ph-pencil' },
    { label: 'Eliminar', name: 'delete', icon: 'ph ph-trash', class: 'text-danger' }
  ]
};

export const LINE_ITEM_COLUMNS = [
  { label: 'Producto', fieldName: 'productName', type: 'text', sortable: true },
  { label: 'Cantidad', fieldName: 'quantity', type: 'number', sortable: true },
  { label: 'Precio unit.', fieldName: 'unitPrice', type: 'currency', sortable: true },
  { label: 'Descuento', fieldName: 'discountAmount', type: 'currency', sortable: true },
  { label: 'Total', fieldName: 'totalPrice', type: 'currency', sortable: true },
  { label: 'Acción', type: 'action', typeAttributes: LINE_ITEM_ACTION_BUTTONS }
];

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

export function handleCanRegisterPayment(strStatus) {
  return strStatus === ORDER_STATUS.ACTIVATED;
}

export function handleCanCancelOrder(strStatus) {
  return strStatus === ORDER_STATUS.DRAFT || strStatus === ORDER_STATUS.ACTIVATED;
}

/**
 * @param {String} strAmountSource
 * @param {Object} objContext - { numLineCount, fltSubtotal }
 * @returns {{ bValid: Boolean, strMessage: String }}
 */
export function handleValidateAmountSourceForActivation(strAmountSource, objContext = {}) {
  const strSource = strAmountSource || AMOUNT_SOURCE.LINE_ITEMS;
  if (strSource === AMOUNT_SOURCE.LINE_ITEMS) {
    if (!(Number(objContext.numLineCount) > 0)) {
      return {
        bValid: false,
        strMessage: 'Con origen "Líneas de producto" debes agregar al menos una línea antes de activar.'
      };
    }
    return { bValid: true, strMessage: '' };
  }
  if (!(Number(objContext.fltSubtotal) > 0)) {
    return {
      bValid: false,
      strMessage: 'Con origen "Monto manual" el subtotal debe ser mayor a 0 para activar.'
    };
  }
  return { bValid: true, strMessage: '' };
}

/**
 * @param {String|null} strFromStatus - null al crear
 * @param {String} strToStatus
 * @param {Object} objContext - { fltBalanceAmount, strAmountSource, numLineCount, fltSubtotal }
 * @returns {{ bValid: Boolean, strMessage: String }}
 */
export function handleValidateStatusTransition(strFromStatus, strToStatus, objContext = {}) {
  if (!strFromStatus) {
    if (!ORDER_STATUS_INITIAL.includes(strToStatus)) {
      return {
        bValid: false,
        strMessage: `Una orden nueva solo puede nacer como "${handleGetStatusLabel(ORDER_STATUS.DRAFT)}" o "${handleGetStatusLabel(ORDER_STATUS.ACTIVATED)}".`
      };
    }
    if (strToStatus === ORDER_STATUS.ACTIVATED) {
      return handleValidateAmountSourceForActivation(objContext.strAmountSource, objContext);
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

  if (strToStatus === ORDER_STATUS.ACTIVATED) {
    const objAmountCheck = handleValidateAmountSourceForActivation(objContext.strAmountSource, objContext);
    if (!objAmountCheck.bValid) return objAmountCheck;
  }

  if (strToStatus === ORDER_STATUS.COMPLETED && Number(objContext.fltBalanceAmount) > 0) {
    return {
      bValid: false,
      strMessage: 'No se puede completar la orden mientras exista saldo pendiente.'
    };
  }

  return { bValid: true, strMessage: '' };
}

/**
 * @param {String|null} strCurrentStatus
 * @param {Object} objContext - { fltBalanceAmount }
 */
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
