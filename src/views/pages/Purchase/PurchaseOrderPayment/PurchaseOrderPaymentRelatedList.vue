<template>
  <div>
    <div v-if="bCanRegister" class="flex justify-end mb-3">
      <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleRegister">
        <i class="ph ph-plus"></i> Registrar Abono
      </button>
    </div>
    <nx-datatable
      key-field="id"
      :data="lstPayments"
      :columns="lstVisibleColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @refresh="handleGetData"
    />
  </div>
</template>

<script>
import PurchaseOrderService from '@/services/purchasing/PurchaseOrderService';
import PurchaseOrderPaymentService from '@/services/purchasing/PurchaseOrderPaymentService';
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import BankService from '@/services/sales/BankService';
import { PAYMENT_COLUMNS, ACCOUNT_PAYMENT_COLUMNS } from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentConstants';
import { handleError } from '@/utils/toastUtils';

export default {
  name: 'PurchaseOrderPaymentRelatedList',
  props: {
    purchaseOrderId: { type: [Number, String], default: null },
    accountId: { type: [Number, String], default: null },
    bCanRegister: { type: Boolean, default: false }
  },
  emits: ['register'],
  data() {
    return {
      bSpinner: false,
      lstPayments: [],
      lstPaymentMethods: [],
      lstBanks: []
    };
  },
  computed: {
    bAccountMode() {
      return this.accountId != null && this.accountId !== '' && !this.purchaseOrderId;
    },
    lstVisibleColumns() {
      return this.bAccountMode ? ACCOUNT_PAYMENT_COLUMNS : PAYMENT_COLUMNS;
    }
  },
  watch: {
    purchaseOrderId() {
      this.handleGetData();
    },
    accountId() {
      this.handleGetData();
    }
  },
  mounted() {
    Promise.all([this.handleGetPaymentMethods(), this.handleGetBanks()]).then(() => {
      this.handleGetData();
    });
  },
  methods: {
    handleGetPaymentMethods() {
      return PaymentMethodService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstPaymentMethods = Array.isArray(lstData) ? lstData : [];
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los métodos de pago', objError));
    },
    handleGetBanks() {
      return BankService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstBanks = Array.isArray(lstData) ? lstData : [];
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los bancos', objError));
    },
    handleGetData() {
      if (this.bAccountMode) {
        this.handleGetAccountPayments();
        return;
      }
      if (!this.purchaseOrderId) return;
      this.bSpinner = true;
      PurchaseOrderPaymentService.getAll({ purchase_order_id: this.purchaseOrderId })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstPayments = lstRaw.map((objPayment) => this.handleMapPayment(objPayment));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleGetAccountPayments() {
      if (!this.accountId) return;
      this.bSpinner = true;
      PurchaseOrderService.getAll({
        'filter[account_id]': this.accountId,
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          let lstOrders = Array.isArray(lstData) ? lstData : [];
          lstOrders = lstOrders.filter((objOrder) => {
            const numAccountId = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id;
            return !numAccountId || Number(numAccountId) === Number(this.accountId);
          });

          if (!lstOrders.length) {
            this.lstPayments = [];
            return;
          }

          return Promise.all(
            lstOrders.map((objOrder) =>
              PurchaseOrderPaymentService.getAll({ purchase_order_id: objOrder.id }).then((objPayResponse) => {
                const lstPayData = objPayResponse.data || objPayResponse;
                const lstRaw = Array.isArray(lstPayData) ? lstPayData : [];
                return lstRaw.map((objPayment) => this.handleMapPayment(objPayment, objOrder.id));
              })
            )
          ).then((lstGrouped) => {
            this.lstPayments = lstGrouped.flat().sort((objA, objB) => {
              const strDateA = objA.paymentDate || objA.payment_date || '';
              const strDateB = objB.paymentDate || objB.payment_date || '';
              return String(strDateB).localeCompare(String(strDateA));
            });
          });
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleMapPayment(objPayment, numOrderId = null) {
      const numMethodId = objPayment.paymentMethodId ?? objPayment.payment_method_id;
      const numBankId = objPayment.bankId ?? objPayment.bank_id;
      const strReference = objPayment.paymentReference ?? objPayment.payment_reference ?? '';
      const strDate = objPayment.paymentDate || objPayment.payment_date || '';
      const fltAmount = parseFloat(objPayment.amount) || 0;
      const numPurchaseOrderId = numOrderId ?? objPayment.purchaseOrderId ?? objPayment.purchase_order_id;
      return {
        ...objPayment,
        paymentDateLabel: strDate ? String(strDate).split(' ')[0] : '—',
        paymentMethodLabel: this.handleGetPaymentMethodLabel(numMethodId),
        bankLabel: this.handleGetBankLabel(numBankId),
        paymentReferenceLabel: strReference || '—',
        purchaseOrderLabel: numPurchaseOrderId ? `#PO-${numPurchaseOrderId}` : '—',
        amountLabel: `+$${fltAmount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`
      };
    },
    handleGetPaymentMethodLabel(numMethodId) {
      if (numMethodId == null) return '—';
      const objMethod = this.lstPaymentMethods.find((objItem) => Number(objItem.id) === Number(numMethodId));
      return objMethod ? objMethod.name : `Método #${numMethodId}`;
    },
    handleGetBankLabel(numBankId) {
      if (numBankId == null) return '—';
      const objBank = this.lstBanks.find((objItem) => Number(objItem.id) === Number(numBankId));
      return objBank ? objBank.name : `Banco #${numBankId}`;
    },
    handleRegister() {
      this.$emit('register');
    }
  }
};
</script>
