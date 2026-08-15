<template>
  <nx-modal-form ref="modalFormRef" id="purchase-order-payment-modal" :title="strTitle" size="xl" :validationSchema="objValidationSchema" :initialValues="objInitialData" @submit="handleSubmit" @cancel="handleCancel">
    <template #default="{ errors }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div v-if="bSelectOrder" class="md:col-span-2">
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Orden de Compra <span class="text-danger">*</span></label>
          <Field name="purchaseOrderId" v-slot="{ value, handleChange, handleBlur }">
            <nx-lookup :model-value="value" type="purchase_order" :params="objOrderLookupParams" placeholder="Buscar orden..."
              class="w-full" :class="{ 'border-danger': errors.purchaseOrderId }"
              @update:model-value="(val) => { handleChange(val); handleOrderSelected(val); }" @blur="handleBlur" />
          </Field>
          <ErrorMessage name="purchaseOrderId" class="text-danger text-[11px] mt-1 block" />
          <p class="text-[11px] text-default mt-1 mb-0">Solo órdenes borrador/activas con saldo pendiente de este proveedor.</p>
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
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Monto a Abonar <span class="text-danger">*</span></label>
          <Field name="amount" as="input" type="number" min="0.01" step="0.01" :class="{ 'border-danger focus:border-danger': errors.amount }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" :disabled="!objOrder" />
          <ErrorMessage name="amount" class="text-danger text-[11px] mt-1 block" />
          <p class="text-[11px] text-default mt-1 mb-0">No puede exceder el saldo restante de la orden.</p>
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Método de Pago <span class="text-danger">*</span></label>
          <Field name="paymentMethodId" v-slot="{ value, handleChange, handleBlur }">
            <nx-lookup :model-value="value" type="payment_method" :disabled="!objOrder" class="w-full"
              :class="{ 'border-danger': errors.paymentMethodId }" @update:model-value="handleChange" @blur="handleBlur" />
          </Field>
          <ErrorMessage name="paymentMethodId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Banco</label>
          <Field name="bankId" v-slot="{ value, handleChange, handleBlur }">
            <nx-lookup :model-value="value" type="bank" :disabled="!objOrder" class="w-full"
              :class="{ 'border-danger': errors.bankId }" @update:model-value="handleChange" @blur="handleBlur" />
          </Field>
          <ErrorMessage name="bankId" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Referencia</label>
          <Field name="paymentReference" as="input" type="text" :disabled="!objOrder" :class="{ 'border-danger focus:border-danger': errors.paymentReference }" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" placeholder="Ej. Folio / No. de transferencia" maxlength="100" />
          <ErrorMessage name="paymentReference" class="text-danger text-[11px] mt-1 block" />
        </div>
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha del Pago <span class="text-danger">*</span></label>
          <Field name="paymentDate" v-slot="{ field, value }">
            <a-date-picker :value="value" valueFormat="YYYY-MM-DD" class="w-full" placeholder="dd/mm/yyyy" @update:value="field.onChange" />
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
      numCurrencyId: null,
      numAccountId: null,
      strTitle: 'Registrar Abono',
      strCurrencyLabel: '—',
      objOrder: null,
      objValidationSchema: validationSchema,
      objInitialData: validationSchema.getDefault()
    };
  },
  computed: {
    fltBalanceAmount() {
      return parseFloat(this.objOrder?.balanceAmount) || 0;
    },
    objOrderLookupParams() {
      return {
        'filter[account_id]': this.numAccountId,
        'filter[status]': [ORDER_STATUS.DRAFT, ORDER_STATUS.ACTIVATED],
        'filter[balance_gt]': 0
      };
    }
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
    handleNormalizeOrder(objOrder) {
      if (!objOrder) return null;
      return {
        ...objOrder,
        grandTotalAmount: parseFloat(objOrder.grandTotalAmount ?? objOrder.grand_total_amount ?? objOrder.totalAmount ?? objOrder.total_amount) || 0,
        balanceAmount: parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0,
        currencyId: objOrder.currencyId ?? objOrder.currency_id ?? objOrder.currency?.id ?? null,
        currency: objOrder.currency || null
      };
    },
    handleGetCurrencyLabel(objOrder) {
      const objCurrency = objOrder?.currency;
      if (!objCurrency) return '—';
      const strCode = objCurrency.code || objCurrency.iso_code || '';
      return objCurrency.name ? `${objCurrency.name}${strCode ? ` (${strCode})` : ''}` : strCode || '—';
    },
    handleApplyOrderCurrency(objOrder) {
      this.numCurrencyId = objOrder?.currencyId ? Number(objOrder.currencyId) : null;
      this.strCurrencyLabel = this.handleGetCurrencyLabel(objOrder);
    },
    handleDefaultFormValues(objExtra = {}) {
      return {
        purchaseOrderId: null,
        amount: null,
        paymentMethodId: null,
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
      this.objValidationSchema = this.bSelectOrder ? validationSchemaWithOrder : validationSchema;

      if (this.bSelectOrder) {
        this.handleOpenModal(this.handleDefaultFormValues());
        return;
      }

      this.objOrder = this.handleNormalizeOrder(objOrder);
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
      if (!numOrderId) {
        this.objOrder = null;
        this.numCurrencyId = null;
        this.strCurrencyLabel = '—';
        if (this.$refs.modalFormRef) {
          this.$refs.modalFormRef.handleSetValues(this.handleDefaultFormValues({ purchaseOrderId: null }));
        }
        return;
      }

      PurchaseOrderService.getById(numOrderId, { include: 'currency' })
        .then((objResponse) => {
          const objRaw = objResponse.data || objResponse;
          const numAccountIdOrder = objRaw.accountId ?? objRaw.account_id ?? objRaw.account?.id;
          if (this.numAccountId && numAccountIdOrder && Number(numAccountIdOrder) !== Number(this.numAccountId)) {
            handleError('Error', 'La orden no pertenece a este proveedor');
            this.objOrder = null;
            return;
          }
          if (!handleCanRegisterPayment(objRaw.status)) {
            handleError('Error', 'Solo puedes abonar órdenes en borrador o activas');
            this.objOrder = null;
            return;
          }
          this.objOrder = this.handleNormalizeOrder(objRaw);
          if (this.fltBalanceAmount <= 0) {
            handleError('Error', 'La orden no tiene saldo pendiente');
            this.objOrder = null;
            return;
          }
          this.handleApplyOrderCurrency(this.objOrder);
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleSetValues(this.handleDefaultFormValues({
              purchaseOrderId: Number(numOrderId),
              amount: this.fltBalanceAmount || null
            }));
          }
        })
        .catch((objError) => handleError('Error', 'No se pudo cargar la orden', objError));
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
