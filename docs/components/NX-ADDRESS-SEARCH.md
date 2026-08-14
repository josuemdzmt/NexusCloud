# `nx-address-search`

Modal para buscar una dirección **vía Vertex** (`GET /api/v1/address-search`). Emite el JSON de dirección unificado; el valor del form no es un Id.

No reemplaza `nx-lookup` (FKs internas). En formularios se usa **dentro de** `nx-address-fields` (`searchable`).

## Uso

```html
<nx-address-fields name-prefix="billToAddress" searchable />
```

Al elegir un resultado, `nx-address-fields` escribe el JSON en el form vía `useFormContext().setFieldValue`.

Uso directo del modal (raro; preferir `searchable`):

```html
<nx-address-search ref="addressSearchRef" @select="handleAddressSelected" />
```

```js
this.$refs.addressSearchRef.handleOpen();
```

## Props (`nx-address-search`)

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `debounceMs` | number | `300` | Debounce de búsqueda |
| `minChars` | number | `3` | Mínimo de caracteres antes de consultar |

## Eventos

| Evento | Payload |
|--------|---------|
| `select` | JSON de dirección (`placeId`, `street`, `zipcode`, `location`, …) |
| `close` | — |

## Flujo

1. **Buscar** → `GET /api/v1/address-search?q=…&session=…`
2. **Elegir** → `GET /api/v1/address-search/{placeId}?session=…`
3. **Emitir** el JSON; `nx-address-fields` lo asigna al prefijo (`billToAddress`, `address`, …).

La API key de Google **no** vive en NexusCloud.

## Archivos

- `src/components/nexus/NX-AddressSearch.vue`
- `src/components/nexus/NX-AddressFields.vue`
- `src/components/nexus/utils/placesUtils.js`

## Qué no hacer

- No llamar a Google desde el browser.
- No reusar `nx-lookup` ni `GET /api/v1/lookup` para direcciones.
