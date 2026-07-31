<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Precios de Productos</h1>
        <div class="flex items-center gap-2">
          <button @click="handleCreate" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
            <i class="ph ph-plus"></i> Nuevo precio
          </button>
        </div>
      </div>
      <nx-datatable 
        key-field="id" 
        :data="lstEntries" 
        :columns="lstColumns" 
        :is-loading="bSpinner" 
        :show-date-range="false" 
        @rowaction="handleRowAction" 
        @refresh="handleGetData"
      />
      <PricebookEntryForm ref="pricebookEntryFormRef" @refresh="handleGetData" />
    </div>
  </main>
</template>

<script>
import PricebookEntryForm from './PricebookEntryForm.vue';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Sales/PricebookEntry/PricebookEntryConstants';

export default {
  name: 'PricebookEntryList',
  components: {
    PricebookEntryForm
  },
  data() {
    return {
      bSpinner: false,
      lstEntries: [],
      lstColumns: [
        { label: 'Producto', fieldName: 'productName', type: 'text' },
        { label: 'Lista de Precios', fieldName: 'pricebookName', type: 'text' },
        { label: 'Moneda', fieldName: 'currencyName', type: 'text' },
        { label: 'Precio', fieldName: 'unitPrice', type: 'currency' },
        { label: 'Estado', fieldName: 'isActive', type: 'badge', typeAttributes: STATUS_BADGE },
        { label: 'Acciones', type: 'action', align: 'right', typeAttributes: ACTION_BUTTONS }
      ]
    };
  },
  mounted() {
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      this.bSpinner = true;
      PricebookEntryService.getAll({ include: 'product,pricebook,currency' })
        .then((response) => {
          const lstEntries = response.data || response;
          this.lstEntries = lstEntries.map(objEntry => ({
            ...objEntry,
            productName: objEntry.product ? objEntry.product.name : 'Desconocido',
            pricebookName: objEntry.pricebook ? objEntry.pricebook.name : 'Desconocido',
            currencyName: objEntry.currency ? objEntry.currency.iso_code : 'N/A'
          }));
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener los precios de productos', error);
        })
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleCreate() {
      if (this.$refs.pricebookEntryFormRef) {
        this.$refs.pricebookEntryFormRef.handleOpen();
      }
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.pricebookEntryFormRef) {
          this.$refs.pricebookEntryFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDelete(row.id);
      }
    },
    handleDelete(numId) {
      PricebookEntryService.delete(numId)
        .then(() => {
          handleSuccess('Precio eliminado exitosamente');
          this.handleGetData();
        })
        .catch((error) => {
          handleError('Ocurrió un problema al eliminar el precio', error);
        });
    }
  }
};
</script>
