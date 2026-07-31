export const STATUS_BADGE = {
  classMap: { true: 'bg-success-transparent text-success', false: 'bg-danger-transparent text-danger', 1: 'bg-success-transparent text-success', 0: 'bg-danger-transparent text-danger' },
  labelMap: { true: 'Activo', false: 'Inactivo', 1: 'Activo', 0: 'Inactivo' }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
