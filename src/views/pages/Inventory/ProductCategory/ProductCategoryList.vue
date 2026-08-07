<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Categorías de Producto</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstCategories" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </div>

    <!-- Formulario Modal Integrado -->
    <ProductCategoryForm ref="categoryFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import ProductCategoryService from '@/services/inventory/ProductCategoryService';
import ProductCategoryForm from '@/views/pages/Inventory/ProductCategory/ProductCategoryForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/ProductCategory/ProductCategoryConstants';
import { handleInitPager, handlePagerParams, handleParseList } from '@/utils/listPaginationUtils';

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
    handleGetData() {
      this.bSpinner = true;
      ProductCategoryService.getAll(handlePagerParams(this.currentPage, this.pageSize))
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
