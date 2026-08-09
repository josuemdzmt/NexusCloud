export const PRODUCT_STATUS_BADGE = {
  classMap: {
    Active: 'bg-success-transparent text-success',
    Inactive: 'bg-danger-transparent text-danger',
    'En Stock': 'bg-success-transparent text-success',
    'Low Stock': 'bg-warning-transparent text-warning',
    'No Stock': 'bg-danger-transparent text-danger'
  },
  labelMap: {
    Active: 'Activo',
    Inactive: 'Inactivo',
    'En Stock': 'En Stock',
    'Low Stock': 'Poco Stock',
    'No Stock': 'Sin Stock'
  }
};

export const ENTRY_STATUS_BADGE = {
  classMap: {
    true: 'bg-success-transparent text-success',
    false: 'bg-danger-transparent text-danger',
    1: 'bg-success-transparent text-success',
    0: 'bg-danger-transparent text-danger'
  },
  labelMap: {
    true: 'Activo',
    false: 'Inactivo',
    1: 'Activo',
    0: 'Inactivo'
  }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Detalles', name: 'detail', icon: 'icon-eye' },
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
