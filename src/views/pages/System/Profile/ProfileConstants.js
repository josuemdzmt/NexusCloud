export const ACTION_BUTTONS = {
  rowActions: [
    { label: 'Editar', name: 'edit', icon: 'ph ph-pencil' },
    { label: 'Permisos', name: 'permission', icon: 'ph ph-shield-check' },
    { label: 'Eliminar', name: 'delete', icon: 'ph ph-trash', class: 'text-danger' }
  ]
};

export const LST_PERMISSION_ACTION_ORDER = ['create', 'update', 'delete', 'read'];

export const LST_PERMISSION_SECTIONS = [
  { label: 'Sistema', objects: ['user', 'profile', 'org', 'branch'] },
  { label: 'Inventario', objects: ['product', 'product_item', 'location'] },
  { label: 'Ventas', objects: ['sales_order', 'pricebook', 'payment_method', 'bank', 'currency'] },
  { label: 'Compras', objects: ['purchase_order'] },
  { label: 'Cuentas', objects: ['account'] }
];

export function handlePermissionActionColumns(lstActions) {
  const objByName = Object.fromEntries((lstActions || []).map((objAction) => [objAction.name, objAction]));
  const lstOrdered = LST_PERMISSION_ACTION_ORDER.map((strName) => objByName[strName]).filter(Boolean);
  const lstRest = (lstActions || []).filter((objAction) => !LST_PERMISSION_ACTION_ORDER.includes(objAction.name));
  return [...lstOrdered, ...lstRest];
}

export function handleGroupPermissionSections(lstObjects) {
  const objByName = Object.fromEntries((lstObjects || []).map((objObject) => [objObject.name, objObject]));
  const objUsed = {};
  const lstSections = LST_PERMISSION_SECTIONS.map((objSection) => ({
    label: objSection.label,
    objects: objSection.objects.map((strName) => objByName[strName]).filter(Boolean)
  })).filter((objSection) => objSection.objects.length);
  lstSections.forEach((objSection) => {
    objSection.objects.forEach((objObject) => {
      objUsed[objObject.name] = true;
    });
  });
  const lstOther = (lstObjects || []).filter((objObject) => !objUsed[objObject.name]);
  if (lstOther.length) {
    lstSections.push({ label: 'Otros', objects: lstOther });
  }
  return lstSections;
}
