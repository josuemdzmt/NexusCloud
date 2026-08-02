<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Ajuste de Stock</h1>
      </div>
      <ProductItemTransactionRelatedList />
    </div>
  </main>
</template>

<script>
import ProductItemTransactionRelatedList from '@/views/pages/Inventory/ProductItemTransaction/ProductItemTransactionRelatedList.vue';

export default {
  name: 'ProductItemTransactionList',
  components: {
    ProductItemTransactionRelatedList
  }
};
</script>
