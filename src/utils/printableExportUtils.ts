import html2pdf from 'html2pdf.js';

type PdfExportOptions = {
  filename?: string;
};

const OBJ_DEFAULT_PDF_OPTIONS = {
  margin: [10, 10, 10, 10] as [number, number, number, number],
  image: { type: 'jpeg' as const, quality: 0.98 },
  html2canvas: { scale: 2, useCORS: true, logging: false },
  jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
};

export function handleNormalizePdfFilename(strFilename?: string) {
  const strBase = String(strFilename || 'documento').trim() || 'documento';
  return /\.pdf$/i.test(strBase) ? strBase : `${strBase}.pdf`;
}

export async function handleBuildDocumentPdf(elElement: HTMLElement | null | undefined, objOptions: PdfExportOptions = {}) {
  if (!elElement) {
    throw new Error('No printable element provided');
  }

  const strFilename = handleNormalizePdfFilename(objOptions.filename);

  return html2pdf()
    .set({
      ...OBJ_DEFAULT_PDF_OPTIONS,
      filename: strFilename
    })
    .from(elElement)
    .outputPdf('blob') as Promise<Blob>;
}

export async function handleDownloadDocumentPdf(elElement: HTMLElement | null | undefined, objOptions: PdfExportOptions = {}) {
  const strFilename = handleNormalizePdfFilename(objOptions.filename);
  const objBlob = await handleBuildDocumentPdf(elElement, { filename: strFilename });

  const strUrl = URL.createObjectURL(objBlob);
  const elLink = document.createElement('a');
  elLink.href = strUrl;
  elLink.download = strFilename;
  elLink.rel = 'noopener';
  document.body.appendChild(elLink);
  elLink.click();
  elLink.remove();
  URL.revokeObjectURL(strUrl);

  return { blob: objBlob, filename: strFilename };
}
