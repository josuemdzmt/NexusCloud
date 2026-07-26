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
      <nx-datatable key-field="id" :data="lstCategories" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false" @rowaction="handleRowAction" @refresh="handleGetData" />
    </div>

    <!-- Formulario Modal Integrado -->
    <product-category-form ref="categoryFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import ProductCategoryService from '@/services/inventory/ProductCategoryService';
import ProductCategoryForm from '@/views/pages/Inventory/ProductCategory/ProductCategoryForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';

export default {
  name: 'ProductCategoryList',
  components: {
    ProductCategoryForm
  },
  data() {
    return {
      bSpinner: false,
      lstCategories: [],
      lstColumns: [
        { label: 'Categoría', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        {
          label: 'Estado',
          fieldName: 'status',
          type: 'badge',
          typeAttributes: {
            classMap: {
              Active: 'bg-success-transparent text-success',
              Inactive: 'bg-danger-transparent text-danger'
            }
          }
        },
        {
          label: 'Acción',
          type: 'action',
          typeAttributes: {
            rowActions: [
              { label: 'Editar', name: 'edit', icon: 'icon-pencil-line' },
              { label: 'Eliminar', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' }
            ]
          }
        }
      ]
    };
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      this.bSpinner = true;
      ProductCategoryService.getAll()
      .then((response) => {
        const data = response.data || response;
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
