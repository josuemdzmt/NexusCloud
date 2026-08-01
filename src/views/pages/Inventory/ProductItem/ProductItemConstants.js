export const STOCK_STATUS = {
  ACTIVE: 'Active',
  LOW_STOCK: 'Low_Stock',
  OUT_OF_STOCK: 'Out_of_Stock'
};

export const STOCK_STATUS_BADGE = {
  classMap: {
    Active: 'bg-success-transparent text-success',
    Low_Stock: 'bg-warning-transparent text-warning',
    Out_of_Stock: 'bg-danger-transparent text-danger'
  },
  labelMap: {
    Active: 'Activo',
    Low_Stock: 'Stock bajo',
    Out_of_Stock: 'Sin stock'
  }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Historial', name: 'history', icon: 'icon-history' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};

/**
 * @param {Number} numQty
 * @param {Number|null} numMin
 * @returns {String}
 */
export function handleResolveStockStatus(numQty, numMin = null) {
  const numQuantity = Number(numQty) || 0;
  if (numQuantity <= 0) return STOCK_STATUS.OUT_OF_STOCK;
  if (numMin !== null && numMin !== undefined && numQuantity <= Number(numMin)) return STOCK_STATUS.LOW_STOCK;
  return STOCK_STATUS.ACTIVE;
}
