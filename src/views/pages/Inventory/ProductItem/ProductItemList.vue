<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Inventario</h1>
        <div class="flex items-center gap-2">
          <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>

      <nx-datatable
        key-field="id"
        :data="lstProductItems"
        :columns="lstColumns"
        :is-loading="bSpinner"
        :show-date-range="false"
        @rowaction="handleRowAction"
        @refresh="handleGetData"
      />

      <ProductItemForm ref="productItemFormRef" @success="handleGetData" />
      <ProductItemHistory ref="historyRef" />
    </div>
  </main>
</template>

<script>
import ProductItemService from '@/services/inventory/ProductItemService';
import ProductItemForm from '@/views/pages/Inventory/ProductItem/ProductItemForm.vue';
import ProductItemHistory from '@/views/pages/Inventory/ProductItem/ProductItemHistory.vue';
import { handleSuccess, handleError, handleInfo } from '@/utils/toastUtils';
import { ACTION_BUTTONS, STOCK_STATUS_BADGE, handleResolveStockStatus } from '@/views/pages/Inventory/ProductItem/ProductItemConstants';

export default {
  name: 'ProductItemList',
  components: {
    ProductItemForm,
    ProductItemHistory
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstProductItems: [],
      lstColumns: [
        { label: 'ID', fieldName: 'stockCode', type: 'text', sortable: true },
        { label: 'Producto', fieldName: 'productName', type: 'text', sortable: true },
        { label: 'SKU', fieldName: 'productSku', type: 'text', sortable: true },
        { label: 'Almacén', fieldName: 'locationName', type: 'text', sortable: true },
        { label: 'Cantidad', fieldName: 'quantityOnHand', type: 'number', sortable: true },
        { label: 'Última actualización', fieldName: 'lastUpdateLabel', type: 'text', sortable: true },
        { label: 'Estado', fieldName: 'stockStatus', type: 'badge', typeAttributes: STOCK_STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ACTION_BUTTONS }
      ]
    };
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      this.bSpinner = true;
      ProductItemService.getAll({
        include: 'product,location',
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstProductItems = lstRaw.map((objItem) => {
            const objProduct = objItem.product || {};
            const numQty = objItem.quantityOnHand ?? objItem.quantity_on_hand ?? 0;
            const numMin = objItem.minimumStockLevel ?? objItem.minimum_stock_level ?? null;
            return {
              ...objItem,
              stockCode: `#STK${String(objItem.id).padStart(4, '0')}`,
              productName: objProduct.name || 'Desconocido',
              productSku: objProduct.sku || '—',
              locationName: objItem.location?.name || 'Desconocido',
              unitName: objProduct.unitMeasure?.name || objProduct.unit_measure?.name || '—',
              quantityOnHand: numQty,
              lastUpdateLabel: this.handleFormatDate(objItem.updatedAt || objItem.updated_at || objItem.createdAt || objItem.created_at),
              stockStatus: handleResolveStockStatus(numQty, numMin)
            };
          });
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener el inventario', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleFormatDate(strDate) {
      if (!strDate) return '—';
      const objDate = new Date(strDate);
      if (Number.isNaN(objDate.getTime())) return strDate;
      return objDate.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
    },
    handleCreate() {
      if (this.$refs.productItemFormRef) {
        this.$refs.productItemFormRef.handleOpen();
      }
    },
    handlePrint() {
      window.print();
    },
    handleExport(strFormat) {
      handleInfo('Exportar', `Exportación ${strFormat.toUpperCase()} pendiente de implementar`);
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.productItemFormRef) {
          this.$refs.productItemFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'history') {
        if (this.$refs.historyRef) {
          this.$refs.historyRef.handleOpen(row);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(recordId) {
      ProductItemService.delete(recordId)
        .then(() => {
          handleSuccess('Eliminado', 'Registro de inventario eliminado exitosamente');
          this.handleGetData();
        })
        .catch((objError) => handleError('Ocurrió un problema al eliminar el registro', objError));
    }
  }
};
</script>
