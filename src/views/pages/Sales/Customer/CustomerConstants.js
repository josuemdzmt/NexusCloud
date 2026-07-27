export const ACCOUNT_TYPE_BADGE = {
  classMap: { Customer: 'bg-primary-transparent text-primary', Vendor: 'bg-warning-transparent text-warning', Both: 'bg-info-transparent text-info' },
  labelMap: { Customer: 'Cliente', Vendor: 'Proveedor', Both: 'Ambos' }
};

export const IS_PERSON_BADGE = {
  classMap: { true: 'bg-success-transparent text-success', false: 'bg-secondary-transparent text-secondary' },
  labelMap: { true: 'Física', false: 'Moral' }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
