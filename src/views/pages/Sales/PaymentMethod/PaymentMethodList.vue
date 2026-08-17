<template>
  <main>
    <nx-list-view title="Métodos de Pago" object="payment_method" @create="handleCreate">
      <nx-datatable object="payment_method" key-field="id" :data="lstPaymentMethods" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="false"
        @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetData">
        <template #footer>
          <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange"/>
        </template>
      </nx-datatable>
    </nx-list-view>

    <!-- Formulario Modal Integrado -->
    <PaymentMethodForm ref="paymentMethodFormRef" @success="handleGetData" />
  </main>
</template>

<script>
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import PaymentMethodForm from '@/views/pages/Sales/PaymentMethod/PaymentMethodForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from './PaymentMethodConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'PaymentMethodList',
  components: {
    PaymentMethodForm
  },
  data() {
    return {
      ...handleInitPager(),
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
      PaymentMethodService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch)))
      .then((response) => {
        const { data, current_page, last_page } = handleParseList(response, this.currentPage);
        this.totalPages = last_page;
        this.currentPage = current_page;

        this.lstPaymentMethods = data;
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
