<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
        <router-link to="/sales/pricebook/list" class="hover:text-primary">Listas de Precios</router-link> 
        <i class="ph ph-caret-right text-[10px]"></i> 
        <span>Detalles</span>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white border border-border-color rounded-md p-4">
            <div class="flex items-start justify-between mb-3">
              <div class="text-start"> 
                <h1 class="text-base font-semibold text-title mb-1">{{ objPricebook?.name || 'Cargando...' }}</h1>
                <div class="flex items-center gap-2 mb-3">
                  <span v-if="objPricebook?.isActive" class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded inline-block">Activo</span> 
                  <span v-else class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded inline-block">Inactivo</span> 
                  <span v-if="objPricebook?.isStandard" class="text-[11px] bg-primary-transparent text-primary px-2 py-0.5 rounded inline-block">Estándar</span> 
                </div>
              </div>
              <button @click="handleEdit" class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer shrink-0" title="Editar"><i class="ph ph-pencil-simple"></i></button>
            </div>
            <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
              <div class="flex justify-between">
                <span>Descripción</span>
                <span class="text-gray-900 font-semibold text-right max-w-[60%]">{{ objPricebook?.description || 'Sin descripción' }}</span>
              </div>
              <div class="flex justify-between">
                <span>Creado en</span>
                <span class="text-gray-900 font-semibold">{{ objPricebook?.created_at ? new Date(objPricebook.created_at).toLocaleDateString() : '' }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist">
              <button type="button" class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-primary text-gray-900 font-semibold focus:outline-hidden" id="products-tab" role="tab">Productos Asociados</button>
            </nav>
            <div class="p-4">
              <div id="products-pane" role="tabpanel" aria-labelledby="products-tab">
                <div class="flex justify-end mb-3">
                  <button @click="handleCreateEntry" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
                    <i class="ph ph-plus"></i> Agregar Producto
                  </button>
                </div>
                <nx-datatable 
                  key-field="id" 
                  :data="lstEntries" 
                  :columns="lstColumns" 
                  :is-loading="bSpinnerEntries" 
                  :show-date-range="false" 
                  @rowaction="handleRowAction" 
                  @refresh="handleGetEntries"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PricebookForm ref="pricebookFormRef" @refresh="handleGetData" />
      <PricebookEntryForm ref="pricebookEntryFormRef" @refresh="handleGetEntries" />
    </div>
  </main>
</template>

<script>
import PricebookForm from '@/views/pages/Sales/Pricebook/PricebookForm.vue';
import PricebookEntryForm from '@/views/pages/Sales/PricebookEntry/PricebookEntryForm.vue';
import PricebookService from '@/services/sales/PricebookService';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { STATUS_BADGE, ENTRY_ACTION_BUTTONS } from '@/views/pages/Sales/Pricebook/PricebookConstants';

export default {
  name: 'PricebookDetails',
  components: {
    PricebookForm,
    PricebookEntryForm
  },
  data() {
    return {
      bSpinnerInfo: false,
      bSpinnerEntries: false,
      objPricebook: null,
      lstEntries: [],
      lstColumns: [
        { label: 'Producto', fieldName: 'productName', type: 'text', sortable: true },
        { label: 'Precio', fieldName: 'unitPrice', type: 'currency' },
        { label: 'Estado', fieldName: 'isActive', type: 'badge', typeAttributes: STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ENTRY_ACTION_BUTTONS }
      ]
    };
  },
  mounted() {
    this.handleGetData();
    this.handleGetEntries();
  },
  methods: {
    handleGetData() {
      this.bSpinnerInfo = true;
      PricebookService.getById(this.$route.params.recordId)
        .then((data) => {
          this.objPricebook = data.data || data;
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener los detalles de la lista de precios', error);
        })
        .finally(() => {
          this.bSpinnerInfo = false;
        });
    },
    handleGetEntries() {
      this.bSpinnerEntries = true;
      PricebookEntryService.getAll({
        'filter[pricebook_id]': this.$route.params.recordId,
        include: 'product'
      })
        .then((data) => {
          const lstEntries = data.data || data;
          this.lstEntries = lstEntries.map(objEntry => ({
            ...objEntry,
            productName: objEntry.product ? objEntry.product.name : 'Desconocido'
          }));
        })
        .catch((error) => {
          handleError('Ocurrió un problema al obtener los productos de la lista', error);
        })
        .finally(() => {
          this.bSpinnerEntries = false;
        });
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.pricebookEntryFormRef) {
          this.$refs.pricebookEntryFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'delete') {
        this.handleDeleteEntry(row.id);
      }
    },
    handleDeleteEntry(numId) {
      PricebookEntryService.delete(numId)
        .then(() => {
          handleSuccess('Producto removido exitosamente');
          this.handleGetEntries();
        })
        .catch((error) => {
          handleError('Ocurrió un problema al remover el producto', error);
        });
    },
    handleCreateEntry() {
      if (this.$refs.pricebookEntryFormRef) {
        this.$refs.pricebookEntryFormRef.handleOpen(null, this.objPricebook.id);
      }
    },
    handleEdit() {
      if (this.$refs.pricebookFormRef && this.objPricebook) {
        this.$refs.pricebookFormRef.handleOpen(this.objPricebook.id);
      }
    }
  }
};
</script>
