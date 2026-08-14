<template>
  <Teleport to="body">
    <div v-if="bOpen" class="fixed inset-0 z-[100000] overflow-y-auto" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-black/40 backdrop-blur-[5px]" @click="handleClose"></div>
      <div class="relative mt-16 w-full max-w-lg mx-auto m-3 bg-white border shadow-sm rounded-md border-border-color pointer-events-auto">
        <div class="flex justify-between items-center p-4 border-b border-border-color shrink-0">
          <h2 class="text-base font-bold text-title mb-0">Buscar dirección</h2>
          <button type="button" class="size-7 inline-flex justify-center items-center rounded-md border border-border-color hover:bg-light cursor-pointer" @click="handleClose">
            <i class="ph ph-x text-sm"></i>
          </button>
        </div>
        <div class="p-4 space-y-3">
          <div class="relative">
            <input ref="inputRef" type="text" :value="strQuery" placeholder="Escribe una dirección..." autocomplete="off"
              class="w-full px-3 pe-8 py-2 text-sm border border-border-color rounded-md bg-white focus:outline-none focus:ring-0 focus:border-primary"
              @input="handleInput" @keydown="handleKeydown">
            <i class="ph absolute right-2.5 top-1/2 -translate-y-1/2 text-default text-sm pointer-events-none"
              :class="bLoading ? 'ph-spinner animate-spin text-primary' : 'ph-magnifying-glass'"></i>
          </div>
          <div class="border border-border-color rounded-md overflow-hidden min-h-[12rem]">
            <div v-if="bLoading" class="flex items-center gap-2 px-3 py-2 text-sm text-default">
              <i class="ph ph-spinner animate-spin text-primary"></i>
              <span>Buscando...</span>
            </div>
            <div v-else-if="strError" class="px-3 py-2 text-sm text-danger">{{ strError }}</div>
            <div v-else-if="strQuery.trim().length < numMinChars" class="px-3 py-2 text-sm text-default">Escribe al menos {{ numMinChars }} caracteres.</div>
            <div v-else-if="lstOptions.length === 0" class="px-3 py-2 text-sm text-default">No se encontraron resultados.</div>
            <ul v-else class="list-none p-0 m-0 max-h-60 overflow-y-auto">
              <li v-for="(objOption, numIndex) in lstOptions" :key="objOption.placeId" class="list-none px-3 py-2 cursor-pointer"
                :class="numIndex === numActiveIndex ? 'bg-light' : 'hover:bg-light'"
                @mousedown.prevent="handleSelect(objOption)" @mouseenter="numActiveIndex = numIndex">
                <div class="text-sm text-gray-900 truncate">{{ objOption.name }}</div>
                <div v-if="objOption.secondary" class="text-[11px] text-default truncate">{{ objOption.secondary }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
/**
 * NX-AddressSearch — modal de búsqueda de dirección (Vertex). Emite JSON; no es lookup.
 *
 * @see docs/components/NX-ADDRESS-SEARCH.md
 * @see utils/placesUtils.js
 */
import { handleCreatePlacesSession, handleSearchPlaces, handleGetPlaceDetails } from '@/components/nexus/utils/placesUtils';

export default {
  name: 'NX-AddressSearch',
  emits: ['select', 'close'],
  props: {
    debounceMs: { type: Number, default: 500 },
    minChars: { type: Number, default: 5 }
  },
  data() {
    return {
      bOpen: false,
      bLoading: false,
      numActiveIndex: -1,
      numSearchTimer: null,
      numRequestId: 0,
      strQuery: '',
      strError: '',
      strSession: '',
      lstOptions: []
    };
  },
  computed: {
    numMinChars() {
      return this.minChars;
    }
  },
  beforeUnmount() {
    if (this.numSearchTimer) clearTimeout(this.numSearchTimer);
  },
  methods: {
    handleOpen() {
      this.bOpen = true;
      this.bLoading = false;
      this.strQuery = '';
      this.strError = '';
      this.lstOptions = [];
      this.numActiveIndex = -1;
      this.strSession = handleCreatePlacesSession();
      this.$nextTick(() => {
        if (this.$refs.inputRef) this.$refs.inputRef.focus();
      });
    },
    handleClose() {
      this.bOpen = false;
      this.$emit('close');
    },
    handleInput(objEvent) {
      this.strQuery = objEvent.target.value;
      this.numActiveIndex = -1;
      if (this.numSearchTimer) clearTimeout(this.numSearchTimer);
      this.numSearchTimer = setTimeout(() => this.handleSearch(), this.debounceMs);
    },
    handleSearch() {
      const strTerm = (this.strQuery || '').trim();
      if (strTerm.length < this.minChars) {
        this.lstOptions = [];
        this.strError = '';
        this.bLoading = false;
        return;
      }

      const numRequestId = ++this.numRequestId;
      this.bLoading = true;
      this.strError = '';

      handleSearchPlaces(strTerm, this.strSession)
        .then((lstData) => {
          if (numRequestId !== this.numRequestId) return;
          this.lstOptions = Array.isArray(lstData) ? lstData.filter((objItem) => objItem?.placeId) : [];
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
    handleKeydown(objEvent) {
      if (objEvent.key === 'Escape') {
        objEvent.preventDefault();
        this.handleClose();
        return;
      }
      if (objEvent.key === 'Enter') {
        objEvent.preventDefault();
        if (this.lstOptions[this.numActiveIndex]) {
          this.handleSelect(this.lstOptions[this.numActiveIndex]);
        }
        return;
      }
      if (objEvent.key === 'ArrowDown') {
        objEvent.preventDefault();
        if (!this.lstOptions.length) return;
        this.numActiveIndex = Math.min(this.numActiveIndex + 1, this.lstOptions.length - 1);
      } else if (objEvent.key === 'ArrowUp') {
        objEvent.preventDefault();
        this.numActiveIndex = Math.max(this.numActiveIndex - 1, 0);
      }
    },
    handleSelect(objOption) {
      if (!objOption?.placeId) return;
      this.bLoading = true;
      this.strError = '';
      handleGetPlaceDetails(objOption.placeId, this.strSession)
        .then((objAddress) => {
          this.$emit('select', objAddress);
          this.handleClose();
        })
        .catch(() => {
          this.strError = 'No se pudo obtener la dirección.';
        })
        .finally(() => {
          this.bLoading = false;
        });
    }
  }
};
</script>
