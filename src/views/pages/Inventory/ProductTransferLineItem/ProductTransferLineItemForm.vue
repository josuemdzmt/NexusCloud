<template>
  <nx-modal-form ref="modalFormRef" id="product-transfer-line-item-modal" :title="strTitle" size="md"
    :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Producto <span class="text-danger">*</span></label>
          <Field name="productId" v-slot="{ field, value }">
            <nx-combobox
              v-bind="field"
              :options="lstProductOptions"
              :model-value="value"
              placeholder="Seleccionar producto"
              :disabled="!!recordId"
              :class="{ 'border-danger focus:border-danger': errors.productId }"
              class="w-full text-sm border-border-color focus:border-primary"
              @update:model-value="field.onChange"
            />
          </Field>
          <ErrorMessage name="productId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Cantidad solicitada <span class="text-danger">*</span></label>
          <Field name="quantityRequested" as="input" type="number" step="1"
            :class="{ 'border-danger focus:border-danger': errors.quantityRequested }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="quantityRequested" class="text-danger text-[11px] mt-1 block" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import ProductTransferLineItemService from '@/services/inventory/ProductTransferLineItemService';
import ProductService from '@/services/inventory/ProductService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const validationSchema = yup.object({
  productId: yup
    .number()
    .transform((numValue, strOriginal) => (strOriginal === '' || strOriginal === null || strOriginal === undefined ? undefined : Number(strOriginal)))
    .nullable()
    .required('El producto es obligatorio'),
  quantityRequested: yup
    .number()
    .transform((numValue, strOriginal) => (strOriginal === '' || strOriginal === null || strOriginal === undefined ? undefined : numValue))
    .nullable()
    .required('La cantidad es obligatoria')
    .min(1, 'Debe ser mayor a 0')
});

export default {
  name: 'ProductTransferLineItemForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['success'],
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 2. Números / IDs
      recordId: null,
      productTransferId: null,

      // 3. Cadenas
      strTitle: 'Agregar línea',

      // 4. Objetos
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),

      // 5. Listas
      lstProductOptions: []
    };
  },
  mounted() {
    this.handleGetProducts();
  },
  methods: {
    handleGetProducts() {
      ProductService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstProductOptions = (Array.isArray(lstData) ? lstData : []).map((objProduct) => ({
            label: objProduct.name,
            value: objProduct.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los productos', objError));
    },
    /**
     * @param {Number|String|null} numId - Line item id
     * @param {Number|String} productTransferId - Parent transfer id
     */
    handleOpen(numId = null, productTransferId = null) {
      this.recordId = numId;
      this.productTransferId = productTransferId;
      this.strTitle = numId ? 'Editar línea' : 'Agregar línea';

      if (!this.productTransferId) {
        handleError('Error', 'Traspaso no especificado');
        return;
      }

      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }

      if (numId) {
        this.handleInitForm(numId);
        return;
      }

      this.objInitialData = validationSchema.getDefault();
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues(this.objInitialData);
      }
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      ProductTransferLineItemService.getById(numId, { include: 'product' })
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          this.objInitialData = {
            productId: objData.productId ?? objData.product_id ?? objData.product?.id ?? null,
            quantityRequested: objData.quantityRequested ?? objData.quantity_requested ?? null
          };
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          }
        })
        .catch((objError) => handleError('Ocurrió un problema al cargar la línea', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(objValues) {
      if (this.recordId) {
        this.handleUpdate(objValues);
      } else {
        this.handleCreate(objValues);
      }
    },
    handleCreate(objForm) {
      this.bSpinner = true;
      ProductTransferLineItemService.create({
        productTransferId: Number(this.productTransferId),
        productId: Number(objForm.productId),
        quantityRequested: Number(objForm.quantityRequested)
      })
        .then(() => {
          handleSuccess('Éxito', 'Línea agregada correctamente');
          this.$emit('success');
          this.handleClose();
        })
        .catch((objError) => handleError('Error de Validación', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objForm) {
      this.bSpinner = true;
      ProductTransferLineItemService.update(this.recordId, {
        productId: Number(objForm.productId),
        quantityRequested: Number(objForm.quantityRequested)
      })
        .then(() => {
          handleSuccess('Actualizado', 'Línea actualizada correctamente');
          this.$emit('success');
          this.handleClose();
        })
        .catch((objError) => handleError('Error de Validación', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCancel() {
      this.handleClose();
    }
  }
};
</script>
