<template>
  <nx-modal-form ref="modalFormRef" id="purchase-order-modal" :title="strTitle" size="3xl"
    :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-2 gap-3">
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Proveedor <span class="text-danger">*</span></label>
          <Field name="accountId" v-slot="{ value, handleChange, handleBlur }">
            <nx-lookup :model-value="value" type="account" :params="{ 'filter[account_type]': ['Vendor', 'Both'] }" class="w-full"
              :class="{ 'border-danger': errors.accountId }" @update:model-value="handleChange" @blur="handleBlur" />
          </Field>
          <ErrorMessage name="accountId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado <span class="text-danger">*</span></label>
          <nx-combobox v-model="strStatus" :options="lstStatusOptions" placeholder="Seleccionar estado"
            :disabled="!bCanChangeStatus" class="w-full text-sm border-border-color focus:border-primary" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Moneda <span class="text-danger">*</span></label>
          <Field name="currencyId" v-slot="{ value, handleChange, handleBlur }">
            <nx-lookup :model-value="value" type="currency" :params="{ 'filter[is_active]': 1 }" class="w-full"
              :class="{ 'border-danger': errors.currencyId }" @update:model-value="handleChange" @blur="handleBlur" />
          </Field>
          <ErrorMessage name="currencyId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha <span class="text-danger">*</span></label>
          <Field name="effectiveDate" v-slot="{ field, value }">
            <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" @update:value="field.onChange" />
          </Field>
          <ErrorMessage name="effectiveDate" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Tipo documento</label>
          <Field name="supplierDocumentType" as="nx-combobox" :options="lstDocumentTypeOptions" placeholder="Opcional"
            class="w-full text-sm border-border-color focus:border-primary" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Número documento</label>
          <Field name="supplierDocumentNumber" as="input" type="text" placeholder="Ej. FAC-001"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>

        <div class="col-span-2 mt-1">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Montos</h4>
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Subtotal</label>
          <Field name="subtotal" v-slot="{ field }">
            <input v-bind="field" type="number" min="0" step="0.01" :readonly="bLineItemsMode" :class="{ 'border-danger focus:border-danger': errors.subtotal, 'bg-gray-50 text-gray-600': bLineItemsMode }"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ subtotal: e.target.value }); }"
            >
          </Field>
          <ErrorMessage name="subtotal" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descuento</label>
          <Field name="discountAmount" v-slot="{ field }">
            <input v-bind="field" type="number" min="0" step="0.01"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ discountAmount: e.target.value }); }"
            >
          </Field>
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Impuesto</label>
          <Field name="totalTaxAmount" v-slot="{ field }">
            <input v-bind="field" type="number" min="0" step="0.01" :readonly="bLineItemsMode" :class="{ 'bg-gray-50 text-gray-600': bLineItemsMode }"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ totalTaxAmount: e.target.value }); }"
            >
          </Field>
        </div>
        <div class="col-span-1">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Total</label>
          <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-900 font-semibold"
            :value="strGrandTotalLabel" readonly>
        </div>

        <div class="col-span-2 mt-1">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Dirección de facturación</h4>
        </div>
        <nx-address-fields name-prefix="billToAddress" searchable />

        <div class="col-span-2 mt-1">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Dirección de envío</h4>
        </div>
        <nx-address-fields name-prefix="shipToAddress" searchable />

        <div class="col-span-2 mt-1">
          <h4 class="text-sm font-semibold text-gray-700 border-b pb-1 mb-2">Información adicional</h4>
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Notas</label>
          <Field name="notes" as="textarea" rows="2"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Términos y Condiciones</label>
          <Field name="termsAndConditions" as="textarea" rows="2"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import CurrencyService from '@/services/sales/CurrencyService';
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import PurchaseOrderLineItemService from '@/services/purchasing/PurchaseOrderLineItemService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { yupAddressSchema, handleEnsureAddress, handleAddressPayload } from '@/utils/addressUtils';
import {
  ORDER_STATUS,
  AMOUNT_SOURCE,
  SUPPLIER_DOCUMENT_TYPE_OPTIONS,
  handleCanEditOrder,
  handleGetAvailableStatusOptions,
  handleValidateStatusTransition
} from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';
import {
  handleGetGrandTotalPreview,
  handleNormalizePurchaseOrder
} from '@/views/pages/Purchase/PurchaseOrder/purchaseOrderUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null ? null : Number(originalValue));

const validationSchema = yup.object({
  accountId: yup.number().nullable().transform(handleToNumber).required('El proveedor es obligatorio'),
  currencyId: yup.number().nullable().transform(handleToNumber).required('La moneda es obligatoria'),
  effectiveDate: yup.string().nullable().required('La fecha es obligatoria'),
  supplierDocumentType: yup.string().nullable().default(null),
  supplierDocumentNumber: yup.string().nullable().default(''),
  subtotal: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' || originalValue === null || originalValue === undefined ? 0 : Number(originalValue)))
    .nullable()
    .min(0, 'No puede ser negativo')
    .default(0),
  discountAmount: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0),
  totalTaxAmount: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0),
  billToAddress: yupAddressSchema,
  shipToAddress: yupAddressSchema,
  notes: yup.string().nullable().default(''),
  termsAndConditions: yup.string().nullable().default('')
});

export default {
  name: 'PurchaseOrderForm',
  components: { Field, ErrorMessage },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      numLineCount: 0,
      fltBalanceAmount: 0,
      fltSubtotal: 0,
      fltDiscountAmount: 0,
      fltTotalTaxAmount: 0,
      strAmountSource: AMOUNT_SOURCE.MANUAL,
      strTitle: 'Orden de Compra',
      strCurrentStatus: ORDER_STATUS.DRAFT,
      strStatus: ORDER_STATUS.DRAFT,
      recordId: null,
      numDefaultAccountId: null,
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstDocumentTypeOptions: [
        ...SUPPLIER_DOCUMENT_TYPE_OPTIONS
      ]
    };
  },
  computed: {
    bLineItemsMode() {
      return this.strAmountSource === AMOUNT_SOURCE.LINE_ITEMS;
    },
    strGrandTotalLabel() {
      return this.handleFormatTotal(handleGetGrandTotalPreview(this.fltSubtotal, this.fltDiscountAmount, this.fltTotalTaxAmount));
    },
    bCanChangeStatus() {
      if (!this.recordId) return true;
      return handleCanEditOrder(this.strCurrentStatus);
    },
    lstStatusOptions() {
      return handleGetAvailableStatusOptions(this.recordId ? this.strCurrentStatus : null, {
        fltBalanceAmount: this.fltBalanceAmount
      });
    }
  },
  methods: {
    handleRecalcTotal(objPartial = {}) {
      if (objPartial.subtotal !== undefined) {
        this.fltSubtotal = Number(objPartial.subtotal) || 0;
      }
      if (objPartial.discountAmount !== undefined) {
        this.fltDiscountAmount = Number(objPartial.discountAmount) || 0;
      }
      if (objPartial.totalTaxAmount !== undefined) {
        this.fltTotalTaxAmount = Number(objPartial.totalTaxAmount) || 0;
      }
    },
    handleFormatTotal(fltValue) {
      const fltAmount = parseFloat(fltValue) || 0;
      return fltAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    handleGetToday() {
      return new Date().toISOString().substr(0, 10);
    },
    /**
     * @param {Number|String|null} numId
     * @param {Object|null} objContext - { accountId }
     */
    handleOpen(numId = null, objContext = null) {
      this.recordId = numId;
      this.numDefaultAccountId = objContext?.accountId ? Number(objContext.accountId) : null;
      this.fltBalanceAmount = 0;
      this.fltSubtotal = 0;
      this.fltDiscountAmount = 0;
      this.fltTotalTaxAmount = 0;
      this.strAmountSource = AMOUNT_SOURCE.MANUAL;
      this.numLineCount = 0;
      this.strCurrentStatus = ORDER_STATUS.DRAFT;
      this.strStatus = ORDER_STATUS.DRAFT;
      this.strTitle = 'Orden de Compra';

      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }
      if (numId) {
        this.handleInitForm(numId);
        return;
      }
      this.handleInitCreate();
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleInitCreate() {
      const objDefaults = {
        ...validationSchema.getDefault(),
        effectiveDate: this.handleGetToday(),
        accountId: this.numDefaultAccountId,
        subtotal: 0,
        discountAmount: 0,
        totalTaxAmount: 0,
        billToAddress: handleEnsureAddress(null),
        shipToAddress: handleEnsureAddress(null)
      };
      this.handleRecalcTotal({
        subtotal: objDefaults.subtotal,
        discountAmount: objDefaults.discountAmount,
        totalTaxAmount: objDefaults.totalTaxAmount
      });

      CurrencyService.getDefault()
        .then((objCurrency) => {
          if (objCurrency?.id) {
            objDefaults.currencyId = Number(objCurrency.id);
          }
        })
        .catch(() => null)
        .finally(() => {
          this.objInitialData = objDefaults;
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          }
        });
    },
    handleLoadLineCount(recordId) {
      return PurchaseOrderLineItemService.getAll({
        'filter[purchase_order_id]': recordId,
        per_page: 1
      }).then((objResponse) => {
        const lstData = objResponse.data || objResponse;
        const numMetaTotal = objResponse.meta?.total ?? objResponse.total;
        if (numMetaTotal != null) {
          this.numLineCount = Number(numMetaTotal);
        } else {
          this.numLineCount = Array.isArray(lstData) ? lstData.length : 0;
        }
      }).catch(() => {
        this.numLineCount = 0;
      });
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      Promise.all([
        PurchaseOrderService.getById(numId, { include: 'account,currency' }),
        this.handleLoadLineCount(numId)
      ])
        .then(([objResponse]) => {
          const objOrder = handleNormalizePurchaseOrder(objResponse.data || objResponse);

          if (!handleCanEditOrder(objOrder.status)) {
            handleError('No permitido', 'Solo puedes editar órdenes en estado Borrador.');
            this.handleClose();
            return;
          }

          this.strCurrentStatus = objOrder.status || ORDER_STATUS.DRAFT;
          this.strStatus = this.strCurrentStatus;
          this.strTitle = objOrder.purchaseNumber ? `Orden de Compra · ${objOrder.purchaseNumber}` : 'Orden de Compra';
          this.fltBalanceAmount = objOrder.balanceAmount;
          this.strAmountSource = objOrder.amountSource || AMOUNT_SOURCE.MANUAL;
          this.objInitialData = {
            accountId: objOrder.accountId,
            currencyId: objOrder.currencyId,
            effectiveDate: objOrder.effectiveDate,
            supplierDocumentType: objOrder.supplierDocumentType || null,
            supplierDocumentNumber: objOrder.supplierDocumentNumber || '',
            subtotal: objOrder.subtotal,
            discountAmount: objOrder.discountAmount,
            totalTaxAmount: objOrder.totalTaxAmount,
            billToAddress: handleEnsureAddress(objOrder.billToAddress),
            shipToAddress: handleEnsureAddress(objOrder.shipToAddress),
            notes: objOrder.notes || '',
            termsAndConditions: objOrder.termsAndConditions || ''
          };
          this.handleRecalcTotal({
            subtotal: objOrder.subtotal,
            discountAmount: objOrder.discountAmount,
            totalTaxAmount: objOrder.totalTaxAmount
          });
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          }
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los datos de la orden', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleSubmit(objValues) {
      const strStatus = this.strStatus || ORDER_STATUS.DRAFT;
      const strFromStatus = this.recordId ? this.strCurrentStatus : null;
      const fltSubtotal = Number(objValues.subtotal) || 0;
      const strAmountSource = this.strAmountSource || AMOUNT_SOURCE.MANUAL;

      const objTransition = handleValidateStatusTransition(strFromStatus, strStatus, {
        fltBalanceAmount: this.fltBalanceAmount,
        strAmountSource,
        numLineCount: this.numLineCount,
        fltSubtotal
      });
      if (!objTransition.bValid) {
        handleError('Transición no permitida', objTransition.strMessage);
        return;
      }

      const objPayload = {
        accountId: Number(objValues.accountId),
        currencyId: Number(objValues.currencyId),
        status: strStatus,
        effectiveDate: objValues.effectiveDate,
        amountSource: strAmountSource,
        supplierDocumentType: objValues.supplierDocumentType || null,
        supplierDocumentNumber: objValues.supplierDocumentNumber ? String(objValues.supplierDocumentNumber).trim() : null,
        discountAmount: Number(objValues.discountAmount) || 0,
        billToAddress: handleAddressPayload(objValues.billToAddress),
        shipToAddress: handleAddressPayload(objValues.shipToAddress),
        notes: objValues.notes || null,
        termsAndConditions: objValues.termsAndConditions || null
      };

      if (strAmountSource === AMOUNT_SOURCE.MANUAL) {
        objPayload.subtotal = fltSubtotal;
        objPayload.totalTaxAmount = Number(objValues.totalTaxAmount) || 0;
      }

      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCreate(objPayload) {
      this.bSpinner = true;
      PurchaseOrderService.create(objPayload)
        .then((objResponse) => {
          const objCreated = objResponse.data || objResponse;
          handleSuccess('Orden de compra creada exitosamente');
          this.$emit('success', { id: objCreated.id, created: true });
          this.handleClose();
        })
        .catch((objError) => handleError('Ocurrió un problema al crear la orden de compra', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objPayload) {
      this.bSpinner = true;
      PurchaseOrderService.update(this.recordId, objPayload)
        .then(() => {
          handleSuccess('Orden de compra actualizada exitosamente');
          this.$emit('success', { id: this.recordId, created: false });
          this.handleClose();
        })
        .catch((objError) => handleError('Ocurrió un problema al actualizar la orden de compra', objError))
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
