<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Traspaso de Stock</h1>
        <div class="flex items-center gap-2">
          <button type="button" class="btn-sm bg-dark text-white border border-dark inline-flex items-center gap-2 hover:bg-primary-hover cursor-pointer" @click="handleCreate">
            <i class="ph ph-plus"></i> Nuevo registro
          </button>
        </div>
      </div>

      <nx-datatable key-field="id" :data="lstTransfers" :columns="lstColumns" :is-loading="bSpinner" :show-date-range="true" @rowaction="handleRowAction" @refresh="handleGetData" />

      <ProductTransferForm ref="productTransferFormRef" @success="handleFormSuccess" />
    </div>
  </main>
</template>

<script>
import ProductTransferService from '@/services/inventory/ProductTransferService';
import ProductTransferForm from '@/views/pages/Inventory/ProductTransfer/ProductTransferForm.vue';
import { handleSuccess, handleError } from '@/utils/toastUtils';
import { TRANSFER_STATUS, TRANSFER_STATUS_BADGE, ACTION_BUTTONS } from '@/views/pages/Inventory/ProductTransfer/ProductTransferConstants';

export default {
  name: 'ProductTransferList',
  components: {
    ProductTransferForm
  },
  data() {
    return {
      // 1. Booleanos
      bSpinner: false,

      // 5. Listas
      lstTransfers: [],
      lstColumns: [
        { label: 'Folio', fieldName: 'transferCode', type: 'text', sortable: true },
        { label: 'Almacén origen', fieldName: 'sourceLocationName', type: 'text', sortable: true },
        { label: 'Almacén destino', fieldName: 'destinationLocationName', type: 'text', sortable: true },
        { label: 'Fecha traspaso', fieldName: 'transferDateLabel', type: 'text', sortable: true },
        { label: 'Líneas', fieldName: 'lineCount', type: 'number', sortable: true },
        { label: 'Estado', fieldName: 'status', type: 'badge', typeAttributes: TRANSFER_STATUS_BADGE },
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
      ProductTransferService.getAll({
        include: 'lineItems,sourceLocation,destinationLocation',
        per_page: 200
      })
        .then((objResponse) => {
          const lstData = objResponse.data || objResponse;
          const lstRaw = Array.isArray(lstData) ? lstData : [];
          this.lstTransfers = lstRaw.map((objTransfer) => {
            const lstLines = objTransfer.lineItems || objTransfer.line_items || [];
            return {
              ...objTransfer,
              transferCode: objTransfer.transferNumber || objTransfer.transfer_number || `#PT${objTransfer.id}`,
              lineCount: Array.isArray(lstLines) ? lstLines.length : 0,
              sourceLocationName:
                objTransfer.sourceLocation?.name || objTransfer.source_location?.name || '—',
              destinationLocationName:
                objTransfer.destinationLocation?.name || objTransfer.destination_location?.name || '—',
              transferDateLabel: this.handleFormatDate(objTransfer.transferDate || objTransfer.transfer_date)
            };
          });
        })
        .catch((objError) => handleError('Ocurrió un problema al obtener los traspasos', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleFormatDate(strDate) {
      if (!strDate) return '—';
      const objDate = new Date(strDate);
      if (Number.isNaN(objDate.getTime())) return strDate;
      return objDate.toLocaleDateString('es-MX', { day: '2-digit', month: 'short', year: 'numeric' });
    },
    handleCreate() {
      if (this.$refs.productTransferFormRef) {
        this.$refs.productTransferFormRef.handleOpen();
      }
    },
    handleFormSuccess(objPayload) {
      if (objPayload?.created && objPayload?.id) {
        this.$router.push(`/inventory/product-transfer/${objPayload.id}/details`);
        return;
      }
      this.handleGetData();
    },
    handleView(objRow) {
      this.$router.push(`/inventory/product-transfer/${objRow.id}/details`);
    },
    handleRowAction(objEvent) {
      const { action, row } = objEvent.detail;
      if (action.name === 'view') {
        this.handleView(row);
      } else if (action.name === 'edit') {
        if (row.status !== TRANSFER_STATUS.DRAFT && row.status !== TRANSFER_STATUS.READY) {
          handleError('No permitido', 'Solo se pueden editar traspasos en borrador o listos');
          return;
        }
        if (this.$refs.productTransferFormRef) {
          this.$refs.productTransferFormRef.handleOpen(row.id);
        }
      } else if (action.name === 'ship') {
        this.handleProcess(row, TRANSFER_STATUS.IN_TRANSIT);
      } else if (action.name === 'receive') {
        this.handleProcess(row, TRANSFER_STATUS.RECEIVED);
      } else if (action.name === 'delete') {
        this.handleDelete(row);
      }
    },
    handleProcess(objRow, strStatus) {
      const bCanShip =
        strStatus === TRANSFER_STATUS.IN_TRANSIT &&
        (objRow.status === TRANSFER_STATUS.DRAFT || objRow.status === TRANSFER_STATUS.READY);
      if (strStatus === TRANSFER_STATUS.IN_TRANSIT && !bCanShip) {
        handleError('No permitido', 'Solo un borrador o listo puede enviarse a tránsito');
        return;
      }
      if (strStatus === TRANSFER_STATUS.IN_TRANSIT && (!objRow.lineCount || objRow.lineCount < 1)) {
        handleError('No permitido', 'Agrega al menos una línea antes de enviar');
        return;
      }
      if (strStatus === TRANSFER_STATUS.RECEIVED && objRow.status !== TRANSFER_STATUS.IN_TRANSIT) {
        handleError('No permitido', 'Solo un traspaso en tránsito puede recibirse');
        return;
      }

      this.bSpinner = true;
      ProductTransferService.process(objRow.id, { status: strStatus })
        .then(() => {
          handleSuccess('Éxito', strStatus === TRANSFER_STATUS.RECEIVED ? 'Traspaso recibido' : 'Traspaso enviado');
          this.handleGetData();
        })
        .catch((objError) => handleError('Error al procesar el traspaso', objError))
        .finally(() => {
          this.bSpinner = false;
        });
    },
    handleDelete(objRow) {
      if (objRow.status !== TRANSFER_STATUS.DRAFT) {
        handleError('No permitido', 'Solo se pueden eliminar traspasos en borrador');
        return;
      }
      ProductTransferService.delete(objRow.id)
        .then(() => {
          handleSuccess('Eliminado', 'Traspaso eliminado exitosamente');
          this.handleGetData();
        })
        .catch((objError) => handleError('Ocurrió un problema al eliminar el traspaso', objError));
    }
  }
};
</script>
