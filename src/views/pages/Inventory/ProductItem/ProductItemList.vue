<template>
  <main>
    <div class="p-3 lg:py-6 lg:px-0">
      <div class="flex flex-wrap items-center justify-between gap-3 mb-3 lg:mb-6">
        <h1 class="text-gray-900 text-xl font-bold mb-0">Inventario</h1>
      </div>
      <ProductItemRelatedList />
    </div>
  </main>
</template>

<script>
import ProductItemRelatedList from '@/views/pages/Inventory/ProductItem/ProductItemRelatedList.vue';

export default {
  name: 'ProductItemList',
  components: {
    ProductItemRelatedList
  }
};
</script>
