export const STATUS_BADGE = {
  classMap: { true: 'bg-success-transparent text-success', false: 'bg-danger-transparent text-danger', 1: 'bg-success-transparent text-success', 0: 'bg-danger-transparent text-danger' },
  labelMap: { true: 'Activo', false: 'Inactivo', 1: 'Activo', 0: 'Inactivo' }
};

export const YES_NO_BADGE = {
  classMap: { true: 'bg-primary-transparent text-primary', false: 'bg-light text-default', 1: 'bg-primary-transparent text-primary', 0: 'bg-light text-default' },
  labelMap: { true: 'Sí', false: 'No', 1: 'Sí', 0: 'No' }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Detalles', name: 'details', icon: 'icon-eye' },
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};

export const ENTRY_ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Remover', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
