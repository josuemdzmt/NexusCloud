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
      :columns="lstDisplayColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @rowaction="handleRowAction"
      @refresh="handleGetData"
    />
    <SalesOrderLineItemForm ref="lineItemFormRef" @success="handleLineSuccess" />
  </div>
</template>

<script>
import SalesOrderLineItemService from '@/services/sales/SalesOrderLineItemService';
import SalesOrderLineItemForm from '@/views/pages/Sales/SalesOrderLineItem/SalesOrderLineItemForm.vue';
import { ORDER_STATUS, LINE_ITEM_COLUMNS, handleCanEditOrder } from '@/views/pages/Sales/SalesOrder/SalesOrderConstants';
import { handleNormalizeSalesOrderLineItem } from '@/views/pages/Sales/SalesOrder/salesOrderUtils';
import { handleSuccess, handleError } from '@/utils/toastUtils';

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
    handleGetData() {
      if (!this.salesOrderId) return;
      this.bSpinner = true;
      SalesOrderLineItemService.getAll({
        'filter[sales_order_id]': this.salesOrderId,
        include: 'product',
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstLineItems = lstRaw.map(handleNormalizeSalesOrderLineItem);
          this.$emit('refresh', this.lstLineItems);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las líneas', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleLineSuccess() {
      this.handleGetData();
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
        })
        .catch((objError) => handleError('Ocurrió un problema al eliminar la línea', objError));
    }
  }
};
</script>
