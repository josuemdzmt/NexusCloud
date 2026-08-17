<template>
  <main>
    <nx-list-view title="Categorías de Producto" object="product" @create="handleCreate">
      <nx-datatable object="product" key-field="id" :data="lstCategories" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <ProductCategoryForm ref="categoryFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import ProductCategoryService from '@/services/inventory/ProductCategoryService';
import ProductCategoryForm from '@/views/pages/Inventory/ProductCategory/ProductCategoryForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/ProductCategory/ProductCategoryConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'ProductCategoryList',
  components: {
    ProductCategoryForm
  },
  data() {
    return {
      ...handleInitPager(),
      bSpinner: false,
      lstCategories: [],
      lstColumns: [
        { label: 'Categoría', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: STATUS_BADGE },
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
      ProductCategoryService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstCategories = data;
      })
      .catch((error) => {
        console.error('Error fetching product categories:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.categoryFormRef) {
        this.$refs.categoryFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.categoryFormRef) {
          this.$refs.categoryFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      ProductCategoryService.delete(numId)
      .then(() => {
        handleSuccess('Eliminado', 'Categoría eliminada exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar la categoría');
        console.error('Error deleting category:', error);
      });
    }
  }
};
</script>
