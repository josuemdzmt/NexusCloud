<template>
  <div class="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
    <div class="col-span-1 sm:col-span-2">
      <div class="flex items-center justify-between mb-1">
        <label class="text-sm font-semibold text-gray-900">Calle</label>
        <button v-if="searchable" type="button" class="inline-flex items-center gap-1 text-sm text-primary hover:underline cursor-pointer" @click="handleOpenAddressSearch">
          <i class="ph ph-map-pin"></i> Buscar dirección
        </button>
      </div>
      <Field :name="`${namePrefix}.route`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Núm. Exterior</label>
      <Field :name="`${namePrefix}.streetNumber`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
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
      <Field :name="`${namePrefix}.zipcode`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" maxlength="20" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Ciudad / Municipio</label>
      <Field :name="`${namePrefix}.city`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado</label>
      <Field :name="`${namePrefix}.state`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
    </div>
    <div class="col-span-1 sm:col-span-2">
      <label class="text-sm font-semibold text-gray-900 mb-1 block">País</label>
      <Field :name="`${namePrefix}.country`" as="input" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. México" />
    </div>
    <Field :name="`${namePrefix}.placeId`" as="input" type="hidden" />
    <Field :name="`${namePrefix}.street`" as="input" type="hidden" />
    <Field :name="`${namePrefix}.formattedAddress`" as="input" type="hidden" />
    <Field :name="`${namePrefix}.location.lat`" as="input" type="hidden" />
    <Field :name="`${namePrefix}.location.lng`" as="input" type="hidden" />
    <nx-address-search v-if="searchable" ref="addressSearchRef" @select="handleAddressSelected" />
  </div>
</template>

<script>
import { Field, useFormContext } from 'vee-validate';
import { handleEnsureAddress } from '@/utils/addressUtils';

export default {
  name: 'NXAddressFields',
  components: { Field },
  props: {
    /** Prefijo del form: billing_address | shipping_address | address | billToAddress | shipToAddress */
    namePrefix: { type: String, required: true },
    /** Muestra Buscar dirección (nx-address-search) y escribe el JSON en el form. */
    searchable: { type: Boolean, default: false }
  },
  setup() {
    return { objForm: useFormContext() };
  },
  methods: {
    handleOpenAddressSearch() {
      if (this.$refs.addressSearchRef) {
        this.$refs.addressSearchRef.handleOpen();
      }
    },
    handleAddressSelected(objAddress) {
      if (!this.objForm?.setFieldValue) return;
      this.objForm.setFieldValue(this.namePrefix, handleEnsureAddress(objAddress));
    }
  }
};
</script>
