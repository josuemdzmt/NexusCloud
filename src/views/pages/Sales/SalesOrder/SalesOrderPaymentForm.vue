<template>
  <nx-modal-form ref="modalFormRef" id="sales-order-payment-modal" title="Registrar Abono"
    size="md" @submit="handleSubmit" @cancel="handleCancel">
    <template #default>
      <div class="grid grid-cols-1 gap-4" v-if="objOrder">
        <!-- Detalle del Saldo Destacado -->
        <div class="bg-light p-3 rounded-md flex justify-between items-center text-sm">
          <div>
            <span class="text-default block text-xs">Total de la Orden</span>
            <span class="text-gray-900 font-bold">{{ objOrder.totalAmount | currency }}</span>
          </div>
          <div class="text-right">
            <span class="text-danger block text-xs font-semibold">Saldo Pendiente</span>
            <span class="text-danger font-extrabold text-base">{{ objOrder.balanceAmount | currency }}</span>
          </div>
        </div>

        <!-- Monto del Abono -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Monto a Abonar <span class="text-danger">*</span></label>
          <input v-model.number="objForm.amount" type="number" min="0.01" :max="objOrder.balanceAmount" step="0.01" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" required />
          <span class="text-[10px] text-default mt-1 block">No puede exceder el saldo restante de la orden.</span>
        </div>

        <!-- Método de Pago -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Método de Pago <span class="text-danger">*</span></label>
          <nx-combobox
            v-model="objForm.paymentMethodId"
            :options="lstPaymentMethodOptions"
            placeholder="Seleccionar Método..."
          />
        </div>

        <!-- Fecha del Abono -->
        <div>
          <label class="text-sm font-semibold text-gray-900 mb-1 block">Fecha del Pago <span class="text-danger">*</span></label>
          <input v-model="objForm.paymentDate" type="date" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none" required />
        </div>
      </div>
    </template>
  </nx-modal-form>
</template>

<script>
import PaymentMethodService from '@/services/sales/PaymentMethodService';
import SalesOrderPaymentService from '@/services/sales/SalesOrderPaymentService';
import { handleSuccess, handleError } from '@/utils/toastUtils';

export default {
  name: 'SalesOrderPaymentForm',
  emits: ['refresh'],
  data() {
    return {
      objOrder: null,
      lstPaymentMethodOptions: [],
      objForm: {
        salesOrderId: null,
        amount: 0.00,
        paymentDate: new Date().toISOString().substr(0, 10),
        paymentMethodId: null,
        currencyId: null
      }
    };
  },
  mounted() {
    this.handleLoadPaymentMethods();
  },
  methods: {
    handleLoadPaymentMethods() {
      PaymentMethodService.getAll({ per_page: 100 })
        .then((data) => {
          const lstMethods = data.data || data;
          this.lstPaymentMethodOptions = lstMethods.map(method => ({
            label: method.name,
            value: method.id
          }));
        });
    },
    handleOpen(objOrder) {
      this.objOrder = objOrder;
      this.objForm = {
        salesOrderId: objOrder.id,
        amount: parseFloat(objOrder.balanceAmount),
        paymentDate: new Date().toISOString().substr(0, 10),
        paymentMethodId: this.lstPaymentMethodOptions.length > 0 ? this.lstPaymentMethodOptions[0].value : null,
        currencyId: objOrder.currencyId
      };

      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleOpen();
      }
    },
    handleSubmit() {
      if (this.objForm.amount <= 0 || this.objForm.amount > parseFloat(this.objOrder.balanceAmount)) {
        handleError('Error de Validación', 'El monto a abonar debe ser mayor a 0 y no puede exceder el saldo pendiente.');
        return;
      }

      // El API espera una fecha formateada con hora
      const payload = {
        ...this.objForm,
        paymentDate: `${this.objForm.paymentDate} 12:00:00`
      };

      SalesOrderPaymentService.create(payload)
        .then(() => {
          handleSuccess('Abono registrado exitosamente');
          this.$emit('refresh');
          if (this.$refs.modalFormRef) {
            this.$refs.modalFormRef.handleClose();
          }
        })
        .catch((error) => {
          handleError('Ocurrió un problema al registrar el abono', error);
        });
    },
    handleCancel() {
      if (this.$refs.modalFormRef) {
        this.$refs.modalFormRef.handleClose();
      }
    }
  }
};
</script>
