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
    <div class="flex items-center gap-1">
      <button type="button" @click="handlePageChange(numCurrentPage - 1)" :disabled="numCurrentPage === 1"
        class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light disabled:opacity-50 cursor-pointer">
        <i class="ph ph-caret-left text-sm"></i>
      </button>
      <button type="button" v-for="numPage in numTotalPages" :key="numPage" @click="handlePageChange(numPage)"
        class="size-7 rounded-md text-sm flex items-center justify-center cursor-pointer"
        :class="numPage === numCurrentPage ? 'bg-dark text-white' : 'text-gray-900 hover:bg-light'">
        {{ numPage }}
      </button>
      <button type="button" @click="handlePageChange(numCurrentPage + 1)" :disabled="numCurrentPage === numTotalPages || numTotalPages === 0"
        class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light disabled:opacity-50 cursor-pointer">
        <i class="ph ph-caret-right text-sm"></i>
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
    }
  },
  methods: {
    handleEmitChange() {
      this.$emit('change', { detail: { currentPage: this.numCurrentPage, pageSize: this.numPageSize } });
    },
    handlePageChange(numPage) {
      if (numPage < 1 || numPage > this.numTotalPages) return;
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
