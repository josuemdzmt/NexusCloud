<template>
  <nx-modal-form ref="modalFormRef" id="sales-order-modal" :title="strTitle" size="3xl"
    :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Cliente <span class="text-danger">*</span></label>
          <Field name="accountId" as="nx-combobox" :options="lstCustomerOptions" placeholder="Seleccionar cliente"
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
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha <span class="text-danger">*</span></label>
          <Field name="effectiveDate" v-slot="{ field, value }">
            <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" @update:value="field.onChange" />
          </Field>
          <ErrorMessage name="effectiveDate" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Lista de precios <span class="text-danger">*</span></label>
          <Field name="pricebookId" as="nx-combobox" :options="lstPricebookOptions" placeholder="Seleccionar lista de precios"
            :disabled="bPricebookLocked"
            :class="{ 'border-danger focus:border-danger': errors.pricebookId }"
            class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="pricebookId" class="text-danger text-[11px] mt-1 block" />
          <p v-if="bPricebookLocked" class="text-[11px] text-default mt-1">No se puede cambiar cuando ya hay líneas.</p>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Moneda <span class="text-danger">*</span></label>
          <Field name="currencyId" as="nx-combobox" :options="lstCurrencyOptions" placeholder="Seleccionar moneda"
            :class="{ 'border-danger focus:border-danger': errors.currencyId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="currencyId" class="text-danger text-[11px] mt-1 block" />
        </div>

        <div class="md:col-span-2 mt-1">
          <h4 class="text-sm font-semibold text-gray-700 border-b border-border-color pb-1 mb-2">Montos</h4>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Subtotal</label>
          <Field name="subtotal" v-slot="{ field }">
            <input v-bind="field" type="number" min="0" step="0.01" :readonly="bLineItemsMode" :class="{ 'border-danger focus:border-danger': errors.subtotal, 'bg-gray-50 text-gray-600': bLineItemsMode }"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ subtotal: e.target.value }); }"
            >
          </Field>
          <ErrorMessage name="subtotal" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descuento</label>
          <Field name="discountAmount" v-slot="{ field }">
            <input v-bind="field" type="number" min="0" step="0.01"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ discountAmount: e.target.value }); }"
            >
          </Field>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Impuesto</label>
          <Field name="totalTaxAmount" v-slot="{ field }">
            <input v-bind="field" type="number" min="0" step="0.01"
              class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0"
              @input="(e) => { field.onInput(e); handleRecalcTotal({ totalTaxAmount: e.target.value }); }"
            >
          </Field>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Total</label>
          <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-900 font-semibold"
            :value="strGrandTotalLabel" readonly>
        </div>

        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Descripción</label>
          <Field name="description" as="textarea" rows="2"
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
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
import CustomerService from '@/services/sales/CustomerService';
import PricebookService from '@/services/sales/PricebookService';
import CurrencyService, { handleFindDefaultCurrency } from '@/services/sales/CurrencyService';
import SalesOrderService from '@/services/sales/SalesOrderService';
import SalesOrderLineItemService from '@/services/sales/SalesOrderLineItemService';
import { handleGetOrLoad } from '@/services/catalog/catalogCache';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { ORDER_STATUS, AMOUNT_SOURCE, handleCanEditOrder, handleGetAvailableStatusOptions, 
  handleValidateStatusTransition } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import { handleGetGrandTotalPreview, handleNormalizeSalesOrder } from '@/views/pages/Sales/SalesOrder/salesOrderUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null ? null : Number(originalValue));

const validationSchema = yup.object({
  accountId: yup.number().nullable().transform(handleToNumber).required('El cliente es obligatorio'),
  pricebookId: yup.number().nullable().transform(handleToNumber).required('La lista de precios es obligatoria'),
  currencyId: yup.number().nullable().transform(handleToNumber).required('La moneda es obligatoria'),
  effectiveDate: yup.string().nullable().required('La fecha es obligatoria'),
  subtotal: yup
    .number()
    .transform((value, originalValue) => (originalValue === '' || originalValue === null || originalValue === undefined ? 0 : Number(originalValue)))
    .nullable()
    .min(0, 'No puede ser negativo')
    .default(0),
  discountAmount: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0),
  totalTaxAmount: yup.number().default(0).transform((value, originalValue) => Number(originalValue) || 0).min(0),
  description: yup.string().nullable().default(''),
  notes: yup.string().nullable().default(''),
  termsAndConditions: yup.string().nullable().default('')
});

export default {
  name: 'SalesOrderForm',
  components: { Field, ErrorMessage },
  emits: ['success'],
  data() {
    return {
      bSpinner: false,
      bPricebookLocked: false,
      numLineCount: 0,
      fltBalanceAmount: 0,
      fltSubtotal: 0,
      fltDiscountAmount: 0,
      fltTotalTaxAmount: 0,
      strAmountSource: AMOUNT_SOURCE.MANUAL,
      strTitle: 'Orden de Venta',
      strCurrentStatus: ORDER_STATUS.DRAFT,
      strStatus: ORDER_STATUS.DRAFT,
      recordId: null,
      numDefaultAccountId: null,
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstCustomerOptions: [],
      lstPricebookOptions: [],
      lstCurrencyOptions: [],
      lstCurrencies: []
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
    handleGetCustomers() {
      return handleGetOrLoad('customers', () =>
        CustomerService.getAll({ per_page: 500 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return (Array.isArray(lstData) ? lstData : [])
            .filter((objCustomer) => CustomerService.handleIsCustomerAccount(objCustomer))
            .map((objCustomer) => ({
              label: objCustomer.legal_name || `${objCustomer.first_name || ''} ${objCustomer.last_name || ''}`.trim() || 'Sin Nombre',
              value: objCustomer.id
            }));
        })
      )
        .then((lstOptions) => {
          this.lstCustomerOptions = lstOptions;
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los clientes', objError));
    },
    handleGetPricebooks() {
      return handleGetOrLoad('pricebooks', () =>
        PricebookService.getAll({ per_page: 500, 'filter[is_active]': 1 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return (Array.isArray(lstData) ? lstData : []).map((objPricebook) => ({
            label: objPricebook.name,
            value: objPricebook.id
          }));
        })
      )
        .then((lstOptions) => {
          this.lstPricebookOptions = lstOptions;
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar las listas de precios', objError));
    },
    handleGetCurrencies() {
      return handleGetOrLoad('currencies', () =>
        CurrencyService.getAll({ per_page: 500 }).then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          return Array.isArray(lstData) ? lstData : [];
        })
      )
        .then((lstCurrencies) => {
          this.lstCurrencies = lstCurrencies;
          this.lstCurrencyOptions = lstCurrencies.map((objCurrency) => ({
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
      this.fltBalanceAmount = 0;
      this.fltSubtotal = 0;
      this.fltDiscountAmount = 0;
      this.fltTotalTaxAmount = 0;
      this.strAmountSource = AMOUNT_SOURCE.MANUAL;
      this.numLineCount = 0;
      this.bPricebookLocked = false;
      this.strCurrentStatus = ORDER_STATUS.DRAFT;
      this.strStatus = ORDER_STATUS.DRAFT;
      this.strTitle = 'Orden de Venta';

      Promise.all([this.handleGetCustomers(), this.handleGetPricebooks(), this.handleGetCurrencies()]).then(() => {
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleOpen();
        }
        if (numId) {
          this.handleInitForm(numId);
          return;
        }
        this.handleInitCreate();
      });
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
        totalTaxAmount: 0
      };
      const objCurrency = handleFindDefaultCurrency(this.lstCurrencies);
      if (objCurrency?.id) {
        objDefaults.currencyId = Number(objCurrency.id);
      }
      this.objInitialData = objDefaults;
      this.handleRecalcTotal({
        subtotal: objDefaults.subtotal,
        discountAmount: objDefaults.discountAmount,
        totalTaxAmount: objDefaults.totalTaxAmount
      });
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues(this.objInitialData);
      }
    },
    handleLoadLineCount(recordId) {
      return SalesOrderLineItemService.getAll({
        'filter[sales_order_id]': recordId,
        per_page: 1
      }).then((objResponse) => {
        const lstData = objResponse.data || objResponse;
        const numMetaTotal = objResponse.meta?.total ?? objResponse.total;
        if (numMetaTotal != null) {
          this.numLineCount = Number(numMetaTotal);
        } else {
          this.numLineCount = Array.isArray(lstData) ? lstData.length : 0;
        }
        this.bPricebookLocked = this.numLineCount > 0;
      }).catch(() => {
        this.numLineCount = 0;
        this.bPricebookLocked = false;
      });
    },
    handleInitForm(numId) {
      this.bSpinner = true;
      Promise.all([
        SalesOrderService.getById(numId, { include: 'account,currency,pricebook' }),
        this.handleLoadLineCount(numId)
      ])
        .then(([objResponse]) => {
          const objOrder = handleNormalizeSalesOrder(objResponse.data || objResponse);

          if (!handleCanEditOrder(objOrder.status)) {
            handleError('No permitido', 'Solo puedes editar órdenes en estado Borrador.');
            this.handleClose();
            return;
          }

          this.strCurrentStatus = objOrder.status || ORDER_STATUS.DRAFT;
          this.strStatus = this.strCurrentStatus;
          this.strTitle = objOrder.orderNumber ? `Orden de Venta · ${objOrder.orderNumber}` : 'Orden de Venta';
          this.fltBalanceAmount = objOrder.balanceAmount;
          this.strAmountSource = objOrder.amountSource || AMOUNT_SOURCE.MANUAL;
          this.objInitialData = {
            accountId: objOrder.accountId,
            pricebookId: objOrder.pricebookId,
            currencyId: objOrder.currencyId,
            effectiveDate: objOrder.effectiveDate,
            subtotal: objOrder.subtotal,
            discountAmount: objOrder.discountAmount,
            totalTaxAmount: objOrder.totalTaxAmount,
            description: objOrder.description || '',
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
        discountAmount: Number(objValues.discountAmount) || 0,
        totalTaxAmount: Number(objValues.totalTaxAmount) || 0,
        pricebookId: Number(objValues.pricebookId),
        description: objValues.description || null,
        notes: objValues.notes || null,
        termsAndConditions: objValues.termsAndConditions || null
      };

      if (strAmountSource === AMOUNT_SOURCE.MANUAL) {
        objPayload.subtotal = fltSubtotal;
      }

      if (this.recordId) {
        this.handleUpdate(objPayload);
      } else {
        this.handleCreate(objPayload);
      }
    },
    handleCreate(objPayload) {
      this.bSpinner = true;
      SalesOrderService.create(objPayload)
        .then((objResponse) => {
          const objCreated = objResponse.data || objResponse;
          handleSuccess('Orden de venta creada exitosamente');
          this.$emit('success', { id: objCreated.id, created: true });
          this.handleClose();
        })
        .catch((objError) => handleError('Ocurrió un problema al crear la orden de venta', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleUpdate(objPayload) {
      this.bSpinner = true;
      SalesOrderService.update(this.recordId, objPayload)
        .then(() => {
          handleSuccess('Orden de venta actualizada exitosamente');
          this.$emit('success', { id: this.recordId, created: false });
          this.handleClose();
        })
        .catch((objError) => handleError('Ocurrió un problema al actualizar la orden de venta', objError))
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
