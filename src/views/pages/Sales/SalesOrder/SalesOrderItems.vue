<template>
  <div>
    <h2 class="text-lg font-bold text-gray-900 mb-5">Partidas</h2>
    <div class="overflow-x-auto mb-4">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-sm font-bold text-gray-900 border-b border-border-color">
            <th class="text-left py-3 px-2 text-sm font-semibold">Producto</th>
            <th class="text-left py-3 px-2 text-sm font-semibold">Cantidad</th>
            <th class="text-left py-3 px-2 text-sm font-semibold">Precio Unit. ($)</th>
            <th class="text-left py-3 px-2 text-sm font-semibold">Descuento (%)</th>
            <th class="text-left py-3 px-2 text-sm font-semibold">Importe ($)</th>
            <th class="py-3 px-2"></th>
          </tr>
        </thead>
        <tbody id="invoice-items">
          <tr v-for="(objItem, numIndex) in modelValue" :key="objItem.id">
            <td class="py-3 px-2 w-1/3">
              <nx-combobox
                v-model="objItem.pricebookEntryId"
                :options="lstEntryOptions"
                placeholder="Seleccionar"
                class="w-20 sm:w-full text-sm border-border-color focus:border-primary"
                @update:model-value="handleItemProductChange(objItem)">
              </nx-combobox>
            </td>
            <td class="py-3 px-2">
              <div class="flex items-center border border-border-color rounded-md w-max px-2 py-1 bg-white h-[38px]">
                <button type="button" class="text-gray-500 hover:text-gray-700 px-1 cursor-pointer" @click="handleToggleQty(objItem, 1)">
                  <i class="ph ph-plus pointer-events-none"></i>
                </button>
                <input v-model.number="objItem.quantity" type="text" class="w-8 text-center text-sm border-none focus:outline-none focus:ring-0 p-0 bg-transparent" @input="handleEmitChange">
                <button type="button" class="text-gray-500 hover:text-gray-700 px-1 cursor-pointer" @click="handleToggleQty(objItem, -1)">
                  <i class="ph ph-minus pointer-events-none"></i>
                </button>
              </div>
            </td>
            <td class="py-3 px-2">
              <input v-model="objItem.unitPrice" type="text" readonly class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
            </td>
            <td class="py-3 px-2">
              <input v-model.number="objItem.discountPercent" type="text" class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0" @input="handleEmitChange">
            </td>
            <td class="py-3 px-2">
              <input :value="handleGetItemAmount(objItem)" type="text" readonly class="w-full px-3 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0">
            </td>
            <td class="py-3 px-2 text-center">
              <button v-if="numIndex > 0" type="button" class="delete-item-btn size-7 bg-danger-transparent text-danger hover:bg-danger hover:text-white rounded-md inline-flex justify-center items-center cursor-pointer transition-colors" @click="handleRemoveItem(numIndex)">
                <i class="ph ph-trash pointer-events-none"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button type="button" id="add-item-btn" class="btn-sm bg-light border border-border-color text-gray-700 hover:bg-gray-100 cursor-pointer mb-8 rounded-md shadow-sm" :disabled="!bCanAdd" @click="handleAddNewItem">
      <i class="ph ph-plus mr-1"></i> Agregar Nueva
    </button>
  </div>
</template>

<script>
import { handleError } from '@/utils/toastUtils';
import { handleBuildLineItem, handleGetItemAmount } from '@/views/pages/Sales/SalesOrder/salesOrderTotalsUtils';

export default {
  name: 'SalesOrderItems',
  props: {
    modelValue: { type: Array, default: () => [] },
    lstEntries: { type: Array, default: () => [] },
    lstEntryOptions: { type: Array, default: () => [] },
    bCanAdd: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    handleGetItemAmount,
    handleEmitChange() {
      this.$emit('update:modelValue', this.modelValue);
      this.$emit('change');
    },
    handleAddNewItem() {
      if (!this.bCanAdd) {
        handleError('Aviso', 'Selecciona lista de precios y moneda con productos asociados.');
        return;
      }
      const lstItems = [...this.modelValue, handleBuildLineItem()];
      this.$emit('update:modelValue', lstItems);
      this.$emit('change');
    },
    handleItemProductChange(objItem) {
      const objEntry = this.lstEntries.find((objEntry) => objEntry.id === Number(objItem.pricebookEntryId));
      if (objEntry) {
        objItem.productId = objEntry.productId ?? objEntry.product_id;
        objItem.productName = objEntry.product?.name || 'Desconocido';
        objItem.unitPrice = objEntry.unitPrice ?? objEntry.unit_price;
      }
      this.handleEmitChange();
    },
    handleToggleQty(objItem, numDelta) {
      const numCurrentQty = parseInt(objItem.quantity) || 0;
      objItem.quantity = Math.max(1, numCurrentQty + numDelta);
      this.handleEmitChange();
    },
    handleRemoveItem(numIndex) {
      const lstItems = this.modelValue.filter((_, numIdx) => numIdx !== numIndex);
      this.$emit('update:modelValue', lstItems);
      this.$emit('change');
    }
  }
};
</script>
