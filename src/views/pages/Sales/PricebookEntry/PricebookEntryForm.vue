<template>
  <nx-modal-form ref="modalFormRef" id="pricebook-entry-modal" :title="strTitle" size="md" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 gap-4">
        <!-- Lista de Precios -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Lista de Precios <span class="text-danger">*</span></label>
          <Field name="pricebookId" v-slot="{ field, value }">
            <nx-combobox
              v-bind="field"
              :options="lstPricebookOptions"
              :model-value="value"
              @update:model-value="field.onChange"
              placeholder="Seleccionar lista de precios"
              :disabled="!!numRecordId || bLockPricebook"
              class="w-full text-sm border-border-color focus:border-primary"
            />
          </Field>
          <ErrorMessage name="pricebookId" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Producto -->
        <div v-if="!bLockProduct">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Producto <span class="text-danger">*</span></label>
          <Field name="productId" v-slot="{ field, value }">
            <nx-combobox
              v-bind="field"
              :options="lstProductOptions"
              :model-value="value"
              @update:model-value="field.onChange"
              placeholder="Seleccionar producto"
              :disabled="!!numRecordId"
              class="w-full text-sm border-border-color focus:border-primary"
            />
          </Field>
          <ErrorMessage name="productId" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Moneda -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Moneda <span class="text-danger">*</span></label>
          <Field name="currencyId" v-slot="{ field, value }">
            <nx-combobox
              v-bind="field"
              :options="lstCurrencyOptions"
              :model-value="value"
              @update:model-value="field.onChange"
              placeholder="Seleccionar moneda"
              :disabled="!!numRecordId"
              class="w-full text-sm border-border-color focus:border-primary"
            />
          </Field>
          <ErrorMessage name="currencyId" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Precio -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Precio de Lista <span class="text-danger">*</span></label>
          <div class="relative">
            <span class="absolute inset-y-0 start-0 flex items-center px-3 text-gray-500 bg-light border border-e-0 border-border-color rounded-s-md">$</span>
            <Field name="unitPrice" as="input" type="number" step="0.01" :class="{ 'border-danger focus:border-danger': errors.unitPrice }" class="w-full pl-10 pr-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="0.00" />
          </div>
          <ErrorMessage name="unitPrice" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Estado -->
        <div class="mt-2">
          <label class="flex items-center gap-2 cursor-pointer">
            <Field name="isActive" type="checkbox" :value="true" :unchecked-value="false" class="size-4 rounded border-border-color text-primary focus:ring-0" />
            <span class="text-sm font-semibold text-gray-900">Precio Activo</span>
          </label>
          <ErrorMessage name="isActive" class="text-danger text-[11px] mt-1 block" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import ProductService from '@/services/inventory/ProductService';
import PricebookService from '@/services/sales/PricebookService';
import CurrencyService from '@/services/sales/CurrencyService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  pricebookId: yup.number().nullable().required('La lista de precios es obligatoria'),
  productId: yup.number().nullable().required('El producto es obligatorio'),
  currencyId: yup.number().nullable().required('La moneda es obligatoria'),
  unitPrice: yup.number().required('El precio es obligatorio').min(0, 'No puede ser negativo'),
  isActive: yup.boolean().default(true)
});

export default {
  name: 'PricebookEntryForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['refresh'],
  data() {
    return {
      // 1. Booleanos
      bLockProduct: false,
      bLockPricebook: false,

      // 2. Números
      numRecordId: null,

      // 3. Cadenas
      strTitle: 'Agregar Precio de Producto',

      // 4. Objetos
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),

      // 5. Listas
      lstProductOptions: [],
      lstPricebookOptions: [],
      lstCurrencyOptions: []
    };
  },
  mounted() {
    this.handleGetProducts();
    this.handleGetPricebooks();
    this.handleGetCurrencies();
  },
  methods: {
    handleGetCurrencies() {
      CurrencyService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstCurrencyOptions = (Array.isArray(lstData) ? lstData : []).map((objCurrency) => ({
            label: `${objCurrency.iso_code || objCurrency.code} - ${objCurrency.name}`,
            value: objCurrency.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las monedas', objError));
    },
    handleGetProducts() {
      ProductService.getAll({ per_page: 500, 'filter[is_active]': 1 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstProductOptions = (Array.isArray(lstData) ? lstData : []).map((objProduct) => ({
            label: objProduct.name,
            value: objProduct.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los productos', objError));
    },
    handleGetPricebooks() {
      PricebookService.getAll({ per_page: 500, 'filter[is_active]': 1 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstPricebookOptions = (Array.isArray(lstData) ? lstData : []).map((objPricebook) => ({
            label: objPricebook.name,
            value: objPricebook.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las listas de precios', objError));
    },
    /**
     * @param {Number|String|null} id
     * @param {Number|String|Object|null} objDefaults - pricebookId legacy o { pricebookId, productId }
     */
    handleOpen(id = null, objDefaults = null) {
      this.numRecordId = id;
      this.strTitle = id ? 'Editar Precio' : 'Agregar Precio';

      let defaultPricebookId = null;
      let defaultProductId = null;
      if (typeof objDefaults === 'number' || typeof objDefaults === 'string') {
        defaultPricebookId = objDefaults;
      } else if (objDefaults && typeof objDefaults === 'object') {
        defaultPricebookId = objDefaults.pricebookId ?? objDefaults.defaultPricebookId ?? null;
        defaultProductId = objDefaults.productId ?? objDefaults.defaultProductId ?? null;
      }

      this.bLockPricebook = !!defaultPricebookId;
      this.bLockProduct = !!defaultProductId;

      if (id) {
        this.handleLoadData(id);
        return;
      }

      this.objInitialData = validationSchema.getDefault();
      if (defaultPricebookId) this.objInitialData.pricebookId = Number(defaultPricebookId);
      if (defaultProductId) this.objInitialData.productId = Number(defaultProductId);

      CurrencyService.getDefault()
        .then((objCurrency) => {
          if (objCurrency?.id && !this.objInitialData.currencyId) {
            this.objInitialData.currencyId = Number(objCurrency.id);
          }
        })
        .catch(() => {})
        .finally(() => {
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
            this.$refs.modalFormRef.handleOpen();
          }
        });
    },
    handleLoadData(id) {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues({});
        this.$refs.modalFormRef.handleOpen();
      }
      PricebookEntryService.getById(id)
        .then((data) => {
          const formData = data.data || data;
          formData.isActive = Boolean(formData.isActive);
          this.objInitialData = formData;
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(formData);
          }
        })
        .catch((error) => {
          handleError('Ocurrió un problema al cargar los datos', error);
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleClose();
          }
        });
    },
    handleSubmit(values) {
      if (this.numRecordId) {
        this.handleUpdate(values);
      } else {
        this.handleCreate(values);
      }
    },
    handleCreate(objForm) {
      PricebookEntryService.create(objForm)
        .then(() => {
          handleSuccess('Precio agregado a la lista exitosamente');
          this.$emit('refresh');
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleClose();
          }
        })
        .catch((error) => {
          handleError('Ocurrió un problema al agregar el precio', error);
        });
    },
    handleUpdate(objForm) {
      PricebookEntryService.update(this.numRecordId, objForm)
        .then(() => {
          handleSuccess('Precio actualizado exitosamente');
          this.$emit('refresh');
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleClose();
          }
        })
        .catch((error) => {
          handleError('Ocurrió un problema al actualizar el precio', error);
        });
    },
    handleCancel() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    }
  }
};
</script>
