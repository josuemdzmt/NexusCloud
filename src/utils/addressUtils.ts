import * as yup from 'yup';

export type AddressFields = {
  street: string;
  ext_num: string;
  int_num: string;
  neighborhood: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
};

export const OBJ_ADDRESS_DEFAULT: AddressFields = {
  street: '',
  ext_num: '',
  int_num: '',
  neighborhood: '',
  zip_code: '',
  city: '',
  state: '',
  country: ''
};

export const yupAddressSchema = yup
  .object({
    street: yup.string().nullable().default(''),
    ext_num: yup.string().nullable().default(''),
    int_num: yup.string().nullable().default(''),
    neighborhood: yup.string().nullable().default(''),
    zip_code: yup.string().nullable().default(''),
    city: yup.string().nullable().default(''),
    state: yup.string().nullable().default(''),
    country: yup.string().nullable().default('')
  })
  .default(() => ({ ...OBJ_ADDRESS_DEFAULT }));

/** Rellena keys faltantes de un address JSON (billing/shipping/org). */
export function handleEnsureAddress(objAddress: Partial<AddressFields> | Record<string, unknown> | null | undefined): AddressFields {
  const objSafe = objAddress && typeof objAddress === 'object' ? objAddress : {};
  return { ...OBJ_ADDRESS_DEFAULT, ...objSafe } as AddressFields;
}
