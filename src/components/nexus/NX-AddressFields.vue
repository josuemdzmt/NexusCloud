<template>
  <div class="col-span-2 grid grid-cols-2 gap-3">
    <div class="col-span-2">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Calle</label>
      <Field :name="`${namePrefix}.street`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Núm. Exterior</label>
      <Field :name="`${namePrefix}.ext_num`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Núm. Interior</label>
      <Field :name="`${namePrefix}.int_num`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Colonia</label>
      <Field :name="`${namePrefix}.neighborhood`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Código Postal</label>
      <Field :name="`${namePrefix}.zip_code`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="20" />
    </div>
    <div class="col-span-2 sm:col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Ciudad / Municipio</label>
      <Field :name="`${namePrefix}.city`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado</label>
      <Field :name="`${namePrefix}.state`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-2">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">País</label>
      <Field :name="`${namePrefix}.country`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. México" />
    </div>
  </div>
</template>

<script>
import { Field } from 'vee-validate';

export default {
  name: 'NXAddressFields',
  components: { Field },
  props: {
    /** Prefijo del form: billing_address | shipping_address | address */
    namePrefix: { type: String, required: true }
  }
};
</script>
