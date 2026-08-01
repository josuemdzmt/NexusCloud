<template>
  <div>
    <div v-if="bCanEdit" class="flex justify-end mb-3">
      <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
        <i class="ph ph-plus"></i> Agregar línea
      </button>
    </div>
    <nx-datatable key-field="id" :data="lstLineItems" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false" @rowaction="handleRowAction" @refresh="handleGetData" />
    <ProductTransferLineItemForm ref="lineItemFormRef" @success="handleGetData" />
  </div>
</template>

<script>
import ProductTransferLineItemService from '@/services/inventory/ProductTransferLineItemService';
import ProductTransferLineItemForm from '@/views/pages/Inventory/ProductTransferLineItem/ProductTransferLineItemForm.vue';
import { LINE_ITEM_COLUMNS } from '@/views/pages/Inventory/ProductTransferLineItem/ProductTransferLineItemConstants';
import { TRANSFER_STATUS } from '@/views/pages/Inventory/ProductTransfer/ProductTransferConstants';
import { handleSuccess, handleError } from '@/utils/toastUtils';

export default {
  name: 'ProductTransferLineItemList',
  components: {
    ProductTransferLineItemForm
  },
  props: {
    productTransferId: { type: [Number, String], required: true },
    status: { type: String, default: TRANSFER_STATUS.DRAFT }
  },
  emits: ['refresh'],
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstLineItems: [],
      lstColumns: LINE_ITEM_COLUMNS
    };
  },
  computed: {
    bCanEdit() {
      return this.status === TRANSFER_STATUS.DRAFT || this.status === TRANSFER_STATUS.READY;
    }
  },
  watch: {
    productTransferId: {
      immediate: true,
      handler(numId) {
        if (numId) {
          this.handleGetData();
        }
      }
    },
    status() {
      if (this.productTransferId) {
        this.handleGetData();
      }
    }
  },
  methods: {
    handleGetData() {
      if (!this.productTransferId) return;
      this.bSpinner = true;
      ProductTransferLineItemService.getAll({
        'filter[product_transfer_id]': this.productTransferId,
        include: 'product',
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstLineItems = lstRaw.map((objLine) => {
            const objProduct = objLine.product || {};
            const numReceived = objLine.quantityReceived ?? objLine.quantity_received;
            return {
              ...objLine,
              productName: objProduct.name || 'Desconocido',
              productSku: objProduct.sku || '—',
              quantityRequested: objLine.quantityRequested ?? objLine.quantity_requested ?? 0,
              quantityReceivedLabel: numReceived == null || numReceived === '' ? '—' : numReceived
            };
          });
          this.$emit('refresh', this.lstLineItems);
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener las líneas', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (!this.bCanEdit) {
        handleError('No permitido', 'Solo se pueden agregar líneas en borrador o listos');
        return;
      }
      if (this.$refs.lineItemFormRef) {
        this.$refs.lineItemFormRef.handleOpen(null, this.productTransferId);
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (!this.bCanEdit) {
        handleError('No permitido', 'Solo se pueden editar líneas en borrador o listos');
        return;
      }
      if (action.name === 'edit') {
        if (this.$refs.lineItemFormRef) {
          this.$refs.lineItemFormRef.handleOpen(row.id, this.productTransferId);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row);
      }
    },
    handleDelete(objRow) {
      ProductTransferLineItemService.delete(objRow.id)
        .then(() => {
          handleSuccess('Eliminado', 'Línea eliminada exitosamente');
          this.handleGetData();
        })
        .catch((objError) => handleError('Ocurrió un problema al eliminar la línea', objError));
    }
  }
};
</script>
