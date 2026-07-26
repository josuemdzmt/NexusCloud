/**
 * ErrorUtils
 * Utilidades para el parseo y manejo de errores provenientes de la API o del sistema.
 */

export function formatError(error: any, strFallback = 'Error desconocido', strSeparator = '<br>'): string {
  if (!error) return strFallback;
  
  // Si el backend envía errores de validación (Laravel HTTP 422)
  if (error.errors && typeof error.errors === 'object') {
    return Object.values(error.errors).flat().join(strSeparator);
  }
  
  // Si envía un mensaje general
  return error.message || strFallback;
}
