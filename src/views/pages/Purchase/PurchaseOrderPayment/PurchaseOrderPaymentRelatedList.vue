<template>
  <div>
    <nx-datatable object="purchase_order" child create-label="Registrar Abono" :show-create="bCanRegister" key-field="id"
      :data="lstPayments" :columns="lstVisibleColumns" :is-loading="bSpinner" :show-date-range="false" @create="handleRegister" @search="handleSearch"
      @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange" />
      </template>
    </nx-datatable>
  </div>
</template>

<script>
import PurchaseOrderPaymentService from '@/services/purchasing/PurchaseOrderPaymentService';
import { PAYMENT_COLUMNS, ACCOUNT_PAYMENT_COLUMNS } from '@/views/pages/Purchase/PurchaseOrderPayment/PurchaseOrderPaymentConstants';
import { handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

const STR_PAYMENT_INCLUDES = 'paymentMethod,bank,purchaseOrder';

export default {
  name: 'PurchaseOrderPaymentRelatedList',
  props: {
    purchaseOrderId: { type: [Number, String], default: null },
    accountId: { type: [Number, String], default: null },
    bCanRegister: { type: Boolean, default: false },
    title: { type: String, default: 'Abonos' }
  },
  emits: ['register'],
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstPayments: []
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
    this.handleGetData();
  },
  methods: {
    handlePageChange(objEvent) {
      this.currentPage = objEvent.detail.currentPage;
      this.pageSize = objEvent.detail.pageSize;
      this.handleGetData();
    },
    handleSearch(objEvent) {
      this.strSearch = objEvent.detail.value || '';
      this.currentPage = 1;
      this.handleGetData();
    },
    handleGetData() {
      if (this.bAccountMode) {
        this.handleGetAccountPayments();
        return;
      }
      if (!this.purchaseOrderId) return;

      this.bSpinner = true;
      PurchaseOrderPaymentService.getAll(handlePagerParams(
        this.currentPage,
        this.pageSize,
        handleSearchParams(this.strSearch, {
          include: STR_PAYMENT_INCLUDES,
          'filter[purchase_order_id]': this.purchaseOrderId
        })
      ))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];
          const numOrderId = Number(this.purchaseOrderId);
          this.lstPayments = lstRaw
            .filter((objPayment) => {
              const numPaymentOrderId = Number(objPayment.purchaseOrderId ?? objPayment.purchase_order_id);
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
      PurchaseOrderPaymentService.getAll(handlePagerParams(
        this.currentPage,
        this.pageSize,
        handleSearchParams(this.strSearch, {
          include: STR_PAYMENT_INCLUDES,
          'filter[account_id]': this.accountId
        })
      ))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;
          const lstRaw = Array.isArray(data) ? data : [];
          this.lstPayments = lstRaw.map((objPayment) => this.handleMapPayment(objPayment));
        })
        .catch((objError) => handleError('Error', 'No se pudieron cargar los abonos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleMapPayment(objPayment) {
      const numMethodId = objPayment.paymentMethodId ?? objPayment.payment_method_id;
      const numBankId = objPayment.bankId ?? objPayment.bank_id;
      const strReference = objPayment.paymentReference ?? objPayment.payment_reference ?? '';
      const strDate = objPayment.paymentDate || objPayment.payment_date || '';
      const fltAmount = parseFloat(objPayment.amount) || 0;
      const objOrder = objPayment.purchaseOrder || objPayment.purchase_order || null;
      const numPurchaseOrderId = objOrder?.id ?? objPayment.purchaseOrderId ?? objPayment.purchase_order_id;
      const strPurchaseNumber =
        objOrder?.purchaseNumber ||
        objOrder?.purchase_number ||
        (numPurchaseOrderId ? `PO-${numPurchaseOrderId}` : null);
      const objMethod = objPayment.paymentMethod || objPayment.payment_method;
      const objBank = objPayment.bank;

      return {
        ...objPayment,
        paymentDateLabel: strDate ? String(strDate).split(' ')[0] : '—',
        paymentMethodLabel: objMethod?.name || (numMethodId != null ? `Método #${numMethodId}` : '—'),
        bankLabel: objBank?.name || (numBankId != null ? `Banco #${numBankId}` : '—'),
        paymentReferenceLabel: strReference || '—',
        purchaseOrderLabel: strPurchaseNumber || '—',
        amountLabel: `+$${fltAmount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}`
      };
    },
    handleRegister() {
      this.$emit('register');
    }
  }
};
</script>
