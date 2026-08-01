<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center gap-2 text-sm text-default mb-3">
        <router-link to="/inventory/product-transfer/list" class="hover:text-primary">Traspaso de Stock</router-link>
        <i class="ph ph-caret-right text-[10px]"></i>
        <span>Detalles</span>
      </div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 lg:col-span-4">
          <div class="bg-white border border-border-color rounded-md p-4">
            <div class="flex items-start justify-between mb-3">
              <div class="text-start">
                <h1 class="text-base font-semibold text-title mb-1">{{ strTransferNumber }}</h1>
                <div class="flex items-center gap-2 mb-3">
                  <span :class="['text-[11px] px-2 py-0.5 rounded inline-block', strStatusBadgeClass]">{{ strStatusLabel }}</span>
                </div>
              </div>
              <div class="flex items-center gap-1 shrink-0">
                <button v-if="bCanEdit" type="button" title="Editar" @click="handleEdit"
                  class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer">
                  <i class="ph ph-pencil-simple"></i>
                </button>
                <button v-if="bCanShip" type="button" title="Enviar" @click="handleProcess(TRANSFER_STATUS.IN_TRANSIT)"
                  class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer">
                  <i class="ph ph-truck"></i>
                </button>
                <button v-if="bCanReceive" type="button" title="Recibir" @click="handleProcess(TRANSFER_STATUS.RECEIVED)"
                  class="size-8 rounded-md border border-border-color flex items-center justify-center hover:bg-light cursor-pointer">
                  <i class="ph ph-check"></i>
                </button>
              </div>
            </div>
            <div class="text-sm text-default text-left space-y-3 pt-3 border-t border-border-color">
              <div class="flex justify-between">
                <span>Almacén origen</span>
                <span class="text-gray-900 font-semibold text-right">{{ strSourceLocation }}</span>
              </div>
              <div class="flex justify-between">
                <span>Almacén destino</span>
                <span class="text-gray-900 font-semibold text-right">{{ strDestinationLocation }}</span>
              </div>
              <div class="flex justify-between">
                <span>Fecha de traspaso</span>
                <span class="text-gray-900 font-semibold">{{ strTransferDate }}</span>
              </div>
              <div class="flex justify-between">
                <span>Líneas</span>
                <span class="text-gray-900 font-semibold">{{ numLineCount }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-8">
          <div class="bg-white border border-border-color rounded-md">
            <nav class="flex items-center gap-1 border-b border-border-color flex-wrap" aria-label="Tabs" role="tablist">
              <button type="button" id="lines-tab" role="tab"
                class="px-4 py-3 text-sm text-default whitespace-nowrap border-b-2 border-primary text-gray-900 font-semibold focus:outline-hidden">Líneas de traspaso</button>
            </nav>
            <div class="p-4">
              <div id="lines-pane" role="tabpanel" aria-labelledby="lines-tab">
                <ProductTransferLineItemList v-if="recordId" :product-transfer-id="recordId" :status="strStatus" @refresh="handleLinesRefresh" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductTransferForm ref="productTransferFormRef" @success="handleFormSuccess" />
    </div>
  </main>
</template>

<script>
import ProductTransferService from '@/services/inventory/ProductTransferService';
import ProductTransferForm from '@/views/pages/Inventory/ProductTransfer/ProductTransferForm.vue';
import ProductTransferLineItemList from '@/views/pages/Inventory/ProductTransferLineItem/ProductTransferLineItemList.vue';
import { TRANSFER_STATUS, TRANSFER_STATUS_BADGE } from '@/views/pages/Inventory/ProductTransfer/ProductTransferConstants';
import { handleSuccess, handleError } from '@/utils/toastUtils';

export default {
  name: 'ProductTransferDetails',
  components: {
    ProductTransferForm,
    ProductTransferLineItemList
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 2. Números / IDs
      recordId: null,
      numLineCount: 0,

      // 3. Cadenas
      strStatus: TRANSFER_STATUS.DRAFT,

      // 4. Objetos
      objTransfer: null,
      TRANSFER_STATUS
    };
  },
  computed: {
    strTransferNumber() {
      if (!this.objTransfer) return 'Cargando...';
      return this.objTransfer.transferNumber || this.objTransfer.transfer_number || `#PT${this.objTransfer.id}`;
    },
    strStatusLabel() {
      return TRANSFER_STATUS_BADGE.labelMap[this.strStatus] || this.strStatus || '—';
    },
    strStatusBadgeClass() {
      return TRANSFER_STATUS_BADGE.classMap[this.strStatus] || 'bg-secondary-transparent text-secondary';
    },
    strSourceLocation() {
      return this.objTransfer?.sourceLocation?.name || this.objTransfer?.source_location?.name || '—';
    },
    strDestinationLocation() {
      return this.objTransfer?.destinationLocation?.name || this.objTransfer?.destination_location?.name || '—';
    },
    strTransferDate() {
      const strDate = this.objTransfer?.transferDate || this.objTransfer?.transfer_date;
      if (!strDate) return '—';
      const objDate = new Date(strDate);
      if (Number.isNaN(objDate.getTime())) return String(strDate).slice(0, 10);
      return objDate.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
    },
    bCanEdit() {
      return this.strStatus === TRANSFER_STATUS.DRAFT || this.strStatus === TRANSFER_STATUS.READY;
    },
    bCanShip() {
      return this.strStatus === TRANSFER_STATUS.DRAFT || this.strStatus === TRANSFER_STATUS.READY;
    },
    bCanReceive() {
      return this.strStatus === TRANSFER_STATUS.IN_TRANSIT;
    }
  },
  mounted() {
    this.recordId = this.$route.params.recordId;
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      this.bSpinner = true;
      ProductTransferService.getById(this.recordId, {
        include: 'lineItems.product,sourceLocation,destinationLocation'
      })
        .then((objResponse) => {
          this.objTransfer = objResponse.data || objResponse;
          this.strStatus = this.objTransfer.status || TRANSFER_STATUS.DRAFT;
          const lstLines = this.objTransfer.lineItems || this.objTransfer.line_items || [];
          this.numLineCount = Array.isArray(lstLines) ? lstLines.length : 0;
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener el traspaso', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleLinesRefresh(lstLines) {
      this.numLineCount = Array.isArray(lstLines) ? lstLines.length : 0;
    },
    handleEdit() {
      if (!this.bCanEdit) {
        handleError('No permitido', 'Solo se pueden editar traspasos en borrador o listos');
        return;
      }
      if (this.$refs.productTransferFormRef) {
        this.$refs.productTransferFormRef.handleOpen(this.recordId);
      }
    },
    handleFormSuccess() {
      this.handleGetData();
    },
    handleProcess(strStatus) {
      if (strStatus === TRANSFER_STATUS.IN_TRANSIT) {
        if (!this.bCanShip) {
          handleError('No permitido', 'Solo un borrador o listo puede enviarse a tránsito');
          return;
        }
        if (this.numLineCount < 1) {
          handleError('No permitido', 'Agrega al menos una línea antes de enviar');
          return;
        }
      }
      if (strStatus === TRANSFER_STATUS.RECEIVED && !this.bCanReceive) {
        handleError('No permitido', 'Solo un traspaso en tránsito puede recibirse');
        return;
      }

      this.bSpinner = true;
      ProductTransferService.process(this.recordId, { status: strStatus })
        .then(() => {
          handleSuccess('Éxito', strStatus === TRANSFER_STATUS.RECEIVED ? 'Traspaso recibido' : 'Traspaso enviado');
          this.handleGetData();
        })
        .catch((objError) => handleError('Error al procesar el traspaso', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    }
  }
};
</script>
