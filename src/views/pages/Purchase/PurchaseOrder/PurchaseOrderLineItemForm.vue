<template>
  <nx-modal-form ref="modalFormRef" id="purchase-order-line-item-modal" :title="strTitle" size="md"
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
              @update:model-value="(val) => { field.onChange(val); handleProductChange(val); }"
            />
          </Field>
          <ErrorMessage name="productId" class="text-danger text-[11px] mt-1 block" />
          <p class="text-[11px] text-default mt-1">Solo productos de la lista de precios en la moneda de la orden.</p>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Cantidad <span class="text-danger">*</span></label>
          <Field name="quantity" as="input" type="number" step="0.01" min="0.01"
            :class="{ 'border-danger focus:border-danger': errors.quantity }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="quantity" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Costo unitario <span class="text-danger">*</span></label>
          <Field name="unitCost" as="input" type="number" step="0.01" min="0"
            :class="{ 'border-danger focus:border-danger': errors.unitCost }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="unitCost" class="text-danger text-[11px] mt-1 block" />
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
import PurchaseOrderLineItemService from '@/services/purchasing/PurchaseOrderLineItemService';
import PricebookService from '@/services/sales/PricebookService';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import { handleFilterPricebookEntries } from '@/views/pages/Sales/SalesOrder/salesOrderUtils';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null || originalValue === undefined ? undefined : Number(originalValue));

const validationSchema = yup.object({
  productId: yup.number().nullable().transform(handleToNumber).required('El producto es obligatorio'),
  quantity: yup.number().nullable().transform(handleToNumber).required('La cantidad es obligatoria').min(0.01, 'Mínimo 0.01'),
  unitCost: yup.number().nullable().transform(handleToNumber).required('El costo unitario es obligatorio').min(0, 'No puede ser negativo'),
  discountAmount: yup.number().default(0).transform((v, o) => Number(o) || 0).min(0),
  description: yup.string().nullable().default('')
});

export default {
  name: 'PurchaseOrderLineItemForm',
  components: { Field, ErrorMessage },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      recordId: null,
      purchaseOrderId: null,
      numPricebookId: null,
      numCurrencyId: null,
      strTitle: 'Agregar línea',
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstEntries: [],
      lstProductOptions: []
    };
  },
  methods: {
    /**
     * @param {Number|String|null} numId
     * @param {Object} objContext - { purchaseOrderId, currencyId, pricebookId? }
     */
    handleOpen(numId = null, objContext = {}) {
      this.recordId = numId;
      this.purchaseOrderId = objContext.purchaseOrderId;
      this.numCurrencyId = objContext.currencyId;
      this.numPricebookId = objContext.pricebookId || null;
      this.strTitle = numId ? 'Editar línea' : 'Agregar línea';

      if (!this.purchaseOrderId) {
        handleError('Error', 'Orden no especificada');
        return;
      }
      if (!this.numCurrencyId) {
        handleError('Error', 'La orden necesita moneda para agregar líneas');
        return;
      }

      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }

      this.handleResolvePricebook()
        .then(() => this.handleLoadEntries())
        .then(() => {
          if (numId) {
            this.handleInitForm(numId);
          } else {
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
    handleResolvePricebook() {
      if (this.numPricebookId) {
        return Promise.resolve(this.numPricebookId);
      }

      return PricebookService.getAll({
        'filter[is_standard]': 1,
        'filter[is_active]': 1,
        per_page: 1
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstBooks = Array.isArray(lstData) ? lstData : [];
          const objStandard = lstBooks[0] || null;
          this.numPricebookId = objStandard?.id ?? null;
          if (!this.numPricebookId) {
            handleError('Error', 'No hay lista de precios estándar activa');
          }
          return this.numPricebookId;
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo obtener la lista de precios', objError);
          return null;
        });
    },
    handleLoadEntries() {
      if (!this.numPricebookId || !this.numCurrencyId) {
        this.lstEntries = [];
        this.lstProductOptions = [];
        return Promise.resolve();
      }

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
          this.lstProductOptions = this.lstEntries.map((objEntry) => {
            const numProductId = objEntry.productId ?? objEntry.product_id ?? objEntry.product?.id;
            const strName = objEntry.product?.name || 'Producto';
            const fltPrice = objEntry.unitPrice ?? objEntry.unit_price;
            return {
              label: fltPrice != null ? `${strName} - $${fltPrice}` : strName,
              value: numProductId
            };
          }).filter((objOpt) => objOpt.value != null);
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los productos de la lista', objError));
    },
    handleProductChange(numProductId) {
      const objEntry = this.lstEntries.find((objItem) => {
        const entryProductId = objItem.productId ?? objItem.product_id ?? objItem.product?.id;
        return Number(entryProductId) === Number(numProductId);
      });
      if (!objEntry) return;

      const fltUnit = objEntry.unitPrice ?? objEntry.unit_price;
      const strName = objEntry.product?.name || '';
      const objValues = {
        productId: numProductId,
        quantity: this.objInitialData.quantity ?? 1,
        unitCost: fltUnit != null ? Number(fltUnit) : null,
        discountAmount: this.objInitialData.discountAmount ?? 0,
        description: strName || this.objInitialData.description || ''
      };
      this.objInitialData = { ...this.objInitialData, ...objValues };
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues(objValues);
      }
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      PurchaseOrderLineItemService.getById(numId, { include: 'product' })
        .then((objResponse) => {
          const objData = objResponse.data || objResponse;
          this.objInitialData = {
            productId: objData.productId ?? objData.product_id ?? objData.product?.id ?? null,
            quantity: objData.quantity ?? null,
            unitCost: objData.unitCost ?? objData.unit_cost ?? null,
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
      const objPayload = {
        purchaseOrderId: Number(this.purchaseOrderId),
        productId: Number(objValues.productId),
        quantity: Number(objValues.quantity),
        unitCost: Number(objValues.unitCost),
        discountAmount: Number(objValues.discountAmount) || 0,
        description: objValues.description || null
      };

      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCreate(objPayload) {
      this.bSpinner = true;
      PurchaseOrderLineItemService.create(objPayload)
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
      delete objUpdate.purchaseOrderId;
      PurchaseOrderLineItemService.update(this.recordId, objUpdate)
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
