const STR_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
const STR_SCRIPT_ID = 'recaptcha-enterprise';
const STR_ACTION_LOGIN = 'LOGIN';

/** @type {Promise<void>|null} */
let objLoadPromise = null;

/**
 * Carga enterprise.js una sola vez. Sin site key = no-op.
 *
 * @returns {Promise<void>}
 */
export function handleLoadRecaptcha() {
  if (!STR_SITE_KEY) return Promise.resolve();
  if (window.grecaptcha?.enterprise) return Promise.resolve();
  if (objLoadPromise) return objLoadPromise;

  objLoadPromise = new Promise((resolve, reject) => {
    const elExisting = document.getElementById(STR_SCRIPT_ID);
    if (elExisting) {
      elExisting.addEventListener('load', () => resolve(), { once: true });
      elExisting.addEventListener('error', () => {
        objLoadPromise = null;
        reject(new Error('No se pudo cargar reCAPTCHA'));
      }, { once: true });
      return;
    }

    const elScript = document.createElement('script');
    elScript.id = STR_SCRIPT_ID;
    elScript.src = `https://www.google.com/recaptcha/enterprise.js?render=${encodeURIComponent(STR_SITE_KEY)}`;
    elScript.async = true;
    elScript.onload = () => resolve();
    elScript.onerror = () => {
      objLoadPromise = null;
      reject(new Error('No se pudo cargar reCAPTCHA'));
    };
    document.head.appendChild(elScript);
  });

  return objLoadPromise;
}

/**
 * Token de assessment (acción LOGIN). Vacío si no hay site key.
 *
 * @returns {Promise<string>}
 */
export function handleExecuteRecaptcha() {
  if (!STR_SITE_KEY) return Promise.resolve('');

  return handleLoadRecaptcha().then(() => new Promise((resolve, reject) => {
    if (!window.grecaptcha?.enterprise) {
      reject(new Error('reCAPTCHA no está disponible. Recargue la página.'));
      return;
    }
    window.grecaptcha.enterprise.ready(() => {
      window.grecaptcha.enterprise.execute(STR_SITE_KEY, { action: STR_ACTION_LOGIN })
        .then((strToken) => resolve(strToken || ''))
        .catch(() => reject(new Error('No se pudo verificar que usted no es un robot.')));
    });
  }));
}
