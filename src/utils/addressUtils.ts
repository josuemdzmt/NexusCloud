import * as yup from 'yup';

export type AddressLocation = {
  lat: number | null;
  lng: number | null;
};

export type AddressFields = {
  placeId: string;
  formattedAddress: string;
  streetNumber: string;
  route: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  int_num: string;
  location: AddressLocation | null;
};

/** Keys de captura (Places / Geocoding). */
export const OBJ_ADDRESS_DEFAULT: AddressFields = {
  placeId: '',
  formattedAddress: '',
  streetNumber: '',
  route: '',
  street: '',
  neighborhood: '',
  city: '',
  state: '',
  country: '',
  zipcode: '',
  int_num: '',
  location: null
};

const OBJ_KEY_ALIASES: Record<string, keyof AddressFields> = {
  zip_code: 'zipcode',
  zipCode: 'zipcode',
  zip: 'zipcode',
  postalCode: 'zipcode',
  ext_num: 'streetNumber',
  extNum: 'streetNumber',
  intNum: 'int_num'
};

const LST_MEANINGFUL_KEYS: Array<keyof AddressFields> = [
  'street',
  'streetNumber',
  'route',
  'city',
  'zipcode',
  'formattedAddress',
  'placeId',
  'neighborhood',
  'state',
  'country'
];

export const yupAddressSchema = yup
  .object({
    placeId: yup.string().nullable().default(''),
    formattedAddress: yup.string().nullable().default(''),
    streetNumber: yup.string().nullable().default(''),
    route: yup.string().nullable().default(''),
    street: yup.string().nullable().default(''),
    neighborhood: yup.string().nullable().default(''),
    city: yup.string().nullable().default(''),
    state: yup.string().nullable().default(''),
    country: yup.string().nullable().default(''),
    zipcode: yup.string().nullable().default(''),
    int_num: yup.string().nullable().default(''),
    location: yup
      .object({
        lat: yup.number().nullable().default(null),
        lng: yup.number().nullable().default(null)
      })
      .nullable()
      .default(null)
  })
  .default(() => ({ ...OBJ_ADDRESS_DEFAULT }));

/**
 * Rellena keys faltantes y normaliza aliases (zip_code → zipcode, ext_num → streetNumber).
 */
export function handleEnsureAddress(objAddress: Partial<AddressFields> | Record<string, unknown> | null | undefined): AddressFields {
  const objSafe = objAddress && typeof objAddress === 'object' ? objAddress : {};
  const objNormalized: Record<string, unknown> = {};

  Object.entries(objSafe).forEach(([strKey, mixValue]) => {
    const strMapped = OBJ_KEY_ALIASES[strKey] || strKey;
    const mixCurrent = objNormalized[strMapped];
    if (mixCurrent == null || mixCurrent === '') {
      objNormalized[strMapped] = mixValue;
    }
  });

  const strRoute = String(objNormalized.route ?? '').trim();
  const strStreet = String(objNormalized.street ?? '').trim();
  if (!strRoute && strStreet) {
    objNormalized.route = strStreet;
  }

  return {
    ...OBJ_ADDRESS_DEFAULT,
    ...objNormalized,
    location: handleNormalizeLocation(objNormalized.location)
  } as AddressFields;
}

/** True si no hay calle, CP, placeId, etc. (objeto de strings vacíos cuenta como vacío). */
export function handleIsEmptyAddress(objAddress: Partial<AddressFields> | Record<string, unknown> | null | undefined): boolean {
  if (!objAddress || typeof objAddress !== 'object') return true;
  return LST_MEANINGFUL_KEYS.every((strKey) => !String(objAddress[strKey] ?? '').trim());
}

/** Payload API: null si el bloque está vacío; si no, JSON normalizado. */
export function handleAddressPayload(objAddress: Partial<AddressFields> | Record<string, unknown> | null | undefined): AddressFields | null {
  const objNormalized = handleEnsureAddress(objAddress);
  if (handleIsEmptyAddress(objNormalized)) return null;
  const strRoute = String(objNormalized.route || '').trim();
  const strNumber = String(objNormalized.streetNumber || '').trim();
  objNormalized.street = [strRoute, strNumber].filter(Boolean).join(' ');
  return objNormalized;
}

function handleNormalizeLocation(mixLocation: unknown): AddressLocation | null {
  if (!mixLocation || typeof mixLocation !== 'object') return null;
  const objLocation = mixLocation as { lat?: unknown; lng?: unknown; latitude?: unknown; longitude?: unknown };
  const mixLat = objLocation.lat ?? objLocation.latitude;
  const mixLng = objLocation.lng ?? objLocation.longitude;
  if (mixLat === '' || mixLat == null || mixLng === '' || mixLng == null) return null;
  const fltLat = Number(mixLat);
  const fltLng = Number(mixLng);
  if (Number.isNaN(fltLat) || Number.isNaN(fltLng)) return null;
  return { lat: fltLat, lng: fltLng };
}
