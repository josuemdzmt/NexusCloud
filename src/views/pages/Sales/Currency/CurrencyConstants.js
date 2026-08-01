export const STATUS_BADGE = {
  classMap: { Active: 'bg-success-transparent text-success', Inactive: 'bg-danger-transparent text-danger' },
  labelMap: { Active: 'Activo', Inactive: 'Inactivo' }
};

export const IS_DEFAULT_BADGE = {
  classMap: { true: 'bg-primary-transparent text-primary', false: 'bg-secondary-transparent text-secondary' },
  labelMap: { true: 'Sí', false: 'No' }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
