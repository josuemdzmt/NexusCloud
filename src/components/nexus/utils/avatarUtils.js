/**
 * Iniciales de un nombre completo (p. ej. "Josue Mendez" → "JM").
 * Una sola palabra: hasta 2 letras. Varias: primera + última.
 */
export function handleGetInitials(strName) {
  const strTrimmed = String(strName || '').trim();
  if (!strTrimmed) {
    return '?';
  }
  const arrParts = strTrimmed.split(/\s+/).filter(Boolean);
  if (arrParts.length === 1) {
    return arrParts[0].slice(0, 2).toUpperCase();
  }
  const strFirst = arrParts[0].charAt(0);
  const strLast = arrParts[arrParts.length - 1].charAt(0);
  return `${strFirst}${strLast}`.toUpperCase();
}
