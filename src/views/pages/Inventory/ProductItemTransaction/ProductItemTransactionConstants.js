/**
 * Tipos de ledger — Salesforce ProductItemTransaction.TransactionType
 * Replenished | Consumed | Transferred | Adjusted
 */
export const TRANSACTION_TYPE = {
  REPLENISHED: 'Replenished',
  CONSUMED: 'Consumed',
  TRANSFERRED: 'Transferred',
  ADJUSTED: 'Adjusted'
};

/** Detalle de motivo cuando transactionType = Adjusted (extensión UI / Vertex) */
export const ADJUSTMENT_REASON = {
  DAMAGED: 'Damaged',
  LOST: 'Lost',
  MISCOUNT: 'Miscount'
};

/** Opciones del combo Motivo (label UI → valor dominio) */
export const ADJUSTMENT_REASON_OPTIONS = [
  { label: 'Reabastecimiento', value: TRANSACTION_TYPE.REPLENISHED },
  { label: 'Consumo', value: TRANSACTION_TYPE.CONSUMED },
  { label: 'Traspaso', value: TRANSACTION_TYPE.TRANSFERRED },
  { label: 'Ajuste manual', value: TRANSACTION_TYPE.ADJUSTED },
  { label: 'Dañado', value: ADJUSTMENT_REASON.DAMAGED },
  { label: 'Perdido', value: ADJUSTMENT_REASON.LOST },
  { label: 'Error de conteo', value: ADJUSTMENT_REASON.MISCOUNT }
];

export const TRANSACTION_TYPE_OPTIONS = [
  { label: 'Reabastecimiento', value: TRANSACTION_TYPE.REPLENISHED },
  { label: 'Consumo', value: TRANSACTION_TYPE.CONSUMED },
  { label: 'Traspaso', value: TRANSACTION_TYPE.TRANSFERRED },
  { label: 'Ajuste manual', value: TRANSACTION_TYPE.ADJUSTED }
];

/** Equivalencias UI: Salesforce value → label / estilo */
export const MOTIVO_BADGE = {
  classMap: {
    Replenished: 'bg-success-transparent text-success',
    Consumed: 'bg-danger-transparent text-danger',
    Transferred: 'bg-info-transparent text-info',
    Adjusted: 'bg-warning-transparent text-warning',
    Damaged: 'bg-danger-transparent text-danger',
    Lost: 'bg-warning-transparent text-warning',
    Miscount: 'bg-secondary-transparent text-secondary'
  },
  labelMap: {
    Replenished: 'Reabastecimiento',
    Consumed: 'Consumo',
    Transferred: 'Traspaso',
    Adjusted: 'Ajuste manual',
    Damaged: 'Dañado',
    Lost: 'Perdido',
    Miscount: 'Error de conteo'
  }
};

export const TRANSACTION_TYPE_BADGE = {
  classMap: {
    Replenished: MOTIVO_BADGE.classMap.Replenished,
    Consumed: MOTIVO_BADGE.classMap.Consumed,
    Transferred: MOTIVO_BADGE.classMap.Transferred,
    Adjusted: MOTIVO_BADGE.classMap.Adjusted
  },
  labelMap: {
    Replenished: MOTIVO_BADGE.labelMap.Replenished,
    Consumed: MOTIVO_BADGE.labelMap.Consumed,
    Transferred: MOTIVO_BADGE.labelMap.Transferred,
    Adjusted: MOTIVO_BADGE.labelMap.Adjusted
  }
};

export const ADJUSTMENT_REASON_BADGE = MOTIVO_BADGE;

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Ajustar', name: 'adjust', icon: 'icon-refresh-cw' }
  ]
};

/**
 * Resuelve ProductItemTransaction.TransactionType (Salesforce) desde el motivo UI.
 * @param {String} strReason
 * @returns {String}
 */
export function handleResolveTransactionType(strReason) {
  const lstLedgerTypes = Object.values(TRANSACTION_TYPE);
  if (lstLedgerTypes.includes(strReason)) return strReason;

  const lstAdjustedReasons = Object.values(ADJUSTMENT_REASON);
  if (lstAdjustedReasons.includes(strReason)) return TRANSACTION_TYPE.ADJUSTED;

  return TRANSACTION_TYPE.ADJUSTED;
}
