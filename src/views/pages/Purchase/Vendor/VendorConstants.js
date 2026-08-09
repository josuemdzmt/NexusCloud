export const ACCOUNT_TYPE_BADGE = {
  classMap: { Customer: 'bg-primary-transparent text-primary', Vendor: 'bg-warning-transparent text-warning', Both: 'bg-info-transparent text-info' },
  labelMap: { Customer: 'Cliente', Vendor: 'Proveedor', Both: 'Cliente/Proveedor' }
};

export const IS_PERSON_BADGE = {
  classMap: { true: 'bg-success-transparent text-success', false: 'bg-secondary-transparent text-secondary' },
  labelMap: { true: 'Física', false: 'Moral' }
};

export const STATUS_BADGE = {
  classMap: { Active: 'bg-success-transparent text-success', Inactive: 'bg-danger-transparent text-danger' },
  labelMap: { Active: 'Activo', Inactive: 'Inactivo' }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Detalles', name: 'detail', icon: 'ph ph-eye' },
    { label: 'Editar', name: 'edit', icon: 'ph ph-pencil' }
  ]
};
