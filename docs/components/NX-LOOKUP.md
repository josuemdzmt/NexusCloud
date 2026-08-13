# `nx-lookup`

Control de búsqueda tipado (equivalente Salesforce Lookup). Valor del form = **Id**; UI = **Name** + **Code** opcional vía Vertex `GET /api/v1/lookup`.

## Uso

```html
<nx-lookup :model-value="value" type="account" :params="{ 'filter[account_type]': ['Customer', 'Both'] }"
  class="w-full" :class="{ 'border-danger': errors.accountId }" @update:model-value="handleChange" @blur="handleBlur" />
```

Con vee-validate:

```html
<Field name="accountId" v-slot="{ value, handleChange, handleBlur }">
  <nx-lookup :model-value="value" type="account" :params="{ 'filter[account_type]': ['Customer', 'Both'] }"
    class="w-full" :class="{ 'border-danger': errors.accountId }" @update:model-value="handleChange" @blur="handleBlur" />
</Field>
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `modelValue` | string\|number\|null | `null` | Id seleccionado |
| `type` | string | **required** | snake_case del modelo Vertex (`account`, `brand`, `payment_method`, …) |
| `params` | object\|null | `null` | Filtros Spatie extra (`filter[…]`) |
| `placeholder` | string | `''` → `"Buscar..."` | Texto del input |
| `disabled` | boolean | `false` | |
| `clearable` | boolean | `true` | Botón X |
| `debounceMs` | number | `300` | Debounce de búsqueda |
| `pageSize` | number | `10` | Máximo de opciones por búsqueda |
| `creatable` | boolean | `false` | Opción "Nuevo..." → emite `create` |

## Eventos

| Evento | Payload |
|--------|---------|
| `update:modelValue` / `change` | Id o `null` |
| `select` | `{ value, label, secondary }` o `null` |
| `blur` | evento DOM |
| `create` | (sin payload) si `creatable` |

## Flujo

1. **Buscar** → `GET /api/v1/lookup?type=…&filter[search]=…&per_page=10` (+ `params`).
2. **Hidratar** (hay `modelValue`) → mismo endpoint con `filter[id]=…&per_page=1`.
3. **Pintar** → campo seleccionado = solo `name` (Salesforce); en la lista de búsqueda `name` + `code` como secondary.

## Cómo se resuelve `type`

En Vertex, `type` → `{Studly}QueryBuilder` por convención (sin lista fija de tipos). Nueva tabla lookupable = crear el QueryBuilder del dominio; `name`/`code` y search los proyecta `LookupProjector`.

## Archivos

- `src/components/nexus/NX-Lookup.vue` — UI
- `src/components/nexus/lookupUtils.js` — cliente HTTP + mapper Id/Name/Code

## Qué no hacer

- No usar props legacy (`endpoint`, `object`, `labelField`, `secondaryField`).
- No mapear `legal_name` / `iso_code` / `sku` en el front: eso lo proyecta Vertex (`LookupProjector`).
- No cargar catálogos enteros (`per_page: 500`) solo para labels: usar lookup o `include` en getById.
