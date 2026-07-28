/**
 * ErrorUtils
 * Utilidades para el parseo y manejo de errores provenientes de la API o del sistema.
 */

export function formatError(error: any, strFallback = 'Error desconocido', strSeparator = '<br>'): string {
  if (!error) return strFallback;
  
  // Si el backend envía errores de validación (Laravel HTTP 422)
  // Revisa error.response.data.errors o error.errors
  let apiErrors = error.response?.data?.errors || error.errors;
  
  if (apiErrors && typeof apiErrors === 'object') {
    return Object.values(apiErrors).flat().join(strSeparator);
  }
  
  // Si envía un mensaje general
  return error.response?.data?.message || error.message || strFallback;
}
