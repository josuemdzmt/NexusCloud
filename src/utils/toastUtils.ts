import { toast, type ToastOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import { formatError } from './errorUtils';

const baseOptions: ToastOptions = {
  autoClose: 3000,
  position: 'top-center',
  clearOnUrlChange: false,
  dangerouslyHTMLString: true,
  theme: 'colored',
  style: { zIndex: 99999 }
};

const formatMessage = (message: string, title?: string) => {
  return title 
    ? `<div><strong style="display:block; font-size: 14px; margin-bottom: 2px;">${title}</strong><span style="font-size: 13px;">${message}</span></div>` 
    : message;
};

export function handleSuccess(title: string = 'Éxito', message: string = 'Información guardada correctamente', options: ToastOptions = {}) {
  toast.success(formatMessage(message, title), { ...baseOptions, ...options });
}

export function handleError(title: string = 'Ocurrió un error', messageOrError: any, options: ToastOptions = {}) {
  const message = typeof messageOrError === 'string' ? messageOrError : formatError(messageOrError);
  toast.error(formatMessage(message, title), { ...baseOptions, ...options });
}

export function handleInfo(title: string = 'Información', message: string, options: ToastOptions = {}) {
  toast.info(formatMessage(message, title), { ...baseOptions, ...options });
}

export function handleWarning(title: string = 'Advertencia', message: string, options: ToastOptions = {}) {
  toast.warning(formatMessage(message, title), { ...baseOptions, ...options });
}
