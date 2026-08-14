import html2pdf from 'html2pdf.js';

type PdfExportOptions = {
  filename?: string;
};

const OBJ_DEFAULT_PDF_OPTIONS = {
  margin: [8, 8, 8, 8] as [number, number, number, number],
  image: { type: 'jpeg' as const, quality: 0.98 },
  html2canvas: {
    scale: 2,
    useCORS: true,
    logging: false,
    scrollX: 0,
    scrollY: 0,
    onclone(_objDocument: Document, elCloned: HTMLElement) {
      elCloned.style.width = '100%';
      elCloned.style.maxWidth = '100%';
      elCloned.style.overflow = 'visible';
      elCloned.style.boxSizing = 'border-box';
      elCloned.querySelectorAll('.printable-sheet').forEach((elNode) => {
        const elSheet = elNode as HTMLElement;
        elSheet.style.border = 'none';
        elSheet.style.borderRadius = '0';
        elSheet.style.boxShadow = 'none';
        elSheet.style.width = '100%';
        elSheet.style.maxWidth = '100%';
        elSheet.style.overflow = 'visible';
      });
    }
  },
  jsPDF: { unit: 'mm' as const, format: 'letter' as const, orientation: 'portrait' as const }
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
  const numWidth = Math.ceil(Math.max(elElement.scrollWidth, elElement.offsetWidth, 1));

  return (await html2pdf()
    .set({
      ...OBJ_DEFAULT_PDF_OPTIONS,
      filename: strFilename,
      html2canvas: {
        ...OBJ_DEFAULT_PDF_OPTIONS.html2canvas,
        windowWidth: numWidth
      }
    })
    .from(elElement)
    .outputPdf('blob')) as Blob;
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
