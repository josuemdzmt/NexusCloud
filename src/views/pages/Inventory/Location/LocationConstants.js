export const LOCATION_TYPE_BADGE = {
  classMap: {
    Warehouse: 'bg-primary-transparent text-primary',
    Van: 'bg-warning-transparent text-warning',
    Virtual: 'bg-info-transparent text-info',
    Site: 'bg-secondary-transparent text-secondary'
  },
  labelMap: {
    Warehouse: 'Almacén',
    Van: 'Furgoneta',
    Virtual: 'Virtual',
    Site: 'Sitio'
  }
};

export const BOOLEAN_BADGE = {
  classMap: { true: 'bg-success-transparent text-success', false: 'bg-gray-200 text-gray-500' },
  labelMap: { true: 'Sí', false: 'No' }
};

export const STATUS_BADGE = {
  classMap: { Active: 'bg-success-transparent text-success', Inactive: 'bg-danger-transparent text-danger' },
  labelMap: { Active: 'Activo', Inactive: 'Inactivo' }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Detalles', name: 'detail', icon: 'icon-eye' },
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
