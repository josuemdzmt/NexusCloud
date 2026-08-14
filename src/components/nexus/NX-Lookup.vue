<template>
  <div ref="rootRef" class="relative w-full">
    <div v-if="objSelected" class="flex items-center w-full px-3 py-2 text-sm border rounded-md bg-white transition-colors"
      :class="[strControlClass, disabled ? 'opacity-60 cursor-not-allowed bg-gray-50' : '']">
      <div class="flex-1 min-w-0 pe-2 text-gray-900 truncate">{{ objSelected.label }}</div>
      <button v-if="clearable && !disabled" type="button" title="Quitar selección" @click.stop="handleClear"
        class="size-5 inline-flex items-center justify-center text-default hover:text-gray-900 cursor-pointer shrink-0">
        <i class="ph ph-x text-sm"></i>
      </button>
    </div>

    <div v-else class="relative">
      <input ref="inputRef" type="text" :value="strQuery" :placeholder="strResolvedPlaceholder" :disabled="disabled" autocomplete="off"
        class="w-full px-3 pe-8 py-2 text-sm border rounded-md bg-white focus:outline-none focus:ring-0 transition-colors"
        :class="[strControlClass, disabled ? 'opacity-60 cursor-not-allowed bg-gray-50' : '']" @input="handleInput" @focus="handleFocus" @keydown="handleKeydown" @blur="handleBlur">
      <i class="ph absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm pointer-events-none"
        :class="bLoading || bHydrating ? 'ph-spinner animate-spin text-primary' : 'ph-magnifying-glass'"></i>
    </div>

    <div v-if="bOpen && !objSelected" role="listbox" class="absolute z-[70] mt-1 w-full bg-white border border-border-color rounded-md shadow-sm overflow-hidden">
      <div v-if="bLoading" class="flex items-center gap-2 px-3 py-2 text-sm text-default">
        <i class="ph ph-spinner animate-spin text-primary"></i>
        <span>Buscando...</span>
      </div>
      <div v-else-if="strError" class="px-3 py-2 text-sm text-danger">{{ strError }}</div>
      <div v-else-if="lstOptions.length === 0 && !creatable" class="px-3 py-2 text-sm text-default">No se encontraron resultados.</div>
      <ul v-else class="list-none p-0 m-0 max-h-60 overflow-y-auto">
        <li v-for="(objOption, numIndex) in lstOptions" :key="objOption.value" role="option" class="list-none px-3 py-2 cursor-pointer"
          :class="numIndex === numActiveIndex ? 'bg-light' : 'hover:bg-light'" @mousedown.prevent="handleSelect(objOption)" @mouseenter="numActiveIndex = numIndex">
          <div class="text-sm text-gray-900 truncate">{{ objOption.label }}</div>
          <div v-if="objOption.secondary" class="text-[11px] text-default truncate">{{ objOption.secondary }}</div>
        </li>
        <li v-if="creatable" role="option" @mousedown.prevent="handleCreateClick" @mouseenter="numActiveIndex = lstOptions.length"
          class="list-none px-3 py-2 cursor-pointer border-t border-border-color bg-gray-50 hover:bg-light text-primary font-semibold flex items-center gap-1.5"
          :class="numActiveIndex === lstOptions.length ? 'bg-light' : ''">
          <i class="ph ph-plus text-sm"></i>
          <span class="text-sm">Nuevo...</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/**
 * NX-Lookup — control de búsqueda tipado (Salesforce Lookup).
 *
 * - modelValue = Id del registro.
 * - UI seleccionada = solo Name (como Salesforce Lookup); Code solo en la lista de búsqueda.
 * - pageSize default 10 (tope de opciones por búsqueda).
 * - Sin props legacy endpoint/object/labelField: solo type + params.
 *
 * Uso:
 *   <nx-lookup type="account" :params="{ 'filter[account_type]': ['Customer','Both'] }" />
 *
 * @see docs/components/NX-LOOKUP.md
 * @see utils/lookupUtils.js
 */
import { handlePagerParams, handleSearchParams } from '@/utils/listPaginationUtils';
import { handleCreateLookupService, handleMapRecordOption } from '@/components/nexus/utils/lookupUtils';

export default {
  name: 'NX-Lookup',
  inheritAttrs: false,
  props: {
    /** Id seleccionado (v-model). */
    modelValue: { type: [String, Number], default: null },
    /** Clave del registry Vertex (account, currency, pricebook, product, bank, payment_method). */
    type: { type: String, required: true },
    /** Filtros Spatie extra, p.ej. { 'filter[is_active]': 1 }. */
    params: { type: Object, default: null },
    /** Placeholder del input; si vacío → "Buscar...". */
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: true },
    /** Debounce de búsqueda al escribir (ms). */
    debounceMs: { type: Number, default: 300 },
    /** Máximo de resultados por búsqueda (per_page). */
    pageSize: { type: Number, default: 10 },
    /** Muestra "Nuevo..." y emite create (el form decide qué abrir). */
    creatable: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'change', 'blur', 'select', 'create'],
  data() {
    return {
      bOpen: false,
      bLoading: false,
      bHydrating: false,
      numActiveIndex: -1,
      numSearchTimer: null,
      numRequestId: 0,
      numHydrateRequestId: 0,
      strQuery: '',
      strError: '',
      objSelected: null,
      lstOptions: []
    };
  },
  computed: {
    /** Placeholder efectivo (prop o genérico). */
    strResolvedPlaceholder() {
      return this.placeholder || 'Buscar...';
    },
    /** Mini-servicio tipado; null si type vacío. */
    objService() {
      return handleCreateLookupService(this.type);
    },
    /** Id normalizado ('' → null). */
    recordId() {
      const value = this.modelValue;
      return value === '' || value === undefined ? null : value;
    },
    /** Borde danger si el padre pasa class border-danger (vee-validate). */
    strControlClass() {
      return String(this.$attrs.class || '').includes('border-danger')
        ? 'border-danger focus:border-danger'
        : 'border-border-color focus:border-primary';
    }
  },
  watch: {
    recordId: {
      immediate: true,
      handler(value) {
        if (value === null || value === undefined) {
          this.objSelected = null;
          return;
        }
        if (this.objSelected && String(this.objSelected.value) === String(value)) return;
        this.handleHydrateById(value);
      }
    },
    type() {
      this.objSelected = null;
      this.lstOptions = [];
      if (this.recordId != null) this.handleHydrateById(this.recordId);
    }
  },
  mounted() {
    document.addEventListener('mousedown', this.handleDocumentClick);
  },
  beforeUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick);
    if (this.numSearchTimer) clearTimeout(this.numSearchTimer);
  },
  methods: {
    /** Opción placeholder si falla la hidratación. */
    handleFallbackOption(recordId) {
      return { value: recordId, label: `Record #${recordId}`, secondary: '' };
    },
    /** Extrae array data del envelope Vertex o lista cruda. */
    handleNormalizeList(objResponse) {
      if (Array.isArray(objResponse)) return objResponse;
      if (Array.isArray(objResponse?.data)) return objResponse.data;
      return [];
    },
    /** Extrae un registro de envelope { data: obj } o el objeto mismo. */
    handleNormalizeRecord(objResponse) {
      if (!objResponse) return null;
      if (objResponse.data && typeof objResponse.data === 'object' && !Array.isArray(objResponse.data)) {
        return objResponse.data;
      }
      return objResponse;
    },
    handleInput(objEvent) {
      this.strQuery = objEvent.target.value;
      this.bOpen = true;
      this.numActiveIndex = -1;
      if (this.numSearchTimer) clearTimeout(this.numSearchTimer);
      this.numSearchTimer = setTimeout(() => this.handleSearch(), this.debounceMs);
    },
    handleFocus() {
      if (this.disabled) return;
      this.bOpen = true;
      if (!this.lstOptions.length) this.handleSearch();
    },
    handleBlur(objEvent) {
      this.$emit('blur', objEvent);
    },
    handleDocumentClick(objEvent) {
      if (this.$refs.rootRef && !this.$refs.rootRef.contains(objEvent.target)) {
        this.bOpen = false;
      }
    },
    /** Busca opciones (máx. pageSize) con filter[search] + params del call site. */
    handleSearch() {
      if (!this.objService?.getAll) {
        this.lstOptions = [];
        this.strError = 'Configura type en nx-lookup.';
        return;
      }

      const strTerm = (this.strQuery || '').trim();
      const numRequestId = ++this.numRequestId;
      this.bLoading = true;
      this.strError = '';

      const objParams = handlePagerParams(
        1,
        this.pageSize,
        handleSearchParams(strTerm, this.params || {})
      );

      Promise.resolve(this.objService.getAll(objParams))
        .then((objResponse) => {
          if (numRequestId !== this.numRequestId) return;
          this.lstOptions = this.handleNormalizeList(objResponse)
            .map((item) => handleMapRecordOption(item))
            .filter(Boolean);
          this.numActiveIndex = this.lstOptions.length ? 0 : -1;
        })
        .catch(() => {
          if (numRequestId !== this.numRequestId) return;
          this.lstOptions = [];
          this.strError = 'No se pudo completar la búsqueda.';
        })
        .finally(() => {
          if (numRequestId === this.numRequestId) this.bLoading = false;
        });
    },
    /** Carga label del Id ya seleccionado (edición / default). */
    handleHydrateById(recordId) {
      if (!this.objService?.getById) {
        this.objSelected = this.handleFallbackOption(recordId);
        return;
      }

      const numHydrateRequestId = ++this.numHydrateRequestId;
      this.bHydrating = true;
      Promise.resolve(this.objService.getById(recordId))
        .then((objResponse) => {
          if (numHydrateRequestId !== this.numHydrateRequestId) return;
          if (String(this.recordId) !== String(recordId)) return;
          this.objSelected = handleMapRecordOption(this.handleNormalizeRecord(objResponse))
            || this.handleFallbackOption(recordId);
        })
        .catch(() => {
          if (numHydrateRequestId !== this.numHydrateRequestId) return;
          if (String(this.recordId) !== String(recordId)) return;
          this.objSelected = this.handleFallbackOption(recordId);
        })
        .finally(() => {
          if (numHydrateRequestId === this.numHydrateRequestId) this.bHydrating = false;
        });
    },
    handleKeydown(objEvent) {
      if (!this.bOpen && (objEvent.key === 'ArrowDown' || objEvent.key === 'Enter')) {
        this.bOpen = true;
        this.handleSearch();
        return;
      }
      if (objEvent.key === 'Escape') {
        this.bOpen = false;
        return;
      }

      const numMaxIndex = this.creatable ? this.lstOptions.length : this.lstOptions.length - 1;
      if (numMaxIndex < 0) return;

      if (objEvent.key === 'ArrowDown') {
        objEvent.preventDefault();
        this.numActiveIndex = Math.min(this.numActiveIndex + 1, numMaxIndex);
      } else if (objEvent.key === 'ArrowUp') {
        objEvent.preventDefault();
        this.numActiveIndex = Math.max(this.numActiveIndex - 1, 0);
      } else if (objEvent.key === 'Enter' && this.numActiveIndex >= 0) {
        objEvent.preventDefault();
        if (this.creatable && this.numActiveIndex === this.lstOptions.length) {
          this.handleCreateClick();
        } else if (this.lstOptions[this.numActiveIndex]) {
          this.handleSelect(this.lstOptions[this.numActiveIndex]);
        }
      }
    },
    handleSelect(objOption) {
      if (!objOption) return;
      this.objSelected = { ...objOption };
      this.strQuery = '';
      this.lstOptions = [];
      this.bOpen = false;
      this.$emit('update:modelValue', objOption.value);
      this.$emit('change', objOption.value);
      this.$emit('select', objOption);
    },
    handleClear() {
      this.objSelected = null;
      this.strQuery = '';
      this.lstOptions = [];
      this.$emit('update:modelValue', null);
      this.$emit('change', null);
      this.$emit('select', null);
      this.$nextTick(() => {
        if (this.$refs.inputRef && !this.disabled) this.$refs.inputRef.focus();
      });
    },
    handleCreateClick() {
      this.bOpen = false;
      this.$emit('create');
    }
  }
};
</script>
