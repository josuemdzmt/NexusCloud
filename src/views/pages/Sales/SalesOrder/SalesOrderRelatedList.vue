<template>
  <div>
    <nx-datatable object="sales_order" create-label="Nueva orden" key-field="id" :data="lstOrders" :columns="lstColumns"
      :is-loading="bSpinner" :show-date-range="false" @create="handleCreate" @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
    <SalesOrderForm ref="salesOrderFormRef" @success="handleFormSuccess" />
  </div>
</template>

<script>
import SalesOrderService from '@/services/sales/SalesOrderService';
import SalesOrderForm from '@/views/pages/Sales/SalesOrder/SalesOrderForm.vue';
import { ORDER_STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import { all_routes } from '@/router/all_routes';
import { handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

const RELATED_ACTION_BUTTONS = {
  rowActions: ACTION_BUTTONS.rowActions.filter((objAction) => ['preview', 'detail'].includes(objAction.name))
};

export default {
  name: 'SalesOrderRelatedList',
  components: {
    SalesOrderForm
  },
  props: {
    accountId: { type: [Number, String], default: null }
  },
  emits: ['refresh'],
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstOrders: [],
      lstColumns: [
        { label: 'Orden', fieldName: 'orderNumber', type: 'text', sortable: true },
        { label: 'Referencia', fieldName: 'externalReference', type: 'text', sortable: true },
        { label: 'Fecha Venta', fieldName: 'effectiveDate', type: 'text', sortable: true },
        { label: 'Moneda', fieldName: 'currencyLabel', type: 'text', sortable: true },
        { label: 'Total', fieldName: 'grandTotalAmount', type: 'currency' },
        { label: 'Pagado', fieldName: 'paidAmount', type: 'currency' },
        { label: 'Saldo Pendiente', fieldName: 'balanceAmount', type: 'currency' },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: ORDER_STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: RELATED_ACTION_BUTTONS }
      ]
    };
  },
  watch: {
    accountId() {
      if (this.accountId) this.handleGetData();
    }
  },
  mounted() {
    if (this.accountId) this.handleGetData();
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
      if (!this.accountId) return;

      this.bSpinner = true;
      SalesOrderService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch, {
        include: 'account,currency',
        'filter[account_id]': this.accountId
      })))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          let lstRaw = Array.isArray(data) ? data : [];
          lstRaw = lstRaw.filter((objOrder) => {
            const numAccountId = objOrder.accountId ?? objOrder.account_id ?? objOrder.account?.id;
            return !numAccountId || Number(numAccountId) === Number(this.accountId);
          });

          this.lstOrders = lstRaw.map((objOrder) => {
            const objCurrency = objOrder.currency || {};
            return {
              ...objOrder,
              orderNumber: objOrder.orderNumber || objOrder.order_number || `SO-${objOrder.id}`,
              externalReference: objOrder.externalReference || objOrder.external_reference || '—',
              effectiveDate: objOrder.effectiveDate || objOrder.effective_date || '—',
              currencyLabel: objCurrency.iso_code || objCurrency.code || objCurrency.name || '—',
              grandTotalAmount: parseFloat(objOrder.grandTotalAmount ?? objOrder.grand_total_amount ?? objOrder.totalAmount ?? objOrder.total_amount) || 0,
              paidAmount: parseFloat(objOrder.paidAmount ?? objOrder.paid_amount) || 0,
              balanceAmount: parseFloat(objOrder.balanceAmount ?? objOrder.balance_amount) || 0
            };
          });
          this.$emit('refresh', this.lstOrders);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las órdenes', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      this.$refs.salesOrderFormRef?.handleOpen(null, { accountId: this.accountId });
    },
    handleFormSuccess() {
      this.handleGetData();
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail || {};
      if (!action?.name || row?.id == null) return;
      if (action.name === 'preview') {
        this.$router.push(`${all_routes.salesOrders}/${row.id}/preview`);
      } else if (action.name === 'detail') {
        this.$router.push(`${all_routes.salesOrders}/${row.id}/detail`);
      }
    }
  }
};
</script>
