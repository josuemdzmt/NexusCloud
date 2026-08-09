<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Productos</h1>
        <div class="flex items-center gap-2">
          <router-link to="/inventory/product/new" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
            <i class="ph ph-plus"></i> Nuevo registro</router-link>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstProducts" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @search="handleSearch"
        @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </div>
  </main>
</template>

<script>
import ProductService from '@/services/inventory/ProductService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { PRODUCT_STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/Product/ProductConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'ProductList',
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstProducts: [],
      lstColumns: [
        { label: 'Producto', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'SKU', fieldName: 'sku', type: 'text' },
        { label: 'Categoría', fieldName: 'categoryName', type: 'text' },
        { label: 'Marca', fieldName: 'brandName', type: 'text' },
        { label: 'Unidad', fieldName: 'unitName', type: 'text' },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: PRODUCT_STATUS_BADGE },
        { label: 'Costo', fieldName: 'purchasePrice', type: 'currency' },
        { label: 'Acción', type: 'action', typeAttributes: ACTION_BUTTONS }
      ]
    };
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
      this.bSpinner = true;
      ProductService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          this.lstProducts = data.map((objProducto) => ({
            ...objProducto,
            categoryName: objProducto.category ? objProducto.category.name : '',
            brandName: objProducto.brand ? objProducto.brand.name : '',
            unitName: objProducto.unitMeasure ? objProducto.unitMeasure.name : (objProducto.unit ? objProducto.unit : '')
          }));
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener los productos', error);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'detail') {
        this.$router.push(`/inventory/product/${row.id}/detail`);
      } else if (action.name === 'edit') {
        this.$router.push(`/inventory/product/${row.id}/edit`);
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      ProductService.delete(numId)
        .then(() => {
          handleSuccess('Producto eliminado exitosamente');
          this.handleGetData();
        })
        .catch((error) => {
          handleError('Ocurrió un problema al eliminar el producto', error);
        });
    }
  }
};
</script>
