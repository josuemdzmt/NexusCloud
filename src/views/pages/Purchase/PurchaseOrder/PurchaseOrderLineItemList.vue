<template>
  <div>
    <div v-if="bCanEdit" class="flex justify-end mb-3">
      <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
        <i class="ph ph-plus"></i> Agregar línea
      </button>
    </div>
    <nx-datatable
      key-field="id"
      :data="lstLineItems"
      :columns="lstActiveColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @rowaction="handleRowAction"
      @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
    <PurchaseOrderLineItemForm ref="lineItemFormRef" @success="handleGetData" />
  </div>
</template>

<script>
import PurchaseOrderLineItemService from '@/services/purchasing/PurchaseOrderLineItemService';
import PurchaseOrderLineItemForm from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderLineItemForm.vue';
import { ORDER_STATUS, LINE_ITEM_COLUMNS, handleCanEditOrder } from '@/views/pages/Purchase/PurchaseOrder/PurchaseOrderConstants';
import { handleNormalizePurchaseOrderLineItem } from '@/views/pages/Purchase/PurchaseOrder/purchaseOrderUtils';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { handleInitPager, handlePagerParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'PurchaseOrderLineItemList',
  components: { PurchaseOrderLineItemForm },
  props: {
    purchaseOrderId: { type: [Number, String], required: true },
    status: { type: String, default: ORDER_STATUS.DRAFT },
    currencyId: { type: [Number, String], default: null },
    pricebookId: { type: [Number, String], default: null }
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
    lstActiveColumns() {
      if (this.bCanEdit) return this.lstColumns;
      return this.lstColumns.filter((objCol) => objCol.type !== 'action');
    }
  },
  watch: {
    purchaseOrderId: {
      immediate: true,
      handler(numId) {
        if (numId) this.handleGetData();
      }
    },
    status() {
      if (this.purchaseOrderId) this.handleGetData();
    }
  },
  methods: {
    handlePageChange(objEvent) {
      this.currentPage = objEvent.detail.currentPage;
      this.pageSize = objEvent.detail.pageSize;
      this.handleGetData();
    },

    handleGetData() {
      if (!this.purchaseOrderId) return;
      this.bSpinner = true;
      PurchaseOrderLineItemService.getAll(handlePagerParams(this.currentPage, this.pageSize, {'filter[purchase_order_id]': this.purchaseOrderId,
        include: 'product'}))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];
          this.lstLineItems = lstRaw.map(handleNormalizePurchaseOrderLineItem);
          this.$emit('refresh', this.lstLineItems);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las líneas', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (!this.bCanEdit) {
        handleError('No permitido', 'Solo se pueden agregar líneas en borrador');
        return;
      }
      this.$refs.lineItemFormRef?.handleOpen(null, {
        purchaseOrderId: this.purchaseOrderId,
        currencyId: this.currencyId,
        pricebookId: this.pricebookId
      });
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (!this.bCanEdit) {
        handleError('No permitido', 'Solo se pueden editar líneas en borrador');
        return;
      }
      if (action.name === 'edit') {
        this.$refs.lineItemFormRef?.handleOpen(row.id, {
          purchaseOrderId: this.purchaseOrderId,
          currencyId: this.currencyId,
          pricebookId: this.pricebookId
        });
      } else if (action.name === 'delete') {
        this.handleDelete(row);
      }
    },
    handleDelete(objRow) {
      PurchaseOrderLineItemService.delete(objRow.id)
        .then(() => {
          handleSuccess('Eliminado', 'Línea eliminada exitosamente');
          this.handleGetData();
        })
        .catch((objError) => handleError('Ocurrió un problema al eliminar la línea', objError));
    }
  }
};
</script>
