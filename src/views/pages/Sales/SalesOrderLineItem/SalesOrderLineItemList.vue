<template>
  <div>
    <nx-datatable object="sales_order" child create-label="Agregar línea" :show-create="bCanEdit" key-field="id"
      :data="lstLineItems" :columns="lstDisplayColumns" :is-loading="bSpinner" :show-date-range="false" @create="handleCreate" @rowaction="handleRowAction"
      @search="handleSearch" @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
    <SalesOrderLineItemForm ref="lineItemFormRef" @success="handleLineSuccess" />
  </div>
</template>

<script>
import SalesOrderLineItemService from '@/services/sales/SalesOrderLineItemService';
import SalesOrderLineItemForm from '@/views/pages/Sales/SalesOrderLineItem/SalesOrderLineItemForm.vue';
import { ORDER_STATUS, LINE_ITEM_COLUMNS, handleCanEditOrder } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import { handleNormalizeSalesOrderLineItem } from '@/views/pages/Sales/SalesOrder/salesOrderUtils';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'SalesOrderLineItemList',
  components: { SalesOrderLineItemForm },
  props: {
    salesOrderId: { type: [Number, String], required: true },
    status: { type: String, default: ORDER_STATUS.DRAFT },
    pricebookId: { type: [Number, String], default: null },
    currencyId: { type: [Number, String], default: null }
  },
  emits: ['refresh'],
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstLineItems: [],
      lstColumns: LINE_ITEM_COLUMNS
    };
  },
  computed: {
    bCanEdit() {
      return handleCanEditOrder(this.status);
    },
    lstDisplayColumns() {
      if (this.bCanEdit) return this.lstColumns;
      return this.lstColumns.filter((objCol) => objCol.type !== 'action');
    }
  },
  watch: {
    salesOrderId: {
      immediate: true,
      handler(numId) {
        if (numId) this.handleGetData();
      }
    },
    status() {
      if (this.salesOrderId) this.handleGetData();
    }
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
      if (!this.salesOrderId) return;
      this.bSpinner = true;
      SalesOrderLineItemService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch, {'filter[sales_order_id]': this.salesOrderId,
        include: 'product'})))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];
          this.lstLineItems = lstRaw.map(handleNormalizeSalesOrderLineItem);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las líneas', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleLineSuccess() {
      this.handleGetData();
      this.$emit('refresh');
    },
    handleCreate() {
      if (!this.bCanEdit) {
        handleError('No permitido', 'Solo se pueden agregar líneas en borrador');
        return;
      }
      if (this.$refs.lineItemFormRef) {
        this.$refs.lineItemFormRef.handleOpen(null, {
          salesOrderId: this.salesOrderId,
          pricebookId: this.pricebookId,
          currencyId: this.currencyId
        });
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (!this.bCanEdit) {
        handleError('No permitido', 'Solo se pueden editar líneas en borrador');
        return;
      }
      if (action.name === 'edit') {
        this.$refs.lineItemFormRef?.handleOpen(row.id, {
          salesOrderId: this.salesOrderId,
          pricebookId: this.pricebookId,
          currencyId: this.currencyId
        });
      } else if (action.name === 'delete') {
        this.handleDelete(row);
      }
    },
    handleDelete(objRow) {
      SalesOrderLineItemService.delete(objRow.id)
        .then(() => {
          handleSuccess('Eliminado', 'Línea eliminada exitosamente');
          this.handleGetData();
          this.$emit('refresh');
        })
        .catch((objError) => handleError('Ocurrió un problema al eliminar la línea', objError));
    }
  }
};
</script>
