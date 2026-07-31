/**
 * Genera una lista de opciones para un combobox o select a partir de un catálogo,
 * asegurando que siempre se muestren los registros activos y además se incluya 
 * el registro seleccionado actualmente, incluso si está inactivo.
 * 
 * @param lstRawData - Lista cruda de registros obtenidos del API
 * @param numCurrentId - ID del registro actualmente seleccionado en el formulario (opcional)
 * @param strLabelField - Nombre de la propiedad a usar como etiqueta (por defecto 'name')
 * @param strValueField - Nombre de la propiedad a usar como valor (por defecto 'id')
 * @returns Array de opciones mapeadas con {label, value}
 */
export function handleBuildCatalogOptions(
  lstRawData: any[],
  numCurrentId: string | number | null = null,
  strLabelField: string = 'name',
  strValueField: string = 'id'
) {
  if (!Array.isArray(lstRawData)) {
    return [];
  }

  return lstRawData
    .filter((objItem) => objItem.status === 'Active' || (numCurrentId && objItem[strValueField] === numCurrentId))
    .map((objItem) => ({
      label: objItem[strLabelField],
      value: objItem[strValueField]
    }));
}
