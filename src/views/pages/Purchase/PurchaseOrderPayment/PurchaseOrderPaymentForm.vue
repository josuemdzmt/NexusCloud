<template>
  <nx-modal-form ref="modalFormRef" id="purchase-order-payment-modal" :title="strTitle" size="xl" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">ID Abono <span class="text-danger">*</span></label>
          <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600" value="Nuevo Abono" readonly>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Proveedor <span class="text-danger">*</span></label>
          <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600" :value="strVendorName" placeholder="—" readonly>
        </div>
        <div v-if="bSelectOrder">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Orden de Compra <span class="text-danger">*</span></label>
          <Field name="purchaseOrderId" v-slot="{ field, value }">
            <nx-combobox :options="lstOrderOptions" :model-value="value" placeholder="Seleccionar" :class="{ 'border-danger focus:border-danger': errors.purchaseOrderId }" class="w-full text-sm border-border-color focus:border-primary" @update:model-value="(numValue) => { field.onChange(numValue); handleOrderSelected(numValue); }" />
          </Field>
          <ErrorMessage name="purchaseOrderId" class="text-danger text-[11px] mt-1 block" />
          <p v-if="!lstOrderOptions.length" class="text-[11px] text-default mt-1 mb-0">No hay órdenes con saldo pendiente para este proveedor.</p>
        </div>
        <div v-else>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Orden de Compra <span class="text-danger">*</span></label>
          <input type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600" :value="objOrder?.purchaseNumber || '—'" readonly>
        </div>
        <div v-if="objOrder" class="md:col-span-2 bg-light p-3 rounded-md flex justify-between items-center text-sm">
          <div>
            <span class="text-default block text-xs">Total de la Orden</span>
            <span class="text-gray-900 font-bold">${{ handleFormatAmount(objOrder.grandTotalAmount) }}</span>
          </div>
          <div class="text-right">
            <span class="text-danger block text-xs font-semibold">Saldo Pendiente</span>
            <span class="text-danger font-extrabold text-base">${{ handleFormatAmount(fltBalanceAmount) }}</span>
          </div>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Método de Pago <span class="text-danger">*</span></label>
          <Field name="paymentMethodId" as="nx-combobox" :options="lstPaymentMethodOptions" placeholder="Seleccionar" :disabled="!objOrder" :class="{ 'border-danger focus:border-danger': errors.paymentMethodId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="paymentMethodId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Banco</label>
          <Field name="bankId" as="nx-combobox" :options="lstBankOptions" placeholder="Seleccionar" :disabled="!objOrder" :class="{ 'border-danger focus:border-danger': errors.bankId }" class="w-full text-sm border-border-color focus:border-primary" />
          <ErrorMessage name="bankId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Monto <span class="text-danger">*</span></label>
          <Field name="amount" as="input" type="number" min="0.01" step="0.01" :disabled="!objOrder" :class="{ 'border-danger focus:border-danger': errors.amount }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" />
          <ErrorMessage name="amount" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Referencia</label>
          <Field name="paymentReference" as="input" type="text" :disabled="!objOrder" :class="{ 'border-danger focus:border-danger': errors.paymentReference }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. Folio / No. de transferencia" maxlength="100" />
          <ErrorMessage name="paymentReference" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha del Pago <span class="text-danger">*</span></label>
          <Field name="paymentDate" v-slot="{ field, value }">
            <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" :disabled="!objOrder" @update:value="field.onChange" />
          </Field>
          <ErrorMessage name="paymentDate" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Moneda</label>
          <input type="text" :value="strCurrencyLabel" readonly
            class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-gray-50 focus:outline-none focus:ring-0 text-gray-600"
          >
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import BankService from '@/services/sales/BankService';
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import PurchaseOrderPaymentService from '@/services/purchasing/PurchaseOrderPaymentService';
import { ORDER_STATUS, handleCanRegisterPayment } from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';
import { handleSuccess, handleError } from '@/utils/toastUtils';

const handleToNumber = (value, originalValue) => (originalValue === '' || originalValue === null || originalValue === undefined ? undefined : Number(originalValue));

const validationSchemaBase = {
  amount: yup
    .number()
    .transform((numValue, strOriginal) => (strOriginal === '' || strOriginal === null || strOriginal === undefined ? undefined : numValue))
    .nullable()
    .required('El monto es obligatorio')
    .moreThan(0, 'El monto debe ser mayor a 0'),
  paymentMethodId: yup.number().nullable().transform(handleToNumber).required('El método de pago es obligatorio'),
  bankId: yup.number().nullable().transform(handleToNumber),
  paymentReference: yup.string().nullable().default('').max(100, 'Máximo 100 caracteres'),
  paymentDate: yup.string().nullable().required('La fecha del pago es obligatoria')
};

const validationSchema = yup.object(validationSchemaBase);

const validationSchemaWithOrder = yup.object({
  purchaseOrderId: yup.number().nullable().transform(handleToNumber).required('La orden es obligatoria'),
  ...validationSchemaBase
});

export default {
  name: 'PurchaseOrderPaymentForm',
  components: {
    Field,
    ErrorMessage
  },
  emits: ['refresh'],
  data() {
    return {
      bSpinner: false,
      bSelectOrder: false,
      numAccountId: null,
      numCurrencyId: null,
      strTitle: 'Registrar Abono',
      strVendorName: '—',
      strCurrencyLabel: '—',
      objOrder: null,
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault(),
      lstPaymentMethodOptions: [],
      lstBankOptions: [],
      lstOrders: [],
      lstOrderOptions: []
    };
  },
  computed: {
    fltBalanceAmount() {
      return parseFloat(this.objOrder?.balanceAmount) || 0;
    }
  },
  mounted() {
    this.handleGetPaymentMethods();
    this.handleGetBanks();
  },
  methods: {
    handleGetToday() {
      const objDate = new Date();
      const strMonth = String(objDate.getMonth() + 1).padStart(2, '0');
      const strDay = String(objDate.getDate()).padStart(2, '0');
      return `${objDate.getFullYear()}-${strMonth}-${strDay}`;
    },
    handleFormatAmount(fltValue) {
      const fltAmount = parseFloat(fltValue) || 0;
      return fltAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    handleGetVendorName(objOrder) {
      const objAccount = objOrder?.account;
      if (!objAccount) return this.strVendorName || '—';
      return objAccount.legal_name || `${objAccount.first_name || ''} ${objAccount.last_name || ''}`.trim() || '—';
    },
    handleGetCurrencyLabel(objOrder) {
      const objCurrency = objOrder?.currency;
      if (!objCurrency) return '—';
      const strCode = objCurrency.code || objCurrency.iso_code || '';
      return objCurrency.name ? `${objCurrency.name}${strCode ? ` (${strCode})` : ''}` : strCode || '—';
    },
    handleNormalizeOrder(objOrder) {
      if (!objOrder) return null;
      return {
        ...objOrder,
        purchaseNumber: objOrder.purchaseNumber || objOrder.purchase_number || `PO-${objOrder.id}`,
        grandTotalAmount: parseFloat(objOrder.grandTotalAmount ?? objOrder.grand_total_amount ?? objOrder.totalAmount ?? objOrder.total_amount) || 0,
        balanceAmount: parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0,
        currencyId: objOrder.currencyId ?? objOrder.currency_id ?? objOrder.currency?.id ?? null,
        currency: objOrder.currency || null
      };
    },
    handleApplyOrderCurrency(objOrder) {
      this.numCurrencyId = objOrder?.currencyId ? Number(objOrder.currencyId) : null;
      this.strCurrencyLabel = this.handleGetCurrencyLabel(objOrder);
    },
    handleGetPaymentMethods() {
      PaymentMethodService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstPaymentMethodOptions = (Array.isArray(lstData) ? lstData : []).map((objMethod) => ({
            label: objMethod.name,
            value: objMethod.id
          }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los métodos de pago', objError));
    },
    handleGetBanks() {
      BankService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstBankOptions = (Array.isArray(lstData) ? lstData : [])
            .filter((objBank) => (objBank.status || 'Active') !== 'Inactive')
            .map((objBank) => ({
              label: objBank.name,
              value: objBank.id
            }));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los bancos', objError));
    },
    handleLoadAccountOrders(numAccountId) {
      return PurchaseOrderService.getAll({
        include: 'account,currency',
        'filter[account_id]': numAccountId,
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          let lstRaw = Array.isArray(lstData) ? lstData : [];
          lstRaw = lstRaw
            .filter((objOrder) => {
              const numAccountIdOrder = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id;
              if (numAccountIdOrder && Number(numAccountIdOrder) !== Number(numAccountId)) return false;
              if (!handleCanRegisterPayment(objOrder.status)) return false;
              if (objOrder.status === ORDER_STATUS.COMPLETED || objOrder.status === ORDER_STATUS.CANCELLED) return false;
              const fltBalance = parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0;
              return fltBalance > 0;
            })
            .map((objOrder) => this.handleNormalizeOrder(objOrder));

          this.lstOrders = lstRaw;
          this.lstOrderOptions = lstRaw.map((objOrder) => ({
            label: `${objOrder.purchaseNumber} — Saldo $${this.handleFormatAmount(objOrder.balanceAmount)}`,
            value: objOrder.id
          }));
          if (lstRaw.length) {
            this.strVendorName = this.handleGetVendorName(lstRaw[0]);
          }
        })
        .catch((objError) => {
          handleError('Error', 'No se pudieron cargar las órdenes del proveedor', objError);
          this.lstOrders = [];
          this.lstOrderOptions = [];
        });
    },
    handleDefaultFormValues(objExtra = {}) {
      return {
        purchaseOrderId: null,
        amount: null,
        paymentMethodId: this.lstPaymentMethodOptions.length ? this.lstPaymentMethodOptions[0].value : null,
        bankId: null,
        paymentReference: '',
        paymentDate: this.handleGetToday(),
        ...objExtra
      };
    },
    handleOpen(objOrder = null, objContext = null) {
      this.bSelectOrder = !objOrder && !!objContext?.accountId;
      this.numAccountId = objContext?.accountId ? Number(objContext.accountId) : null;
      this.objOrder = null;
      this.numCurrencyId = null;
      this.strCurrencyLabel = '—';
      this.strVendorName = objContext?.vendorName || '—';
      this.lstOrders = [];
      this.lstOrderOptions = [];
      this.objValidationSchema = this.bSelectOrder ? validationSchemaWithOrder : validationSchema;
      this.strTitle = 'Registrar Abono';

      if (this.bSelectOrder) {
        this.handleLoadAccountOrders(this.numAccountId).then(() => {
          this.handleOpenModal(this.handleDefaultFormValues());
        });
        return;
      }

      this.objOrder = this.handleNormalizeOrder(objOrder);
      this.strVendorName = this.handleGetVendorName(objOrder);
      this.handleApplyOrderCurrency(this.objOrder);
      this.handleOpenModal(this.handleDefaultFormValues({
        amount: this.fltBalanceAmount || null
      }));
    },
    handleOpenModal(objValues) {
      this.objInitialData = objValues;
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
        this.$refs.modalFormRef.handleSetValues(this.objInitialData);
      }
    },
    handleOrderSelected(numOrderId) {
      const objFound = this.lstOrders.find((objOrder) => Number(objOrder.id) === Number(numOrderId));
      this.objOrder = objFound || null;
      this.strVendorName = this.handleGetVendorName(objFound);
      this.handleApplyOrderCurrency(this.objOrder);
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleSetValues(this.handleDefaultFormValues({
          purchaseOrderId: numOrderId || null,
          amount: this.fltBalanceAmount || null
        }));
      }
    },
    handleClose() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    },
    handleSubmit(objValues) {
      if (!this.objOrder) {
        handleError('Error de Validación', 'Debes seleccionar una orden de compra.');
        return;
      }
      if (!this.numCurrencyId) {
        handleError('Error de Validación', 'La orden no tiene moneda asignada.');
        return;
      }

      const fltAmount = Number(objValues.amount);
      if (fltAmount > this.fltBalanceAmount) {
        handleError('Error de Validación', 'El monto a abonar no puede exceder el saldo pendiente.');
        return;
      }

      this.bSpinner = true;
      PurchaseOrderPaymentService.create({
        purchaseOrderId: this.objOrder.id,
        amount: fltAmount,
        paymentMethodId: Number(objValues.paymentMethodId),
        bankId: objValues.bankId ? Number(objValues.bankId) : null,
        paymentReference: objValues.paymentReference || null,
        paymentDate: `${objValues.paymentDate} 12:00:00`,
        currencyId: Number(this.numCurrencyId)
      })
        .then(() => {
          handleSuccess('Abono registrado exitosamente');
          this.$emit('refresh');
          this.handleClose();
        })
        .catch((objError) => handleError('Ocurrió un problema al registrar el abono', objError))
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
