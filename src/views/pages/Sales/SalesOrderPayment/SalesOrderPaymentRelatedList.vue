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
import SalesOrderService from '@/services/sales/SalesOrderService';
import SalesOrderPaymentService from '@/services/sales/SalesOrderPaymentService';
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import BankService from '@/services/sales/BankService';
import {
  PAYMENT_COLUMNS,
  ACCOUNT_PAYMENT_COLUMNS
} from '@/views/pages/Sales/SalesOrderPayment/SalesOrderPaymentConstants';
import { handleError } from '@/utils/toastUtils';

export default {
  name: 'SalesOrderPaymentRelatedList',
  props: {
    salesOrderId: { type: [Number, String], default: null },
    accountId: { type: [Number, String], default: null },
    bCanRegister: { type: Boolean, default: false }
  },
  emits: ['register'],
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstPayments: [],
      lstPaymentMethods: [],
      lstBanks: []
    };
  },
  computed: {
    bAccountMode() {
      return this.accountId != null && this.accountId !== '' && !this.salesOrderId;
    },
    lstVisibleColumns() {
      return this.bAccountMode ? ACCOUNT_PAYMENT_COLUMNS : PAYMENT_COLUMNS;
    }
  },
  watch: {
    salesOrderId() {
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
      if (!this.salesOrderId) return;
      this.bSpinner = true;
      SalesOrderPaymentService.getAll({
        'filter[sales_order_id]': this.salesOrderId,
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          const numOrderId = Number(this.salesOrderId);
          this.lstPayments = lstRaw
            .filter((objPayment) => {
              const numPaymentOrderId = Number(objPayment.salesOrderId ?? objPayment.sales_order_id);
              return numPaymentOrderId === numOrderId;
            })
            .map((objPayment) => this.handleMapPayment(objPayment));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleGetAccountPayments() {
      if (!this.accountId) return;
      this.bSpinner = true;
      SalesOrderService.getAll({
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
              SalesOrderPaymentService.getAll({
                'filter[sales_order_id]': objOrder.id,
                per_page: 200
              }).then((objPayResponse) => {
                const lstPayData = objPayResponse.data || objPayResponse;
                const lstRaw = Array.isArray(lstPayData) ? lstPayData : [];
                const numOrderId = Number(objOrder.id);
                return lstRaw
                  .filter((objPayment) => {
                    const numPaymentOrderId = Number(objPayment.salesOrderId ?? objPayment.sales_order_id);
                    return numPaymentOrderId === numOrderId;
                  })
                  .map((objPayment) => this.handleMapPayment(objPayment, objOrder));
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
    handleMapPayment(objPayment, objOrderOrId = null) {
      const numMethodId = objPayment.paymentMethodId ?? objPayment.payment_method_id;
      const numBankId = objPayment.bankId ?? objPayment.bank_id;
      const strReference = objPayment.paymentReference ?? objPayment.payment_reference ?? '';
      const strDate = objPayment.paymentDate || objPayment.payment_date || '';
      const fltAmount = parseFloat(objPayment.amount) || 0;
      const objOrder = objOrderOrId && typeof objOrderOrId === 'object' ? objOrderOrId : null;
      const numSalesOrderId = objOrder?.id ?? objOrderOrId ?? objPayment.salesOrderId ?? objPayment.sales_order_id;
      const strOrderNumber =
        objOrder?.orderNumber ||
        objOrder?.order_number ||
        objPayment.salesOrder?.orderNumber ||
        objPayment.sales_order?.order_number ||
        (numSalesOrderId ? `SO-${numSalesOrderId}` : null);
      return {
        ...objPayment,
        paymentDateLabel: strDate ? String(strDate).split(' ')[0] : '—',
        paymentMethodLabel: this.handleGetPaymentMethodLabel(numMethodId),
        bankLabel: this.handleGetBankLabel(numBankId),
        paymentReferenceLabel: strReference || '—',
        salesOrderLabel: strOrderNumber || '—',
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
