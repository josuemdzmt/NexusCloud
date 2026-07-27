<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Monedas</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstCurrencies" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData" 
      />
    </div>

    <!-- Formulario Modal Integrado -->
    <CurrencyForm ref="currencyFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import CurrencyService from '@/services/sales/CurrencyService';
import CurrencyForm from '@/views/pages/Sales/Currency/CurrencyForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from './CurrencyConstants';

export default {
  name: 'CurrencyList',
  components: {
    CurrencyForm
  },
  data() {
    return {
      bSpinner: false,
      lstCurrencies: [],
      lstColumns: [
        { label: 'Nombre', fieldName: 'name', type: 'text', sortable: true },
        { label: 'Código ISO', fieldName: 'iso_code', type: 'text', sortable: true },
        { label: 'Símbolo', fieldName: 'symbol', type: 'text' },
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
      CurrencyService.getAll()
      .then((response) => {
        const lstData = response.data || response;
        this.lstCurrencies = lstData;
      })
      .catch((error) => {
        console.error('Error fetching currencies:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.currencyFormRef) {
        this.$refs.currencyFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.currencyFormRef) {
          this.$refs.currencyFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      CurrencyService.delete(numId)
      .then(() => {
        handleSuccess('Eliminada', 'Moneda eliminada exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar la moneda');
        console.error('Error deleting currency:', error);
      });
    }
  }
};
</script>
