<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Sucursales</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstBranches" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData" 
      />
    </div>

    <!-- Formulario Modal Integrado -->
    <BranchForm ref="branchFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import BranchService from '@/services/system/BranchService';
import BranchForm from './BranchForm.vue';
import { STATUS_BADGE, ACTION_BUTTONS } from './BranchConstants';

export default {
  name: 'BranchList',
  components: {
    BranchForm
  },
  data() {
    return {
      bSpinner: false,
      lstBranches: [],
      lstColumns: [
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Teléfono', fieldName: 'phone', type: 'text', sortable: true },
        { label: 'Correo', fieldName: 'email', type: 'text', sortable: true },
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
      BranchService.getAll()
      .then((response) => {
        this.lstBranches = response.data || response;
      })
      .catch((error) => {
        console.error('Error fetching branches:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.branchFormRef) {
        this.$refs.branchFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.branchFormRef) {
          this.$refs.branchFormRef.handleOpen(row.id);
        }
      }
    }
  }
};
</script>
