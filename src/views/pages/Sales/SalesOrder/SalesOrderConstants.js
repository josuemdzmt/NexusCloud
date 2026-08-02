/**
 * Ciclo de vida de una Orden de Venta
 *
 * Draft (Borrador)
 *   - Orden en preparación. Editable y eliminable.
 *   - Puede crearse directamente en Draft o Activated.
 *   - Puede pasar a: Activated | Cancelled
 *
 * Activated (Activa)
 *   - Orden confirmada. Ya no se edita ni elimina.
 *   - Puede nacer directamente como Activated (venta inmediata).
 *   - Permite registrar abonos.
 *   - Puede pasar a: Completed (si saldo = 0) | Cancelled
 *
 * Completed (Completada)
 *   - Orden cerrada. Estado terminal.
 *   - No admite edición, eliminación ni abonos.
 *
 * Cancelled (Cancelada)
 *   - Orden anulada. Estado terminal.
 *   - No admite edición, eliminación ni abonos.
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

/** Estados iniciales permitidos al crear una orden */
export const ORDER_STATUS_INITIAL = [ORDER_STATUS.DRAFT, ORDER_STATUS.ACTIVATED];

/** Transiciones permitidas: estado actual → estados destino */
export const ORDER_STATUS_TRANSITIONS = {
  [ORDER_STATUS.DRAFT]: [ORDER_STATUS.ACTIVATED, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.ACTIVATED]: [ORDER_STATUS.COMPLETED, ORDER_STATUS.CANCELLED],
  [ORDER_STATUS.COMPLETED]: [],
  [ORDER_STATUS.CANCELLED]: []
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Detalles', name: 'details', icon: 'ph ph-eye' },
    { label: 'Editar', name: 'edit', icon: 'ph ph-pencil' },
    { label: 'Eliminar', name: 'delete', icon: 'ph ph-trash', class: 'text-danger' }
  ]
};

export const NUM_TAX_RATE = 16;

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

/**
 * Valida si una transición de estado es permitida.
 * @param {String|null} strFromStatus - null al crear
 * @param {String} strToStatus
 * @param {Object} objContext - { fltBalanceAmount }
 * @returns {{ bValid: Boolean, strMessage: String }}
 */
export function handleValidateStatusTransition(strFromStatus, strToStatus, objContext = {}) {
  // Crear orden: solo Draft o Activated
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

/**
 * Opciones de estado disponibles desde el estado actual (incluye el actual).
 * Sin estado actual = creación: Draft | Activated.
 * @param {String|null} strCurrentStatus
 * @param {Object} objContext - { fltBalanceAmount }
 * @returns {Array<{ label: String, value: String }>}
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
