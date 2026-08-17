# IAM en NexusCloud

Vertex autoriza. NexusCloud **solo oculta** menú, alta y row actions. Sin permiso en sesión el control no se pinta; si alguien llama la API igual, Vertex responde **403**.

Fuente de nombres: Vertex `IamPermissions` + seed. El front **no inventa** permisos. Contrato: login / `GET /me` trae `permissions: string[]` (`sales_order.create`, …).

Detalle de API: Vertex `docs/architecture/06-iam.md`.

## Sesión

`src/services/auth/authSession.js`

| Función | Uso |
|---------|-----|
| `handleHasPermission('user.read')` | Fail-closed: sin array de permisos → `false`. |
| `handleCanShowCreate(object, { child, showCreate })` | Alta en ListView / DataTable. Con `object`: exige `create` (o `update` si `child`). Sin `object`: se muestra si `showCreate`. |

Los permisos viven en `objSessionUser.permissions` (mismo payload que `/me`). Logout limpia sesión (y catálogos).

## Listas de catálogo vs related lists

Chrome tipo Salesforce / Dreams: título de página a la izquierda, **Nuevo** a la derecha. La tabla debajo solo busca y pinta filas.

| Pieza | Cuándo |
|-------|--------|
| `nx-list-view` | Catálogos (página completa). Título `h1` + create. Slot = `nx-datatable` **sin** `title` ni create. |
| `nx-datatable` con `title` | Related lists (tab). Título `h2` + create en esa fila. |

`nx-list-view` está registrado en `main.ts`.

### Catálogo

```html
<nx-list-view title="Bancos" object="bank" @create="handleCreate">
  <nx-datatable :data="lstRecords" :columns="lstColumns" object="bank" @rowaction="handleRowAction" />
</nx-list-view>
```

`object` en ListView (create) y en DataTable (edit/delete de fila). Mismo nombre que Vertex (`bank`, `product`, `account`, …).

Hijos de producto (marcas, categorías, UoM) usan `object="product"`: el permiso es del objeto IAM, no de la URL.

Ruta de alta (no modal): `create-to="/inventory/product/new"`.

### Related list

```html
<nx-datatable title="Pagos" title-tag="h2" object="sales_order" child @create="handleCreate" … />
```

`child`: alta y delete de fila exigen `{object}.update` (líneas/pagos = update del padre en Vertex).

Create en DataTable: si hay `title`, el botón va en la fila del título; si no, en la toolbar de búsqueda.

### Fuera de ListView

Páginas que no son catálogo (p. ej. inventario por producto / almacén, analytics): título propio; DataTable sin `title` de página.

## Props IAM (`nx-list-view` / `nx-datatable`)

| Prop | Default | Efecto |
|------|---------|--------|
| `object` | `''` | Sin valor: no se filtra por IAM (p. ej. tax-profiles, fail-open en Vertex). |
| `child` | `false` | Create/delete → `update` del objeto. |
| `showCreate` | `true` | Forzar ocultar el alta. |
| `createTo` | `null` | `router-link` en vez de `@create`. |
| `createLabel` | `Nuevo Registro` | Texto del botón. |

Row actions en DataTable: `edit` → `{object}.update`; `delete` → `{object}.delete` (o `update` si `child`). Otras acciones no se filtran.

El create **no se pinta** si no hay `createTo` ni listener `@create`.

## Sidebar

`src/assets/json/sidebar-menu.json`: cada ítem con ruta puede llevar `"permission": "user.read"`.

`filterMenuByPermission` en `sidebar-menu-helpers.js` oculta el ítem (y padres vacíos) si `handleHasPermission` falla.

## Perfiles (matriz)

`ProfileService.getCatalog()` → `GET /api/v1/core/permissions` (matriz fija objeto × acción). CRUD de perfiles: `/api/v1/core/profiles`.

`ProfileForm` solo el nombre. `ProfilePermissionForm` (row action Permisos) pinta la matriz por sección (Sistema, Inventario, Ventas, Compras, Cuentas), con columna Todos. System Administrator queda locked en UI (Vertex también lo impide). El agrupado es presentación; los nombres siguen el catálogo Vertex.

Lookup de perfil al dar de alta usuarios: Vertex permite GET perfiles con `user.create` / `user.update` aunque no tenga `profile.read`. La matriz de permisos sigue pidiendo `profile.read`.

## Alta de pantalla nueva

1. El objeto ya existe en Vertex `LST_OBJECTS` (o es alias: usar el objeto padre en `object=`).
2. ListView + DataTable con ese `object`.
3. Ítem de menú con `permission` `{objeto}.read`.
4. No inventar strings de permiso en Vue.

## Qué no hacer

- No tratar la UI como autorización.
- No pedir un DTO Vertex con header + todas las related lists (LDS: header + tab activo). Ver `.cursor/rules/salesforce-fetch.mdc`.
- No poner `title` en el DataTable de un catálogo que ya usa ListView (doble chrome).
