<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Bancos</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable
        key-field="id"
        :data="lstBanks"
        :columns="lstColumns"
        :is-loading="bSpinner"
        :show-date-range="false"
        @rowaction="handleRowAction"
        @refresh="handleGetData"
      />
    </div>

    <BankForm ref="bankFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import BankService from '@/services/sales/BankService';
import BankForm from '@/views/pages/Sales/Bank/BankForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from './BankConstants';

export default {
  name: 'BankList',
  components: {
    BankForm
  },
  data() {
    return {
      bSpinner: false,
      lstBanks: [],
      lstColumns: [
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código', fieldName: 'code', type: 'text', sortable: true },
        { label: 'Descripción', fieldName: 'description', type: 'text' },
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
      BankService.getAll()
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          this.lstBanks = Array.isArray(lstData) ? lstData : [];
        })
        .catch((objError) => {
          handleError('Error', 'No se pudieron cargar los bancos', objError);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.bankFormRef) {
        this.$refs.bankFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.bankFormRef) {
          this.$refs.bankFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(recordId) {
      BankService.delete(recordId)
        .then(() => {
          handleSuccess('Eliminado', 'Banco eliminado exitosamente');
          this.handleGetData();
        })
        .catch((objError) => {
          handleError('Error', 'No se pudo eliminar el banco', objError);
        });
    }
  }
};
</script>
