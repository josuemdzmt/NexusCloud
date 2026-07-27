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
        @refresh="handleGetData"
      />
    </div>
  </main>
</template>

<script>
import ProductService from '@/services/inventory/ProductService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { PRODUCT_STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/Product/ProductConstants';

export default {
  name: 'ProductList',
  data() {
    return {
      bSpinner: false,
      lstProducts: [],
      lstColumns: [
        { label: 'Producto', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'SKU', fieldName: 'sku', type: 'text' },
        { label: 'Categoría', fieldName: 'category', type: 'text' },
        { label: 'Marca', fieldName: 'brand', type: 'text' },
        { label: 'Unidad', fieldName: 'unit', type: 'text' },
        { label: 'Cantidad', fieldName: 'quantity', type: 'number' },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: PRODUCT_STATUS_BADGE },
        { label: 'Precio de Venta', fieldName: 'sellingPrice', type: 'currency' },
        { label: 'Precio de Compra', fieldName: 'purchasePrice', type: 'currency' },
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
      ProductService.getAll()
        .then((data) => {
          this.lstProducts = data.data || data;
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        this.$router.push(`/inventory/product/${row.id}/edit`);
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      ProductService.delete(numId)
        .then(() => {
          this.handleGetData();
        })
        .catch((error) => console.error('Error deleting product:', error));
    }
  }
};
</script>
