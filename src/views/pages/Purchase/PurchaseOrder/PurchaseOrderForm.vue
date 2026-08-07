<template>
  <nx-modal-form ref="modalFormRef" id="purchase-order-modal" :title="strTitle" size="3xl"
    :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Proveedor <span class="text-danger">*</span></label>
          <Field name="accountId" as="nx-combobox" :options="lstVendorOptions" placeholder="Seleccionar proveedor"
            :class="{ 'border-danger focus:border-danger': errors.accountId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="accountId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Estado <span class="text-danger">*</span></label>
          <nx-combobox
            v-model="strStatus"
            :options="lstStatusOptions"
            placeholder="Seleccionar estado"
            :disabled="!bCanChangeStatus"
            class="w-full text-sm border-border-color focus:border-primary"
          />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Moneda <span class="text-danger">*</span></label>
          <Field name="currencyId" as="nx-combobox" :options="lstCurrencyOptions" placeholder="Seleccionar moneda"
            :class="{ 'border-danger focus:border-danger': errors.currencyId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="currencyId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha <span class="text-danger">*</span></label>
          <Field name="effectiveDate" v-slot="{ field, value }">
            <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" @update:value="field.onChange" />
          </Field>
          <ErrorMessage name="effectiveDate" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Tipo documento</label>
          <Field name="supplierDocumentType" as="nx-combobox" :options="lstDocumentTypeOptions" placeholder="Opcional"
            class="w-full text-sm border-border-color focus:border-primary" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Número documento</label>
          <Field name="supplierDocumentNumber" as="input" type="text" placeholder="Ej. FAC-001"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div v-if="recordId" class="md:col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Núm. orden</label>
          <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600" :value="strPurchaseNumber || '—'" readonly>
        </div>

        <div class="md:col-span-2 mt-1">
          <h4 class="text-sm font-semibold text-gray-700 border-b border-border-color pb-1 mb-2">Montos</h4>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Subtotal</label>
          <Field name="subtotal" v-slot="{ field }">
            <input
              v-bind="field"
              type="number"
              min="0"
              step="0.01"
              :class="{ 'border-danger focus:border-danger': errors.subtotal }"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ subtotal: e.target.value }); }"
            >
          </Field>
          <ErrorMessage name="subtotal" class="text-danger text-[11px] mt-1 block" />
          <p class="text-[11px] text-default mt-1 mb-0">Opcional. Déjalo en 0 si vas a capturar el monto con líneas.</p>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descuento</label>
          <Field name="discountAmount" v-slot="{ field }">
            <input
              v-bind="field"
              type="number"
              min="0"
              step="0.01"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ discountAmount: e.target.value }); }"
            >
          </Field>
        </div>
        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Total</label>
          <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-900 font-semibold"
            :value="strGrandTotalLabel" readonly>
        </div>

        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Notas</label>
          <Field name="notes" as="textarea" rows="2"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
        </div>
        <div class="md:col-span-2">
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
import VendorService from '@/services/purchasing/VendorService';
import CurrencyService from '@/services/sales/CurrencyService';
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
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
      fltBalanceAmount: 0,
      fltSubtotal: 0,
      fltDiscountAmount: 0,
      strTitle: 'Nueva Orden de Compra',
      strPurchaseNumber: null,
      strCurrentStatus: ORDER_STATUS.DRAFT,
      strStatus: ORDER_STATUS.DRAFT,
      recordId: null,
      numDefaultAccountId: null,
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstVendorOptions: [],
      lstCurrencyOptions: [],
      lstDocumentTypeOptions: [
        { label: '— Ninguno —', value: null },
        ...SUPPLIER_DOCUMENT_TYPE_OPTIONS
      ]
    };
  },
  computed: {
    strGrandTotalLabel() {
      return this.handleFormatTotal(handleGetGrandTotalPreview(this.fltSubtotal, this.fltDiscountAmount));
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
  mounted() {
    this.handleGetVendors();
    this.handleGetCurrencies();
  },
  methods: {
    handleRecalcTotal(objPartial = {}) {
      if (objPartial.subtotal !== undefined) {
        this.fltSubtotal = Number(objPartial.subtotal) || 0;
      }
      if (objPartial.discountAmount !== undefined) {
        this.fltDiscountAmount = Number(objPartial.discountAmount) || 0;
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
    handleGetVendors() {
      VendorService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstVendorOptions = (Array.isArray(lstData) ? lstData : [])
            .filter((objItem) => VendorService.handleIsVendorAccount(objItem))
            .map((objVendor) => ({
              label: objVendor.legal_name || `${objVendor.first_name || ''} ${objVendor.last_name || ''}`.trim() || 'Sin Nombre',
              value: objVendor.id
            }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los proveedores', objError));
    },
    handleGetCurrencies() {
      CurrencyService.getAll({ per_page: 500 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstCurrencyOptions = (Array.isArray(lstData) ? lstData : []).map((objCurrency) => ({
            label: `${objCurrency.name} (${objCurrency.code || objCurrency.iso_code || ''})`,
            value: objCurrency.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las monedas', objError));
    },
    /**
     * @param {Number|String|null} numId
     * @param {Object|null} objContext - { accountId }
     */
    handleOpen(numId = null, objContext = null) {
      this.recordId = numId;
      this.numDefaultAccountId = objContext?.accountId ? Number(objContext.accountId) : null;
      this.strPurchaseNumber = null;
      this.fltBalanceAmount = 0;
      this.fltSubtotal = 0;
      this.fltDiscountAmount = 0;
      this.strCurrentStatus = ORDER_STATUS.DRAFT;
      this.strStatus = ORDER_STATUS.DRAFT;
      this.strTitle = numId ? 'Editar Orden de Compra' : 'Nueva Orden de Compra';

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
        discountAmount: 0
      };
      CurrencyService.getDefault()
        .then((objCurrency) => {
          if (objCurrency?.id) {
            objDefaults.currencyId = Number(objCurrency.id);
          }
        })
        .catch(() => {})
        .finally(() => {
          this.objInitialData = objDefaults;
          this.handleRecalcTotal({
            subtotal: objDefaults.subtotal,
            discountAmount: objDefaults.discountAmount
          });
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.objInitialData);
          }
        });
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      PurchaseOrderService.getById(numId, { include: 'account,currency' })
        .then((objResponse) => {
          const objOrder = handleNormalizePurchaseOrder(objResponse.data || objResponse);

          if (!handleCanEditOrder(objOrder.status)) {
            handleError('No permitido', 'Solo puedes editar órdenes en estado Borrador.');
            this.handleClose();
            return;
          }

          this.strCurrentStatus = objOrder.status || ORDER_STATUS.DRAFT;
          this.strStatus = this.strCurrentStatus;
          this.strPurchaseNumber = objOrder.purchaseNumber;
          this.fltBalanceAmount = objOrder.balanceAmount;
          this.objInitialData = {
            accountId: objOrder.accountId,
            currencyId: objOrder.currencyId,
            effectiveDate: objOrder.effectiveDate,
            supplierDocumentType: objOrder.supplierDocumentType || null,
            supplierDocumentNumber: objOrder.supplierDocumentNumber || '',
            subtotal: objOrder.subtotal,
            discountAmount: objOrder.discountAmount,
            notes: objOrder.notes || '',
            termsAndConditions: objOrder.termsAndConditions || ''
          };
          this.handleRecalcTotal({
            subtotal: objOrder.subtotal,
            discountAmount: objOrder.discountAmount
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

      const objTransition = handleValidateStatusTransition(strFromStatus, strStatus, {
        fltBalanceAmount: this.fltBalanceAmount,
        strAmountSource: AMOUNT_SOURCE.MANUAL,
        numLineCount: 0,
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
        amountSource: AMOUNT_SOURCE.MANUAL,
        subtotal: fltSubtotal,
        supplierDocumentType: objValues.supplierDocumentType || null,
        supplierDocumentNumber: objValues.supplierDocumentNumber ? String(objValues.supplierDocumentNumber).trim() : null,
        discountAmount: Number(objValues.discountAmount) || 0,
        notes: objValues.notes || null,
        termsAndConditions: objValues.termsAndConditions || null
      };

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
