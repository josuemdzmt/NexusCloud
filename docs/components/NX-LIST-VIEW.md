# `nx-list-view`

Chrome de **página catálogo**: padding, título a la izquierda, alta a la derecha. El contenido (casi siempre `nx-datatable`) va en el slot.

Related lists **no** usan este componente: van con `nx-datatable` + `title` + `title-tag="h2"`. IAM: [docs/iam.md](../iam.md).

## Uso

```html
<nx-list-view title="Bancos" object="bank" @create="handleCreate">
  <nx-datatable :data="lstRecords" :columns="lstColumns" object="bank" @rowaction="handleRowAction" />
</nx-list-view>
```

Alta por ruta:

```html
<nx-list-view title="Productos" object="product" create-to="/inventory/product/new">
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `title` | string | `''` | Título. Vacío = sin cabecera. |
| `titleTag` | string | `'h1'` | `h1` o `h2`. |
| `object` | string | `''` | Objeto IAM (`bank`, `product`, …). Vacío = no filtra create. |
| `child` | boolean | `false` | Create exige `{object}.update`. |
| `createLabel` | string | `'Nuevo Registro'` | |
| `createTo` | string\|object\|null | `null` | `router-link`. |
| `showCreate` | boolean | `true` | |

Evento `create` si no hay `createTo`. El botón solo aparece si hay `createTo` o `@create` **y** `handleCanShowCreate`.
