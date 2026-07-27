<template>
  <div class="bg-white border border-border-color rounded-md p-4">
    <!-- Toolbar: Search, Date Picker, Filters, Actions -->
    <div v-if="showSearch || showDateRange || showFilters" class="flex flex-wrap items-center justify-between gap-3 mb-3">
      <div class="flex items-center gap-2 flex-wrap">
        <!-- Search Input -->
        <div v-if="showSearch" class="relative w-64 search-input">
          <i class="ph ph-magnifying-glass absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm"></i>
          <input type="text" v-model="strSearch" @input="handleSearch" class="w-full px-3 pe-8 py-2 h-7 text-[12px]! border border-border-color rounded-lg bg-white focus:outline-none focus:ring-0" placeholder="Buscar" />
        </div>
        <!-- Date Range Picker -->
        <div v-if="showDateRange" class="relative rangepicker-input w-[220px] h-[28px] leading-none">
          <span class="absolute inset-y-0 left-0 flex items-center px-3 text-muted-foreground text-dark text-xs!">
            <i class="icon-calendar"></i>
          </span>
          <a-range-picker v-model:value="objRangeDate" @change="handleDateRangeChange" type="text"
            class="form-input text-xs! h-[28px] inline-block w-full bg-light border-border-color rounded-md focus:ring-0 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-border-color pl-8! ps-8!"
            data-provider="flatpickr" data-date-format="d M y" data-range-date="true" id="picker" />
        </div>
      </div>

      <!-- Header Action Buttons & Filters -->
      <div class="flex items-center flex-wrap gap-2">
        <slot name="headerActions">
          <!-- Dropdown Filter -->
          <div v-if="showFilters" class="hs-dropdown [--placement:bottom-left] [--auto-close:inside] relative inline-flex">
            <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white"
              aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
            </button>
            <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1"
              role="menu" aria-orientation="vertical" tabindex="-1">
              <div class="p-2 space-y-1">
                <label class="flex items-center gap-2 text-sm cursor-pointer px-2 py-1.5 rounded-md hover:bg-light hover:text-gray-900 focus:outline-hidden focus:bg-white">
                  <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0" checked /> Filter Sample
                </label>
                <div class="flex items-center justify-between gap-2 mt-3">
                  <button type="button" class="btn-sm bg-white w-full border border-border-color text-gray-900 flex items-center justify-center hover:bg-light cursor-pointer">Cancel</button>
                  <button type="button" class="btn-sm bg-dark w-full border border-dark text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white cursor-pointer">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </slot>
        <button @click="handleRefresh" class="size-7 rounded-md border border-border-color flex items-center justify-center text-default hover:bg-light cursor-pointer">
          <i class="ph ph-arrow-clockwise"></i>
        </button>
      </div>
    </div>

    <!-- Table Container -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="text-sm text-default border-b border-border-color">
            <!-- Checkbox Column -->
            <th v-if="!hideCheckboxColumn" class="w-10 py-2 px-2 text-center">
              <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 cursor-pointer" :checked="isAllSelected" @change="handleSelectAll" />
            </th>

            <!-- Column Headers -->
            <th v-for="objCol in columns" :key="objCol.fieldName || objCol.label" class="text-left py-2 px-2 font-semibold text-gray-900" :class="{ 'cursor-pointer select-none': objCol.sortable, [objCol.cellAttributes?.class || '']: true }" @click="objCol.sortable && handleSort(objCol.fieldName)">
              <div class="flex items-center gap-1">
                <span>{{ objCol.label }}</span>
                <i v-if="objCol.sortable" class="ph" :class="getSortIcon(objCol.fieldName)"></i>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Loading Spinner State -->
          <tr v-if="isLoading" class="border-b border-border-color">
            <td :colspan="computedColspan" class="py-6 text-center text-sm text-default">
              <div class="flex items-center justify-center gap-2">
                <i class="ph ph-spinner animate-spin text-xl text-primary"></i>
                <span>Cargando datos...</span>
              </div>
            </td>
          </tr>

          <!-- Empty Data State -->
          <tr v-else-if="paginatedData.length === 0" class="border-b border-border-color">
            <td :colspan="computedColspan" class="py-6 text-center text-sm text-default">No hay registros disponibles.</td>
          </tr>

          <!-- Data Rows -->
          <tr v-else v-for="objRow in paginatedData" :key="objRow[keyField]" class="border-b border-border-color hover:bg-light/40 transition-colors">
            <!-- Checkbox Cell -->
            <td v-if="!hideCheckboxColumn" class="w-10 py-2.5 px-2 text-center">
              <input type="checkbox" class="size-4 rounded border-border-color text-primary focus:ring-0 cursor-pointer" :value="objRow[keyField]" :checked="lstSelectedRowKeys.includes(objRow[keyField])" @change="handleSelectRow(objRow[keyField], $event)" />
            </td>

            <!-- Data Cells -->
            <td v-for="objCol in columns" :key="objCol.fieldName || objCol.label" class="py-2.5 px-2 text-sm text-default" :class="objCol.cellAttributes?.class || ''">
              <!-- Custom Slot per Column fieldName -->
              <slot v-if="$slots['cell-' + objCol.fieldName]" :name="'cell-' + objCol.fieldName" :row="objRow" :objRow="objRow" :value="objRow[objCol.fieldName]" :column="objCol" :objCol="objCol" />

              <!-- Standard Action Column -->
              <template v-else-if="objCol.type === 'action'">
                <slot name="action" :row="objRow" :objRow="objRow">
                  <div class="hs-dropdown [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
                    <button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm size-7 bg-white border border-border-color text-gray-600 inline-flex items-center justify-center hover:bg-light hover:border-light hover:text-gray-900 focus:bg-light focus:border-light focus:text-gray-900 focus:outline-hidden"
                      aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                      <i class="icon-ellipsis-vertical font-normal"></i>
                    </button>
                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-50 bg-white border border-border-color shadow rounded-md mt-2 z-1"
                      role="menu" aria-orientation="vertical" tabindex="-1">
                      <div class="p-2 space-y-1">
                        <template v-for="objAction in objCol.typeAttributes?.rowActions || []" :key="objAction.name">
                          <a href="#" class="flex items-center gap-2 px-2 py-1.5 rounded-md text-sm hover:bg-light focus:outline-hidden focus:bg-white cursor-pointer"
                            :class="objAction.class || 'text-gray-900'" @click.prevent="handleRowAction(objAction, objRow)">
                            <i v-if="objAction.icon" :class="objAction.icon"></i>
                            <span>{{ objAction.label }}</span>
                          </a>
                        </template>
                      </div>
                    </div>
                  </div>
                </slot>
              </template>

              <!-- Badge Type -->
              <template v-else-if="objCol.type === 'badge'">
                <span class="text-[11px] px-2 py-0.5 rounded" :class="getBadgeClass(objCol, objRow[objCol.fieldName])">
                  {{ getBadgeLabel(objCol, objRow[objCol.fieldName]) }}
                </span>
              </template>

              <!-- Currency Type -->
              <template v-else-if="objCol.type === 'currency'"> ${{ formatCurrency(objRow[objCol.fieldName]) }} </template>

              <!-- Default / Text Type -->
              <template v-else>
                {{ objRow[objCol.fieldName] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer / Pagination -->
    <div v-if="showPagination" class="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border-color">
      <div class="flex items-center gap-2">
        <span class="text-sm text-default">Mostrando</span>
        <select v-model="numPageSize" @change="handlePageSizeChange" class="px-2 py-1 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 w-28 cursor-pointer">
          <option :value="10">10 / Página</option>
          <option :value="25">25 / Página</option>
          <option :value="50">50 / Página</option>
          <option :value="100">100 / Página</option>
        </select>
      </div>
      <div class="flex items-center gap-1">
        <button @click="handlePageChange(numCurrentPage - 1)" :disabled="numCurrentPage === 1"
          class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light disabled:opacity-50 cursor-pointer">
          <i class="ph ph-caret-left text-sm"></i></button>
        <button v-for="numPage in totalPages" :key="numPage" @click="handlePageChange(numPage)"
          class="size-7 rounded-md text-sm flex items-center justify-center cursor-pointer"
          :class="numPage === numCurrentPage ? 'bg-dark text-white' : 'text-gray-900 hover:bg-light'">
          {{ numPage }}</button>
        <button @click="handlePageChange(numCurrentPage + 1)" :disabled="numCurrentPage === totalPages || totalPages === 0"
          class="size-7 rounded-md text-sm border border-border-color flex items-center justify-center text-default hover:bg-light disabled:opacity-50 cursor-pointer">
          <i class="ph ph-caret-right text-sm"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NXDataTable',
  props: {
    keyField: { type: String, default: 'id' },
    data: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    isLoading: { type: Boolean, default: false },
    hideCheckboxColumn: { type: Boolean, default: false },
    selectedRows: { type: Array, default: () => [] },
    sortedBy: { type: String, default: '' },
    sortedDirection: { type: String, default: 'asc' },
    showSearch: { type: Boolean, default: true },
    showDateRange: { type: Boolean, default: false },
    showFilters: { type: Boolean, default: false },
    showPagination: { type: Boolean, default: true }
  },
  emits: ['rowaction', 'onrowaction', 'sort', 'onsort', 'rowselection', 'onrowselection', 'search', 'onsearch', 'daterangechange', 'refresh'],
  data() {
    return {
      // 2. Números
      numCurrentPage: 1,
      numPageSize: 10,

      // 3. Textos
      strSearch: '',
      strCurrentSortBy: this.sortedBy,
      strCurrentSortDirection: this.sortedDirection,

      // 4. Objetos
      objRangeDate: null,

      // 5. Listas
      lstSelectedRowKeys: [...this.selectedRows]
    };
  },
  watch: {
    data() {
      this.reinitPreline();
    },
    paginatedData() {
      this.reinitPreline();
    },
    selectedRows(newVal) {
      this.lstSelectedRowKeys = [...newVal];
    }
  },
  computed: {
    computedColspan() {
      return this.columns.length + (this.hideCheckboxColumn ? 0 : 1);
    },
    filteredData() {
      let lstResult = [...this.data];

      if (this.strSearch && this.strSearch.trim() !== '') {
        const query = this.strSearch.toLowerCase().trim();
        lstResult = lstResult.filter((objRow) => {
          return Object.values(objRow).some((val) => val !== null && val !== undefined && String(val).toLowerCase().includes(query));
        });
      }

      if (this.strCurrentSortBy) {
        const key = this.strCurrentSortBy;
        const dir = this.strCurrentSortDirection === 'desc' ? -1 : 1;
        lstResult.sort((a, b) => {
          if (a[key] < b[key]) return -1 * dir;
          if (a[key] > b[key]) return 1 * dir;
          return 0;
        });
      }

      return lstResult;
    },
    totalPages() {
      if (!this.showPagination) return 1;
      return Math.ceil(this.filteredData.length / this.numPageSize) || 1;
    },
    paginatedData() {
      if (!this.showPagination) return this.filteredData;
      const start = (this.numCurrentPage - 1) * this.numPageSize;
      return this.filteredData.slice(start, start + this.numPageSize);
    },
    isAllSelected() {
      if (this.paginatedData.length === 0) return false;
      return this.paginatedData.every((objRow) => this.lstSelectedRowKeys.includes(objRow[this.keyField]));
    }
  },
  mounted() {
    this.reinitPreline();
  },
  methods: {
    reinitPreline() {
      this.$nextTick(() => {
        setTimeout(() => {
          if (window.HSStaticMethods) {
            window.HSStaticMethods.autoInit();
          }
        }, 50);
      });
    },
    handleRowAction(action, row) {
      const eventPayload = { detail: { action, row } };
      this.$emit('rowaction', eventPayload);
      this.$emit('onrowaction', eventPayload);
    },
    handleSort(strFieldName) {
      let strDirection = 'asc';
      if (this.strCurrentSortBy === strFieldName && this.strCurrentSortDirection === 'asc') {
        strDirection = 'desc';
      }
      this.strCurrentSortBy = strFieldName;
      this.strCurrentSortDirection = strDirection;

      const eventPayload = { detail: { fieldName: strFieldName, sortedDirection: strDirection } };
      this.$emit('sort', eventPayload);
      this.$emit('onsort', eventPayload);
    },
    getSortIcon(strFieldName) {
      if (this.strCurrentSortBy !== strFieldName) return 'ph-caret-up-down text-gray-400';
      return this.strCurrentSortDirection === 'asc' ? 'ph-caret-up text-primary' : 'ph-caret-down text-primary';
    },
    handleSearch() {
      this.numCurrentPage = 1;
      const eventPayload = { detail: { value: this.strSearch } };
      this.$emit('search', eventPayload);
      this.$emit('onsearch', eventPayload);
    },
    handleDateRangeChange(dates) {
      const eventPayload = { detail: { range: dates } };
      this.$emit('daterangechange', eventPayload);
    },
    handleSelectAll(objEvent) {
      if (objEvent.target.checked) {
        const keys = this.paginatedData.map((objRow) => objRow[this.keyField]);
        this.lstSelectedRowKeys = Array.from(new Set([...this.lstSelectedRowKeys, ...keys]));
      } else {
        const keys = this.paginatedData.map((objRow) => objRow[this.keyField]);
        this.lstSelectedRowKeys = this.lstSelectedRowKeys.filter((k) => !keys.includes(k));
      }
      this.emitRowSelection();
    },
    handleSelectRow(strRowKey, objEvent) {
      if (objEvent.target.checked) {
        if (!this.lstSelectedRowKeys.includes(strRowKey)) {
          this.lstSelectedRowKeys.push(strRowKey);
        }
      } else {
        this.lstSelectedRowKeys = this.lstSelectedRowKeys.filter((k) => k !== strRowKey);
      }
      this.emitRowSelection();
    },
    emitRowSelection() {
      const selectedObjects = this.data.filter((objRow) => this.lstSelectedRowKeys.includes(objRow[this.keyField]));
      const eventPayload = { detail: { selectedRows: selectedObjects } };
      this.$emit('rowselection', eventPayload);
      this.$emit('onrowselection', eventPayload);
    },
    handlePageChange(numPage) {
      if (numPage >= 1 && numPage <= this.totalPages) {
        this.numCurrentPage = numPage;
        this.reinitPreline();
      }
    },
    handlePageSizeChange() {
      this.numCurrentPage = 1;
      this.reinitPreline();
    },
    handleRefresh() {
      this.$emit('refresh');
    },
    getBadgeClass(objCol, strValue) {
      const classMap = objCol.typeAttributes?.classMap || {};
      return classMap[strValue] || 'bg-light text-default';
    },
    getBadgeLabel(objCol, strValue) {
      const labelMap = objCol.typeAttributes?.labelMap;
      return labelMap && labelMap[strValue] !== undefined ? labelMap[strValue] : strValue;
    },
    formatCurrency(numVal) {
      if (numVal === null || numVal === undefined) return '0';
      return Number(numVal).toLocaleString();
    }
  }
};
</script>
