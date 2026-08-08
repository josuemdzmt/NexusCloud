<template>
  <div>
    <div class="flex justify-end mb-3">
      <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
        <i class="ph ph-plus"></i> {{ strCreateLabel }}
      </button>
    </div>
    <nx-datatable
      key-field="id"
      :data="lstProductItems"
      :columns="lstVisibleColumns"
      :is-loading="bSpinner"
      :show-date-range="false"
      @rowaction="handleRowAction"
      @search="handleSearch"
        @refresh="handleGetData">
      <template #footer>
        <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
      </template>
    </nx-datatable>
    <ProductItemForm ref="productItemFormRef" @success="handleGetData" />
    <ProductItemHistory ref="historyRef" />
  </div>
</template>

<script>
import ProductItemService from '@/services/inventory/ProductItemService';
import ProductItemForm from '@/views/pages/Inventory/ProductItem/ProductItemForm.vue';
import ProductItemHistory from '@/views/pages/Inventory/ProductItem/ProductItemHistory.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { ACTION_BUTTONS, STOCK_STATUS_BADGE, handleResolveStockStatus } from '@/views/pages/Inventory/ProductItem/ProductItemConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'ProductItemRelatedList',
  components: {
    ProductItemForm,
    ProductItemHistory
  },
  props: {
    locationId: { type: [Number, String], default: null },
    productId: { type: [Number, String], default: null }
  },
  emits: ['refresh'],
  data() {
    return {
      ...handleInitPager(),
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
  computed: {
    bFilteredByLocation() {
      return this.locationId != null && this.locationId !== '';
    },
    bFilteredByProduct() {
      return this.productId != null && this.productId !== '';
    },
    strCreateLabel() {
      if (this.bFilteredByLocation || this.bFilteredByProduct) return 'Agregar existencia';
      return 'Nuevo registro';
    },
    lstVisibleColumns() {
      let lstCols = this.lstColumns;
      if (this.bFilteredByLocation) {
        lstCols = lstCols.filter((objCol) => objCol.fieldName !== 'locationName');
      }
      if (this.bFilteredByProduct) {
        lstCols = lstCols.filter((objCol) => objCol.fieldName !== 'productName' && objCol.fieldName !== 'productSku');
      }
      return lstCols;
    }
  },
  watch: {
    locationId() {
      this.handleWatchFilters();
    },
    productId() {
      this.handleWatchFilters();
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

    handleWatchFilters() {
      if (this.bFilteredByLocation && !this.locationId) return;
      if (this.bFilteredByProduct && !this.productId) return;
      this.handleGetData();
    },
    handleGetData() {
      this.bSpinner = true;
      const objExtra = { include: 'product,location' };
      if (this.bFilteredByLocation) {
        objExtra['filter[location_id]'] = this.locationId;
      }
      if (this.bFilteredByProduct) {
        objExtra['filter[product_id]'] = this.productId;
      }
      ProductItemService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch, objExtra)))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];
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
          this.$emit('refresh', this.lstProductItems);
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
      if (!this.$refs.productItemFormRef) return;
      const objContext = {};
      if (this.bFilteredByLocation) objContext.locationId = Number(this.locationId);
      if (this.bFilteredByProduct) objContext.productId = Number(this.productId);
      if (Object.keys(objContext).length) {
        this.$refs.productItemFormRef.handleOpen(null, objContext);
        return;
      }
      this.$refs.productItemFormRef.handleOpen();
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
