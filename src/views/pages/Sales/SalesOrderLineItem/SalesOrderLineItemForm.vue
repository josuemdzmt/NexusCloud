<template>
  <nx-modal-form ref="modalFormRef" id="sales-order-line-item-modal" :title="strTitle" size="md"
    :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Producto <span class="text-danger">*</span></label>
          <Field name="pricebookEntryId" v-slot="{ field, value }">
            <nx-combobox
              v-bind="field"
              :options="lstEntryOptions"
              :model-value="value"
              placeholder="Seleccionar producto"
              :disabled="!!recordId"
              :class="{ 'border-danger focus:border-danger': errors.pricebookEntryId }"
              class="w-full text-sm border-border-color focus:border-primary"
              @update:model-value="(val) => { field.onChange(val); handleEntryChange(val); }"
            />
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
import { handleFilterPricebookEntries, handleMapEntryOptions } from '@/views/pages/Sales/SalesOrder/salesOrderUtils';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null || originalValue === undefined ? undefined : Number(originalValue));

const validationSchema = yup.object({
  pricebookEntryId: yup.number().nullable().transform(handleToNumber).required('El producto es obligatorio'),
  quantity: yup.number().nullable().transform(handleToNumber).required('La cantidad es obligatoria').min(0.01, 'Mínimo 0.01'),
  unitPrice: yup.number().nullable().transform(handleToNumber).min(0, 'No puede ser negativo'),
  discountAmount: yup.number().default(0).transform((v, o) => Number(o) || 0).min(0),
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
      objInitialData: validationSchema.getDefault(),
      lstEntries: [],
      lstEntryOptions: []
    };
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

      this.handleLoadEntries().then(() => {
        if (numId) {
          this.handleInitForm(numId);
        } else {
          this.numProductId = null;
          this.objInitialData = validationSchema.getDefault();
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          }
        }
      });
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleLoadEntries() {
      return PricebookEntryService.getAll({
        'filter[pricebook_id]': this.numPricebookId,
        'filter[currency_id]': this.numCurrencyId,
        'filter[is_active]': 1,
        include: 'product',
        per_page: 500
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstEntries = handleFilterPricebookEntries(lstData, this.numPricebookId, this.numCurrencyId);
          this.lstEntryOptions = handleMapEntryOptions(this.lstEntries);
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los productos', objError));
    },
    handleEntryChange(numEntryId) {
      const objEntry = this.lstEntries.find((objItem) => Number(objItem.id) === Number(numEntryId));
      if (!objEntry) {
        this.numProductId = null;
        return;
      }
      this.numProductId = objEntry.productId ?? objEntry.product_id ?? objEntry.product?.id ?? null;
      const fltUnit = objEntry.unitPrice ?? objEntry.unit_price;
      const strName = objEntry.product?.name || '';
      this.objInitialData = {
        ...this.objInitialData,
        pricebookEntryId: numEntryId,
        unitPrice: fltUnit != null ? Number(fltUnit) : null,
        description: strName || this.objInitialData.description || ''
      };
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues({
          pricebookEntryId: numEntryId,
          quantity: this.objInitialData.quantity ?? 1,
          unitPrice: this.objInitialData.unitPrice,
          discountAmount: this.objInitialData.discountAmount ?? 0,
          description: this.objInitialData.description
        });
      }
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
        const objEntry = this.lstEntries.find((objItem) => Number(objItem.id) === Number(objValues.pricebookEntryId));
        this.numProductId = objEntry?.productId ?? objEntry?.product_id ?? objEntry?.product?.id ?? null;
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
