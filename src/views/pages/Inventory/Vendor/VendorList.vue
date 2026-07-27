<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Proveedores</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstVendors" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData" 
      />
    </div>

    <!-- Formulario Modal Integrado -->
    <VendorForm ref="vendorFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import VendorService from '@/services/inventory/VendorService';
import VendorForm from '@/views/pages/Inventory/Vendor/VendorForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { IS_PERSON_BADGE, ACTION_BUTTONS } from './VendorConstants';

export default {
  name: 'VendorList',
  components: {
    VendorForm
  },
  data() {
    return {
      bSpinner: false,
      lstVendors: [],
      lstColumns: [
        { label: 'Razón Social / Nombre', fieldName: 'legal_name', type: 'text', sortable: true },
        { label: 'RFC / Tax ID', fieldName: 'tax_id', type: 'text', sortable: true },
        { label: 'Tipo Persona', fieldName: 'is_person', type: 'badge', typeAttributes: IS_PERSON_BADGE },
        { label: 'Límite Crédito', fieldName: 'credit_limit', type: 'currency', sortable: true },
        { label: 'Días Crédito', fieldName: 'credit_days', type: 'text', sortable: true },
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
      VendorService.getAll()
      .then((response) => {
        const lstData = response.data || response;
        // Post-procesar para mostrar nombre completo si es persona
        this.lstVendors = lstData.map(item => {
          if (item.is_person) {
            item.legal_name = `${item.first_name || ''} ${item.last_name || ''} ${item.second_last_name || ''}`.trim();
          }
          return item;
        });
      })
      .catch((error) => {
        console.error('Error fetching vendors:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.vendorFormRef) {
        this.$refs.vendorFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.vendorFormRef) {
          this.$refs.vendorFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      VendorService.delete(numId)
      .then(() => {
        handleSuccess('Eliminado', 'Proveedor eliminado exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar el proveedor');
        console.error('Error deleting vendor:', error);
      });
    }
  }
};
</script>
