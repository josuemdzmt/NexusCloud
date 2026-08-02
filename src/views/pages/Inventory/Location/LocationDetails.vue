<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
        <router-link to="/inventory/location/list" class="hover:text-primary">Almacenes</router-link>
        <i class="ph ph-caret-right text-[10px]"></i>
        <span>Detalles</span>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white border border-border-color rounded-md p-4">
            <div class="flex items-start justify-between mb-3">
              <div class="text-start">
                <h1 class="text-base font-semibold text-title mb-1">{{ strLocationName }}</h1>
                <div class="flex items-center gap-2 mb-3 flex-wrap">
                  <span :class="['text-[11px] px-2 py-0.5 rounded inline-block', strTypeBadgeClass]">{{ strTypeLabel }}</span>
                  <span :class="['text-[11px] px-2 py-0.5 rounded inline-block', strStatusBadgeClass]">{{ strStatusLabel }}</span>
                </div>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <button type="button" title="Editar" @click="handleEdit"
                  class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer">
                  <i class="ph ph-pencil-simple"></i>
                </button>
              </div>
            </div>
            <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
              <div class="flex justify-between">
                <span>Móvil</span>
                <span class="text-gray-900 font-semibold">{{ strYesNo(bIsMobile) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Afecta inventario</span>
                <span class="text-gray-900 font-semibold">{{ strYesNo(bIsInventoryLocation) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Principal</span>
                <span class="text-gray-900 font-semibold">{{ strYesNo(bIsPrimary) }}</span>
              </div>
              <div class="flex justify-between">
                <span>Existencias</span>
                <span class="text-gray-900 font-semibold">{{ numProductItemCount }}</span>
              </div>
              <div class="pt-2 border-t border-border-color space-y-2">
                <div class="text-xs font-semibold text-gray-700 uppercase tracking-wide">Dirección</div>
                <div class="text-gray-900 font-semibold whitespace-pre-line">{{ strAddress }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
              <button
                v-for="(objTab, numIndex) in lstTabs"
                :key="objTab.id"
                type="button"
                :id="`${objTab.id}-tab`"
                role="tab"
                :aria-selected="numIndex === 0"
                :aria-controls="`${objTab.id}-pane`"
                :data-hs-tab="`#${objTab.id}-pane`"
                class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-transparent -mb-px hover:text-gray-900 hs-tab-active:font-semibold hs-tab-active:text-gray-900 hs-tab-active:border-primary focus:outline-hidden"
                :class="{ active: numIndex === 0 }"
              >
                {{ objTab.label }}
              </button>
            </nav>
            <div class="p-4">
              <div id="stock-pane" role="tabpanel" aria-labelledby="stock-tab">
                <ProductItemRelatedList
                  v-if="recordId"
                  :location-id="recordId"
                  @refresh="handleProductItemsRefresh"
                />
              </div>
              <div id="transactions-pane" class="hidden" role="tabpanel" aria-labelledby="transactions-tab">
                <ProductItemTransactionRelatedList
                  v-if="recordId"
                  :location-id="recordId"
                />
              </div>
              <div id="transfers-pane" class="hidden" role="tabpanel" aria-labelledby="transfers-tab">
                <ProductTransferRelatedList
                  v-if="recordId"
                  :location-id="recordId"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <LocationForm ref="locationFormRef" @success="handleFormSuccess" />
    </div>
  </main>
</template>

<script>
import LocationService from '@/services/inventory/LocationService';
import LocationForm from '@/views/pages/Inventory/Location/LocationForm.vue';
import ProductItemRelatedList from '@/views/pages/Inventory/ProductItem/ProductItemRelatedList.vue';
import ProductItemTransactionRelatedList from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionRelatedList.vue';
import ProductTransferRelatedList from '@/views/pages/Inventory/ProductTransfer/ProductTransferRelatedList.vue';
import {
  LOCATION_TYPE_BADGE,
  BOOLEAN_BADGE,
  STATUS_BADGE
} from '@/views/pages/Inventory/Location/LocationConstants';
import { handleError } from '@/utils/toastUtils';

export default {
  name: 'LocationDetails',
  components: {
    LocationForm,
    ProductItemRelatedList,
    ProductItemTransactionRelatedList,
    ProductTransferRelatedList
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 2. Números / IDs
      recordId: null,
      numProductItemCount: 0,

      // 4. Objetos
      objLocation: null,

      // 5. Listas
      lstTabs: [
        { id: 'stock', label: 'Existencias' },
        { id: 'transactions', label: 'Movimientos' },
        { id: 'transfers', label: 'Traspasos' }
      ]
    };
  },
  computed: {
    strLocationName() {
      if (!this.objLocation) return 'Cargando...';
      return this.objLocation.name || '—';
    },
    strLocationType() {
      return this.objLocation?.location_type || this.objLocation?.locationType || '';
    },
    strTypeLabel() {
      return LOCATION_TYPE_BADGE.labelMap[this.strLocationType] || this.strLocationType || '—';
    },
    strTypeBadgeClass() {
      return LOCATION_TYPE_BADGE.classMap[this.strLocationType] || 'bg-secondary-transparent text-secondary';
    },
    strStatus() {
      return this.objLocation?.status || 'Inactive';
    },
    strStatusLabel() {
      return STATUS_BADGE.labelMap[this.strStatus] || this.strStatus || '—';
    },
    strStatusBadgeClass() {
      return STATUS_BADGE.classMap[this.strStatus] || 'bg-secondary-transparent text-secondary';
    },
    bIsMobile() {
      return Boolean(this.objLocation?.is_mobile ?? this.objLocation?.isMobile);
    },
    bIsInventoryLocation() {
      return Boolean(this.objLocation?.is_inventory_location ?? this.objLocation?.isInventoryLocation);
    },
    bIsPrimary() {
      return Boolean(this.objLocation?.is_primary ?? this.objLocation?.isPrimary);
    },
    strAddress() {
      const objAddress = this.objLocation?.address || {};
      const lstParts = [
        objAddress.street,
        objAddress.city,
        objAddress.state,
        objAddress.zip,
        objAddress.country
      ].filter((strPart) => strPart && String(strPart).trim());
      return lstParts.length ? lstParts.join('\n') : '—';
    }
  },
  mounted() {
    this.recordId = this.$route.params.recordId;
    this.handleGetData();
    this.$nextTick(() => {
      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  },
  methods: {
    strYesNo(bValue) {
      return BOOLEAN_BADGE.labelMap[bValue] || (bValue ? 'Sí' : 'No');
    },
    handleGetData() {
      this.bSpinner = true;
      LocationService.getById(this.recordId)
        .then((objResponse) => {
          this.objLocation = objResponse.data || objResponse;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener el almacén', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleProductItemsRefresh(lstItems) {
      this.numProductItemCount = Array.isArray(lstItems) ? lstItems.length : 0;
    },
    handleEdit() {
      if (this.$refs.locationFormRef) {
        this.$refs.locationFormRef.handleOpen(this.recordId);
      }
    },
    handleFormSuccess() {
      this.handleGetData();
    }
  }
};
</script>
