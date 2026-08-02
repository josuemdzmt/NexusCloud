<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Traspaso de Stock</h1>
      </div>
      <ProductTransferRelatedList />
    </div>
  </main>
</template>

<script>
import ProductTransferRelatedList from '@/views/pages/Inventory/ProductTransfer/ProductTransferRelatedList.vue';

export default {
  name: 'ProductTransferList',
  components: {
    ProductTransferRelatedList
  }
};
</script>
