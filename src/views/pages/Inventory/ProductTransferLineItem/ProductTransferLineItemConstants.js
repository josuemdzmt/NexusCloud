export const LINE_ITEM_ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
    { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
  ]
};

export const LINE_ITEM_COLUMNS = [
  { label: 'Producto', fieldName: 'productName', type: 'text', sortable: true },
  { label: 'SKU', fieldName: 'productSku', type: 'text', sortable: true },
  { label: 'Cant. solicitada', fieldName: 'quantityRequested', type: 'number', sortable: true },
  { label: 'Cant. recibida', fieldName: 'quantityReceivedLabel', type: 'text', sortable: true },
  { label: 'Acción', type: 'action', typeAttributes: LINE_ITEM_ACTION_BUTTONS }
];
