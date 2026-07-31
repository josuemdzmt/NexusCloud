<template>
  <nx-modal-form ref="modalFormRef" id="pricebook-entry-modal" :title="strTitle" size="md" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 gap-4">
        <!-- Lista de Precios -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Lista de Precios <span class="text-danger">*</span></label>
          <Field name="pricebookId">
            <template #default="{ field }">
              <nx-combobox
                v-bind="field"
                :options="lstPricebookOptions"
                :current-value="field.value"
                @update:model-value="(val) => { field.onInput(val); }"
                placeholder="Seleccionar lista de precios"
                :disabled="!!numRecordId"
              />
            </template>
          </Field>
          <ErrorMessage name="pricebookId" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Producto -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Producto <span class="text-danger">*</span></label>
          <Field name="productId">
            <template #default="{ field }">
              <nx-combobox
                v-bind="field"
                :options="lstProductOptions"
                :current-value="field.value"
                @update:model-value="(val) => { field.onInput(val); }"
                placeholder="Seleccionar producto"
                :disabled="!!numRecordId"
              />
            </template>
          </Field>
          <ErrorMessage name="productId" class="text-danger text-[11px] mt-1 block" />
        </div>

        <!-- Moneda -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Moneda <span class="text-danger">*</span></label>
          <Field name="currencyId">
            <template #default="{ field }">
              <nx-combobox
                v-bind="field"
                :options="lstCurrencyOptions"
                :current-value="field.value"
                @update:model-value="(val) => { field.onInput(val); }"
                placeholder="Seleccionar moneda"
                :disabled="!!numRecordId"
              />
            </template>
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
  pricebookId: yup.number().required('La lista de precios es obligatoria'),
  productId: yup.number().required('El producto es obligatorio'),
  currencyId: yup.number().required('La moneda es obligatoria'),
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
      numRecordId: null,
      strTitle: 'Agregar Precio de Producto',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
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
        .then((response) => {
          const lstData = response.data || response;
          this.lstCurrencyOptions = lstData.map(objCurrency => ({
            label: `${objCurrency.iso_code} - ${objCurrency.name}`,
            value: objCurrency.id
          }));
        })
        .catch((error) => {
          console.error('Error fetching currencies:', error);
        });
    },
    handleGetProducts() {
      ProductService.getAll({ per_page: 500, 'filter[is_active]': 1 })
        .then((response) => {
          const lstData = response.data || response;
          this.lstProductOptions = lstData.map(objProduct => ({
            label: objProduct.name,
            value: objProduct.id
          }));
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        });
    },
    handleGetPricebooks() {
      PricebookService.getAll({ per_page: 500, 'filter[is_active]': 1 })
        .then((response) => {
          const lstData = response.data || response;
          this.lstPricebookOptions = lstData.map(objPricebook => ({
            label: objPricebook.name,
            value: objPricebook.id
          }));
        })
        .catch((error) => {
          console.error('Error fetching pricebooks:', error);
        });
    },
    handleOpen(id = null, defaultPricebookId = null) {
      this.numRecordId = id;
      this.strTitle = id ? 'Editar Precio de Producto' : 'Agregar Precio de Producto';
      
      if (id) {
        this.handleLoadData(id);
      } else {
        this.objInitialData = validationSchema.getDefault();
        if (defaultPricebookId) {
          this.objInitialData.pricebookId = Number(defaultPricebookId);
        }
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          this.$refs.modalFormRef.handleOpen();
        }
      }
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
