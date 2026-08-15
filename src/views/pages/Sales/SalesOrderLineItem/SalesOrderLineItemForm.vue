<template>
  <nx-modal-form ref="modalFormRef" id="sales-order-line-item-modal" :title="strTitle" size="md"
    :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Producto <span class="text-danger">*</span></label>
          <Field name="pricebookEntryId" v-slot="{ value, handleChange, handleBlur }">
            <nx-lookup :model-value="value" type="pricebook_entry" :params="objEntryLookupParams" placeholder="Buscar producto..."
              :disabled="!!recordId" class="w-full" :class="{ 'border-danger': errors.pricebookEntryId }"
              @update:model-value="(val) => { handleChange(val); handleEntryChange(val); }" @blur="handleBlur" />
          </Field>
          <ErrorMessage name="pricebookEntryId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Cantidad <span class="text-danger">*</span></label>
          <Field name="quantity" as="input" type="number" step="0.01" min="0.01"
            :class="{ 'border-danger focus:border-danger': errors.quantity }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="quantity" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Precio unitario</label>
          <Field name="unitPrice" as="input" type="number" step="0.01" min="0"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <p class="text-[11px] text-default mt-1">Si se deja vacío, el backend congela el precio desde la lista.</p>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descuento</label>
          <Field name="discountAmount" as="input" type="number" step="0.01" min="0"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Impuesto</label>
          <Field name="taxAmount" as="input" type="number" step="0.01" min="0"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descripción</label>
          <Field name="description" as="input" type="text"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import SalesOrderLineItemService from '@/services/sales/SalesOrderLineItemService';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null || originalValue === undefined ? undefined : Number(originalValue));

const validationSchema = yup.object({
  pricebookEntryId: yup.number().nullable().transform(handleToNumber).required('El producto es obligatorio'),
  quantity: yup.number().nullable().transform(handleToNumber).required('La cantidad es obligatoria').min(0.01, 'Mínimo 0.01'),
  unitPrice: yup.number().nullable().transform(handleToNumber).min(0, 'No puede ser negativo'),
  discountAmount: yup.number().default(0).transform((v, o) => Number(o) || 0).min(0),
  taxAmount: yup.number().default(0).transform((v, o) => Number(o) || 0).min(0),
  description: yup.string().nullable().default('')
});

export default {
  name: 'SalesOrderLineItemForm',
  components: { Field, ErrorMessage },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      salesOrderId: null,
      numPricebookId: null,
      numCurrencyId: null,
      numProductId: null,
      strTitle: 'Agregar línea',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault()
    };
  },
  computed: {
    objEntryLookupParams() {
      return {
        'filter[pricebook_id]': this.numPricebookId,
        'filter[currency_id]': this.numCurrencyId,
        'filter[is_active]': 1
      };
    }
  },
  methods: {
    /**
     * @param {Number|String|null} numId
     * @param {Object} objContext - { salesOrderId, pricebookId, currencyId }
     */
    handleOpen(numId = null, objContext = {}) {
      this.recordId = numId;
      this.salesOrderId = objContext.salesOrderId;
      this.numPricebookId = objContext.pricebookId;
      this.numCurrencyId = objContext.currencyId;
      this.strTitle = numId ? 'Editar línea' : 'Agregar línea';

      if (!this.salesOrderId) {
        handleError('Error', 'Orden no especificada');
        return;
      }
      if (!this.numPricebookId || !this.numCurrencyId) {
        handleError('Error', 'La orden necesita lista de precios y moneda para agregar líneas');
        return;
      }

      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }

      if (numId) {
        this.handleInitForm(numId);
        return;
      }
      this.numProductId = null;
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
    handleEntryChange(numEntryId) {
      if (!numEntryId) {
        this.numProductId = null;
        return;
      }
      PricebookEntryService.getById(numEntryId, { include: 'product' })
        .then((objResponse) => {
          const objEntry = objResponse.data || objResponse;
          this.numProductId = objEntry.productId ?? objEntry.product_id ?? objEntry.product?.id ?? null;
          const fltUnit = objEntry.unitPrice ?? objEntry.unit_price;
          const strName = objEntry.product?.name || '';
          const objPatch = {
            pricebookEntryId: Number(numEntryId),
            unitPrice: fltUnit != null ? Number(fltUnit) : null,
            description: strName || ''
          };
          this.objInitialData = { ...this.objInitialData, ...objPatch };
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues({
              ...objPatch,
              quantity: this.objInitialData.quantity ?? 1,
              discountAmount: this.objInitialData.discountAmount ?? 0,
              taxAmount: this.objInitialData.taxAmount ?? 0
            });
          }
        })
        .catch((objError) => handleError('Error', 'No se pudo cargar la entrada de lista', objError));
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      SalesOrderLineItemService.getById(numId, { include: 'product,pricebookEntry' })
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          this.numProductId = objData.productId ?? objData.product_id ?? objData.product?.id ?? null;
          this.objInitialData = {
            pricebookEntryId: objData.pricebookEntryId ?? objData.pricebook_entry_id ?? null,
            quantity: objData.quantity ?? null,
            unitPrice: objData.unitPrice ?? objData.unit_price ?? null,
            discountAmount: objData.discountAmount ?? objData.discount_amount ?? 0,
            taxAmount: objData.taxAmount ?? objData.tax_amount ?? 0,
            description: objData.description || ''
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
      if (!this.numProductId && objValues.pricebookEntryId) {
        handleError('Error', 'Espera a que cargue el producto de la entrada o vuelve a seleccionarlo');
        return;
      }
      if (!this.numProductId) {
        handleError('Error', 'No se pudo determinar el producto de la entrada de lista');
        return;
      }

      const objPayload = {
        salesOrderId: Number(this.salesOrderId),
        pricebookEntryId: Number(objValues.pricebookEntryId),
        productId: Number(this.numProductId),
        quantity: Number(objValues.quantity),
        discountAmount: Number(objValues.discountAmount) || 0,
        taxAmount: Number(objValues.taxAmount) || 0,
        description: objValues.description || null
      };
      if (objValues.unitPrice != null && objValues.unitPrice !== '') {
        objPayload.unitPrice = Number(objValues.unitPrice);
      }

      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCreate(objPayload) {
      this.bSpinner = true;
      SalesOrderLineItemService.create(objPayload)
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
    handleUpdate(objPayload) {
      this.bSpinner = true;
      const objUpdate = { ...objPayload };
      delete objUpdate.salesOrderId;
      SalesOrderLineItemService.update(this.recordId, objUpdate)
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
