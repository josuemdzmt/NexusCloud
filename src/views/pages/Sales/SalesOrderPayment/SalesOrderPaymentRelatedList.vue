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
      @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
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
import { handleInitPager, handlePagerParams, handleParseList } from '@/utils/listPaginationUtils';

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
      ...handleInitPager(),
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
    handlePageChange(objEvent) {
      this.currentPage = objEvent.detail.currentPage;
      this.pageSize = objEvent.detail.pageSize;
      this.handleGetData();
    },

    handleGetPaymentMethods() {
      return PaymentMethodService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const data = objResponse.data || objResponse;
          this.lstPaymentMethods = Array.isArray(data) ? data : [];
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los métodos de pago', objError));
    },
    handleGetBanks() {
      return BankService.getAll({ per_page: 100 })
        .then((objResponse) => {
          const data = objResponse.data || objResponse;
          this.lstBanks = Array.isArray(data) ? data : [];
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
      SalesOrderPaymentService.getAll(handlePagerParams(this.currentPage, this.pageSize, {'filter[sales_order_id]': this.salesOrderId}))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];
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
      SalesOrderService.getAll(handlePagerParams(1, 100, { 'filter[account_id]': this.accountId }))
        .then((objResponse) => {
          const { data } = handleParseList(objResponse, 1);
          let lstOrders = Array.isArray(data) ? data : [];
          lstOrders = lstOrders.filter((objOrder) => {
            const numAccountId = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id;
            return !numAccountId || Number(numAccountId) === Number(this.accountId);
          });

          if (!lstOrders.length) {
            this.lstPayments = [];
            this.totalPages = 1;
            return;
          }

          return Promise.all(
            lstOrders.map((objOrder) =>
              SalesOrderPaymentService.getAll(handlePagerParams(1, 100, {
                'filter[sales_order_id]': objOrder.id
              })).then((objPayResponse) => {
                const { data: lstPayData } = handleParseList(objPayResponse, 1);
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
            this.totalPages = Math.max(1, Math.ceil(this.lstPayments.length / this.pageSize));
            this.currentPage = 1;
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
