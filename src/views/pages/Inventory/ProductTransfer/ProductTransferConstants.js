export const TRANSFER_STATUS = {
  DRAFT: 'Draft',
  READY: 'Ready',
  IN_TRANSIT: 'In_Transit',
  RECEIVED: 'Received',
  CANCELLED: 'Cancelled'
};

export const TRANSFER_STATUS_BADGE = {
  classMap: {
    Draft: 'bg-secondary-transparent text-secondary',
    Ready: 'bg-info-transparent text-info',
    In_Transit: 'bg-warning-transparent text-warning',
    Received: 'bg-success-transparent text-success',
    Cancelled: 'bg-danger-transparent text-danger'
  },
  labelMap: {
    Draft: 'Borrador',
    Ready: 'Listo',
    In_Transit: 'En tránsito',
    Received: 'Recibido',
    Cancelled: 'Cancelado'
  }
};

export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Ver', name: 'view', icon: 'icon-eye' },
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Enviar', name: 'ship', icon: 'icon-truck' },
    { label: 'Recibir', name: 'receive', icon: 'icon-check' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};
