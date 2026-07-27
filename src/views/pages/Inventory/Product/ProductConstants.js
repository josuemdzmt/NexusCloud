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

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
