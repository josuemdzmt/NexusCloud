<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Métodos de Pago</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstPaymentMethods" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData" 
      />
    </div>

    <!-- Formulario Modal Integrado -->
    <PaymentMethodForm ref="paymentMethodFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import PaymentMethodForm from '@/views/pages/Sales/PaymentMethod/PaymentMethodForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from './PaymentMethodConstants';

export default {
  name: 'PaymentMethodList',
  components: {
    PaymentMethodForm
  },
  data() {
    return {
      bSpinner: false,
      lstPaymentMethods: [],
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
      PaymentMethodService.getAll()
      .then((response) => {
        const lstData = response.data || response;
        this.lstPaymentMethods = lstData;
      })
      .catch((error) => {
        console.error('Error fetching payment methods:', error);
      })
      .finally(() => {
        this.bSpinner = false;
      });
    },
    handleCreate() {
      if (this.$refs.paymentMethodFormRef) {
        this.$refs.paymentMethodFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.paymentMethodFormRef) {
          this.$refs.paymentMethodFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      PaymentMethodService.delete(numId)
      .then(() => {
        handleSuccess('Eliminado', 'Método de pago eliminado exitosamente');
        this.handleGetData();
      })
      .catch((error) => {
        handleError('Error', 'No se pudo eliminar el método de pago');
        console.error('Error deleting payment method:', error);
      });
    }
  }
};
</script>
