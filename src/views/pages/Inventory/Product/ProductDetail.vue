<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
        <router-link to="/inventory/product/list" class="hover:text-primary">Productos</router-link>
        <i class="ph ph-caret-right text-[10px]"></i>
        <span>Detalles</span>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white border border-border-color rounded-md p-4">
            <div class="flex items-start justify-between mb-3">
              <div class="text-start">
                <h1 class="text-base font-semibold text-title mb-1">{{ objProduct?.name || 'Cargando...' }}</h1>
                <div class="flex items-center gap-2 mb-3">
                  <span v-if="objProduct?.status === 'Active'" class="text-[11px] bg-success-transparent text-success px-2 py-0.5 rounded inline-block">Activo</span>
                  <span v-else class="text-[11px] bg-danger-transparent text-danger px-2 py-0.5 rounded inline-block">Inactivo</span>
                </div>
              </div>
              <button type="button" @click="handleEdit" class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer shrink-0" title="Editar"><i class="ph ph-pencil-simple"></i></button>
            </div>
            <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
              <div class="flex justify-between">
                <span>SKU</span>
                <span class="text-gray-900 font-semibold text-right">{{ objProduct?.sku || '—' }}</span>
              </div>
              <div class="flex justify-between">
                <span>Código</span>
                <span class="text-gray-900 font-semibold text-right">{{ objProduct?.code || '—' }}</span>
              </div>
              <div class="flex justify-between">
                <span>Categoría</span>
                <span class="text-gray-900 font-semibold text-right">{{ strCategoryName }}</span>
              </div>
              <div class="flex justify-between">
                <span>Marca</span>
                <span class="text-gray-900 font-semibold text-right">{{ strBrandName }}</span>
              </div>
              <div class="flex justify-between">
                <span>Costo</span>
                <span class="text-gray-900 font-semibold text-right">${{ handleFormatAmount(objProduct?.purchasePrice) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Descripción</span>
                <span class="text-gray-900 font-semibold text-right max-w-[60%]">{{ objProduct?.description || 'Sin descripción' }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nx-tabset v-model="strActiveTab">
              <nx-tab label="Listas de Precios" value="pricebooks">
                <div class="flex justify-end mb-3">
                  <button type="button" @click="handleCreateEntry" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer">
                    <i class="ph ph-plus"></i> Agregar Precio
                  </button>
                </div>
                <nx-datatable key-field="id" :data="lstEntries" :columns="lstColumns" :is-loading="bSpinnerEntries" :show-date-range="false"
                  @rowaction="handleRowAction" @search="handleSearch" @refresh="handleGetEntries">
                  <template #footer>
                    <nx-pagination :current-page="currentPage" :page-size="pageSize" :total-pages="totalPages" @change="handlePageChange" />
                  </template>
                </nx-datatable>
              </nx-tab>
              <nx-tab label="Existencias" value="stock">
                <ProductItemRelatedList v-if="recordId" :product-id="recordId" />
              </nx-tab>
              <nx-tab label="Movimientos" value="transactions">
                <ProductItemTransactionRelatedList v-if="recordId" :product-id="recordId" />
              </nx-tab>
              <nx-tab label="Traspasos" value="transfers">
                <ProductTransferLineItemRelatedList v-if="recordId" :product-id="recordId" />
              </nx-tab>
            </nx-tabset>
          </div>
        </div>
      </div>
      <PricebookEntryForm ref="pricebookEntryFormRef" @refresh="handleGetEntries" />
    </div>
  </main>
</template>

<script>
import ProductService from '@/services/inventory/ProductService';
import PricebookEntryService from '@/services/sales/PricebookEntryService';
import PricebookEntryForm from '@/views/pages/Sales/PricebookEntry/PricebookEntryForm.vue';
import ProductItemRelatedList from '@/views/pages/Inventory/ProductItem/ProductItemRelatedList.vue';
import ProductItemTransactionRelatedList from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionRelatedList.vue';
import ProductTransferLineItemRelatedList from '@/views/pages/Inventory/ProductTransferLineItem/ProductTransferLineItemRelatedList.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { ENTRY_ACTION_BUTTONS } from '@/views/pages/Sales/Pricebook/PricebookConstants';
import { ENTRY_STATUS_BADGE } from '@/views/pages/Inventory/Product/ProductConstants';
import { handleInitPager, handlePagerParams, handleSearchParams, handleParseList } from '@/utils/listPaginationUtils';

export default {
  name: 'ProductDetail',
  components: {
    PricebookEntryForm,
    ProductItemRelatedList,
    ProductItemTransactionRelatedList,
    ProductTransferLineItemRelatedList
  },
  data() {
    return {
      ...handleInitPager(),
      // 1. Booleanos
      bSpinnerInfo: false,
      bSpinnerEntries: false,

      // 2. Números / IDs
      recordId: null,

      // 3. Strings
      strActiveTab: 'pricebooks',

      // 4. Objetos
      objProduct: null,

      // 5. Listas
      lstEntries: [],
      lstColumns: [
        { label: 'Lista de Precios', fieldName: 'pricebookName', type: 'text', sortable: true },
        { label: 'Moneda', fieldName: 'currencyLabel', type: 'text', sortable: true },
        { label: 'Precio', fieldName: 'unitPrice', type: 'currency' },
        { label: 'Estado', fieldName: 'isActive', type: 'badge', typeAttributes: ENTRY_STATUS_BADGE },
        { label: 'Acción', type: 'action', typeAttributes: ENTRY_ACTION_BUTTONS }
      ]
    };
  },
  computed: {
    strCategoryName() {
      return this.objProduct?.category?.name || '—';
    },
    strBrandName() {
      return this.objProduct?.brand?.name || '—';
    }
  },
  mounted() {
    this.recordId = this.$route.params.recordId;
    this.handleGetData();
    this.handleGetEntries();
  },
  methods: {
    handlePageChange(objEvent) {
      this.currentPage = objEvent.detail.currentPage;
      this.pageSize = objEvent.detail.pageSize;
      this.handleGetEntries();
    },
    handleSearch(objEvent) {
      this.strSearch = objEvent.detail.value || '';
      this.currentPage = 1;
      this.handleGetEntries();
    },

    handleGetData() {
      this.bSpinnerInfo = true;
      ProductService.getById(this.recordId, { include: 'category,brand' })
        .then((objResponse) => {
          this.objProduct = objResponse.data || objResponse;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener los detalles del producto', objError))
        .finally(() => {
          this.bSpinnerInfo = false;
        });
    },
    handleGetEntries() {
      if (!this.recordId) return;

      this.bSpinnerEntries = true;
      PricebookEntryService.getAll(handlePagerParams(this.currentPage, this.pageSize, handleSearchParams(this.strSearch, {
        'filter[product_id]': this.recordId,
        include: 'pricebook,currency'
      })))
        .then((objResponse) => {
          const { data, current_page, last_page } = handleParseList(objResponse, this.currentPage);
          this.totalPages = last_page;
          this.currentPage = current_page;

          const lstRaw = Array.isArray(data) ? data : [];

          this.lstEntries = lstRaw
            .filter((objEntry) => {
              const entryProductId = objEntry.productId ?? objEntry.product_id;
              return !entryProductId || Number(entryProductId) === Number(this.recordId);
            })
            .map((objEntry) => {
              const objCurrency = objEntry.currency || {};
              return {
                ...objEntry,
                pricebookName: objEntry.pricebook?.name || 'Desconocido',
                currencyLabel: objCurrency.iso_code || objCurrency.code || objCurrency.name || 'N/A',
                isActive: Boolean(objEntry.isActive ?? objEntry.is_active)
              };
            });
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener los precios del producto', objError))
        .finally(() => {
          this.bSpinnerEntries = false;
        });
    },
    handleCreateEntry() {
      const numProductId = this.objProduct?.id || this.recordId;
      if (!numProductId || !this.$refs.pricebookEntryFormRef) return;
      this.$refs.pricebookEntryFormRef.handleOpen(null, { productId: Number(numProductId) });
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'edit') {
        if (this.$refs.pricebookEntryFormRef) {
          this.$refs.pricebookEntryFormRef.handleOpen(row.id, { productId: Number(this.recordId) });
        }
      } else if (action.name === 'delete') {
        this.handleDeleteEntry(row.id);
      }
    },
    handleDeleteEntry(numId) {
      PricebookEntryService.delete(numId)
        .then(() => {
          handleSuccess('Precio eliminado exitosamente');
          this.handleGetEntries();
        })
        .catch((objError) => handleError('Ocurrió un problema al eliminar el precio', objError));
    },
    handleEdit() {
      const numId = this.objProduct?.id || this.recordId;
      if (numId) {
        this.$router.push(`/inventory/product/${numId}/edit`);
      }
    },
    handleFormatAmount(fltValue) {
      const fltAmount = parseFloat(fltValue) || 0;
      return fltAmount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
};
</script>
