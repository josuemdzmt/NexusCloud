<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Marcas</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstBrands" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData" 
      />
    </div>

    <!-- Formulario Modal Integrado -->
    <BrandForm ref="brandFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import BrandService from '@/services/inventory/BrandService';
import BrandForm from '@/views/pages/Inventory/Brand/BrandForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/Brand/BrandConstants';

export default {
  name: 'BrandList',
  components: {
    BrandForm
  },
  data() {
    return {
      bSpinner: false,
      lstBrands: [],
      lstColumns: [
        { label: 'Marca', fieldName: 'name', type: 'text', sortable: true },
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
    handleGetData() {
      this.bSpinner = true;
      BrandService.getAll()
      .then((response) => {
        const data = response.data || response;
        this.lstBrands = data;
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.brandFormRef) {
        this.$refs.brandFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.brandFormRef) {
          this.$refs.brandFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      BrandService.delete(numId)
      .then(() => {
        handleSuccess('Eliminado', 'Marca eliminada exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar la marca');
        console.error('Error deleting brand:', error);
      });
    }
  }
};
</script>
