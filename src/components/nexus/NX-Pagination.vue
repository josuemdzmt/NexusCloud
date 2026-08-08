<template>
  <div class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-color">
    <div class="flex items-center gap-2">
      <span class="text-sm text-default">Mostrando</span>
      <select v-model.number="numPageSize" @change="handlePageSizeChange" class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28 cursor-pointer">
        <option :value="10">10 / Página</option>
        <option :value="25">25 / Página</option>
        <option :value="50">50 / Página</option>
        <option :value="100">100 / Página</option>
      </select>
    </div>
    <div class="inline-flex gap-1">
      <button type="button" @click="handlePageChange(numCurrentPage - 1)" :disabled="numCurrentPage <= 1" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color bg-light 
        text-dark hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-light disabled:hover:text-dark cursor-pointer disabled:cursor-not-allowed">
        <i class="ph ph-caret-left me-1"></i> Pre
      </button>
      <template v-for="(objItem, numIndex) in lstPageItems" :key="`${objItem.type}-${objItem.value}-${numIndex}`">
        <span v-if="objItem.type === 'ellipsis'" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color bg-light text-dark">...</span>
        <button v-else type="button" @click="handlePageChange(objItem.value)" class="w-7.5 h-7.5 items-center justify-center inline-flex text-xs font-medium rounded-full border border-border-color cursor-pointer" 
          :class="objItem.value === numCurrentPage ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'bg-light text-dark hover:bg-primary hover:text-white'">
          {{ String(objItem.value).padStart(2, '0') }}
        </button>
      </template>
      <button type="button" @click="handlePageChange(numCurrentPage + 1)" :disabled="numCurrentPage >= numTotalPages" class="px-2 py-1.5 inline-flex text-xs font-medium rounded-full border border-border-color 
          bg-light text-dark hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-light disabled:hover:text-dark cursor-pointer disabled:cursor-not-allowed">
        Next <i class="ph ph-caret-right ms-1"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NXPagination',
  props: {
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 10 },
    totalPages: { type: Number, default: 1 }
  },
  emits: ['change'],
  data() {
    return {
      numCurrentPage: this.currentPage || 1,
      numPageSize: this.pageSize || 10
    };
  },
  watch: {
    currentPage(numVal) {
      if (numVal && numVal !== this.numCurrentPage) this.numCurrentPage = numVal;
    },
    pageSize(numVal) {
      if (numVal && numVal !== this.numPageSize) this.numPageSize = numVal;
    }
  },
  computed: {
    numTotalPages() {
      return Math.max(1, Number(this.totalPages) || 1);
    },
    lstPageItems() {
      const numTotal = this.numTotalPages;
      const numCurrent = this.numCurrentPage;
      if (numTotal <= 7) {
        return Array.from({ length: numTotal }, (_, numIndex) => ({ type: 'page', value: numIndex + 1 }));
      }

      const lstPages = new Set([1, numTotal, numCurrent]);
      for (let numOffset = 1; numOffset <= 1; numOffset++) {
        if (numCurrent - numOffset > 1) lstPages.add(numCurrent - numOffset);
        if (numCurrent + numOffset < numTotal) lstPages.add(numCurrent + numOffset);
      }
      if (numCurrent <= 3) {
        lstPages.add(2);
        lstPages.add(3);
        lstPages.add(4);
      }
      if (numCurrent >= numTotal - 2) {
        lstPages.add(numTotal - 1);
        lstPages.add(numTotal - 2);
        lstPages.add(numTotal - 3);
      }

      const lstSorted = Array.from(lstPages).filter((numPage) => numPage >= 1 && numPage <= numTotal).sort((a, b) => a - b);
      const lstItems = [];
      let numPrev = 0;
      lstSorted.forEach((numPage) => {
        if (numPrev && numPage - numPrev > 1) {
          lstItems.push({ type: 'ellipsis', value: `e-${numPrev}` });
        }
        lstItems.push({ type: 'page', value: numPage });
        numPrev = numPage;
      });
      return lstItems;
    }
  },
  methods: {
    handleEmitChange() {
      this.$emit('change', { detail: { currentPage: this.numCurrentPage, pageSize: this.numPageSize } });
    },
    handlePageChange(numPage) {
      if (numPage < 1 || numPage > this.numTotalPages || numPage === this.numCurrentPage) return;
      this.numCurrentPage = numPage;
      this.handleEmitChange();
    },
    handlePageSizeChange() {
      this.numCurrentPage = 1;
      this.handleEmitChange();
    }
  }
};
</script>
