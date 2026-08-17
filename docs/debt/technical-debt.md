# Deuda técnica — Chrome LDS y catálogos

Documento de trabajo incremental. **No implementar todo de golpe.** Cada fase se cierra con checklist y **sin romper estándares NexusCloud**.

| | |
|---|---|
| **Estado actual** | Chrome de catálogo (`nx-list-view`) e IAM de UI listos; lists/forms/details siguen clonados. Record pages copian breadcrumb + highlight + tabs a mano. |
| **Última revisión** | 2026-08-16 |
| **Regla de oro** | Vertex es el contrato. El front se adapta. Proponer → confirmar → implementar. |

La deuda de **API / tenant / stock** vive en Vertex `docs/debt/technical-debt.md`. Aquí solo UI.

---

## Estándares (no negociable)

Toda fase de este archivo **debe** cumplirlos. Si un atajo los viola, no es un atajo: es deuda nueva.

| Fuente | Qué obliga |
|--------|------------|
| `docs/standards/CODING_STANDARDS.md` | Húngaro (`b`/`num`/`str`/`obj`/`lst`); IDs sin prefijo (`recordId`); `props` en una línea; `data()` en orden b → num → str → obj → lst; métodos `handle*`; promesas (`.then/.catch/.finally`); `bSpinner` solo a `false` en `finally`; Yup + `<Field>` (no `v-model` de form). |
| `docs/standards/HTML_STANDARDS.md` | Líneas 180–200; `>` pegado al último atributo; indentación 2 espacios. |
| `.cursor/rules/html-standards.mdc` | Igual que HTML_STANDARDS (no inventar wrapping JSX). |
| `.cursor/rules/salesforce-fetch.mdc` | Record page = `getById` (header) + `getAll` del **tab activo**. No mega-DTO Vertex. No `Promise.all` de related lists al `mounted`. Lookups: `nx-lookup`. |
| `.cursor/rules/salesforce-domain.mdc` | Valores de dominio = Salesforce. Labels ES; picklists/API names no se inventan en Vue. |
| `docs/iam.md` | UI fail-closed (ocultar). Authz = Vertex 403. No inventar permisos. Catálogo = ListView; related = DataTable `title`. |
| `docs/components/NX-LIST-VIEW.md` | Chrome de página catálogo. |

Criterio de diseño extra (igual que Vertex):

- Copiar un módulo ya hecho (Bank / SalesOrderDetail). No inventar firmas.
- Si algo “mejor” no está en el estándar: **proponer + porqué + esperar confirmación**.
- No schema-form ni detail 100% por JSON (rompe Salesforce/LDS y HTML).
- No deformar Vertex por la UI.

---

## Contexto (para humanos e IA)

### Fortalezas actuales

- `nx-list-view` + `nx-datatable` + `nx-pagination` + `listPaginationUtils`.
- `nx-modal-form` / `nx-form-page` + VeeValidate + Yup.
- `nx-lookup`, `nx-address-fields`, `nx-tabset` / `nx-tab`.
- IAM de sesión: `handleHasPermission` / `handleCanShowCreate`; sidebar `permission`.
- Perfiles: nombre en `ProfileForm`; matriz por sección en `ProfilePermissionForm`.

### Deuda principal (resumen)

1. **~30 lists / ~30 forms / 8 details** clonados (pager, CRUD, breadcrumb, highlight).
2. Catálogos viejos usan `console.error` en vez de `handleError` (Brand, Currency, UoM, Location, Category, PaymentMethod, Org, Branch, TaxProfile).
3. Record pages (SO/PO gemelos; Product/Customer mismo chrome) sin `nx-record-page`.
4. ProductDetail: related de precios en `mounted` (no lazy de tab); botón “Agregar Precio” fuera del patrón DataTable `title`; tabs de stock comentados.
5. Related lists de abonos SO/PO duplicadas; filtro extra en cliente aunque ya hay `filter[parent_id]`.
6. Services CRUD idénticos salvo `ENDPOINT`.
7. Labels de lookup a veces mapeados en JS (`legal_name`, `iso_code`) — debe ser Vertex lookup/`include`.
8. DataTable no IAM-filtra row actions custom (`permission`); el listado sí. Inconsistente.

### Referencias del repo

- IAM UI: [docs/iam.md](../iam.md)
- ListView: [docs/components/NX-LIST-VIEW.md](../components/NX-LIST-VIEW.md)
- Lookup: [docs/components/NX-LOOKUP.md](../components/NX-LOOKUP.md)
- Vertex deuda: repo Vertex `docs/debt/technical-debt.md`
- Vertex IAM: repo Vertex `docs/architecture/06-iam.md`

---

## Cómo trabajar una fase

1. Leer **Estándares (no negociable)** + la fase + el **Prompt IA** al final.
2. Copiar BankList / BankForm / SalesOrderDetail. No inventar.
3. Si el diseño no está en el estándar: proponer, **esperar confirmación**.
4. Un PR / un commit por fase cuando el usuario lo pida. No mezclar tenant Vertex con chrome Vue.
5. Marcar checkboxes al cerrar. Actualizar “Historial” solo si el usuario lo pide o cierra la fase.

---

## Fase 0 — Baseline (sin código de producto)

**Objetivo:** congelar el “antes”.

- [ ] Contar `*List.vue`, `*Form.vue`, `*Detail.vue`, `*RelatedList.vue`.
- [ ] Listar catálogos que aún usan `console.error`.
- [ ] Listar details que cargan related lists en `mounted` (no en el tab).
- [ ] Listar details con botón create **dentro** del tab (no DataTable `title` / ListView).
- [ ] Anotar services que son solo CRUD vs extras (`/process`, `getCatalog`).

**Done when:** tabla Baseline al final de este archivo rellenada.

**No hacer:** cambios de producto.

---

## Fase 1 — Higiene de catálogos (toasts y promesas)

**Objetivo:** todas las listas/forms de catálogo usan `handleError` / `handleSuccess` y el patrón Bank (no `console.error`).

### Tareas

- [ ] Brand, ProductCategory, UnitMeasure, Location, Currency, PaymentMethod, Org, Branch, TaxProfile: mismo `catch` que BankList / BankForm.
- [ ] Methods `handle*`; `bSpinner` solo `false` en `finally`.
- [ ] No cambiar columnas ni IAM.

**Done when:** grep `console.error` en `src/views/pages` de catálogos = 0 (salvo comentario).

---

## Fase 2 — Lista de catálogo DRY

**Objetivo:** no clonar pager/search/CRUD en cada `*List.vue`.

### Tareas

- [ ] **Proponer** (no implementar a ciegas): helper `handleCatalogList` **o** componente `nx-catalog-page` (service, columns, form ref, `object`, title).
- [ ] Esperar confirmación del usuario.
- [ ] Migrar **un** catálogo piloto (Bank). Luego el resto de name/code/status.
- [ ] Listas con lógica extra (User, Profile, Product `create-to`) **no** entran en el piloto.

### Criterio

- Sigue `nx-list-view` + `nx-datatable` **sin** `title` en la tabla.
- `object` IAM obligatorio si el objeto está en Vertex `LST_OBJECTS`.
- HTML 180–200.

**Done when:** Bank (y al menos 3 clones) usan el helper/componente; Profile/User intactos.

---

## Fase 3 — CRUD de form de catálogo DRY

**Objetivo:** extraer `handleOpen` / `getById` / create / update. **El template de campos se queda en el `.vue`.**

### Tareas

- [ ] Helper o mixin de modal CRUD (service, títulos, Yup `getDefault()`).
- [ ] No schema-form: cada form sigue declarando `<Field>` a mano.
- [ ] Piloto BankForm; clonar a Brand/Currency/etc.

**Done when:** BankForm + 3 clones; ProductForm (página) y User/Profile **fuera**.

---

## Fase 4 — Record page (chrome)

**Objetivo:** breadcrumb + card 4 cols + tabs 8 cols en un `nx-record-page`. Contenido (campos, tabs) por slots.

### Tareas

- [ ] Proponer API del componente (props: backTo, title, badge, actions; slots: highlight, tabs). Esperar confirmación.
- [ ] Documentar en `docs/components/NX-RECORD-PAGE.md`.
- [ ] Migrar SalesOrderDetail y PurchaseOrderDetail (gemelos).
- [ ] Luego ProductDetail / CustomerDetail / VendorDetail (highlight más simple).
- [ ] Header = un `getById` + `include` de lookups. Tabs: related list **solo al activar** (primera visita).

**Done when:** SO y PO usan el chrome; LDS se cumple en esos dos.

---

## Fase 5 — Related lists y LDS

**Objetivo:** una related list = `getAll` + `filter[parent]` + `include`. Sin N+1, sin filtro cliente redundante, sin create suelto en el tab.

### Tareas

- [ ] ProductDetail: no llamar `handleGetEntries` en `mounted` si el tab de precios no es el default… o montar la lista solo dentro de `nx-tab` (componente hijo `mounted` = primera visita). Quitar botón “Agregar Precio” del tab; usar DataTable `title` + `@create` / `object="pricebook"` (alias Vertex).
- [ ] Abonos SO/PO: dejar de filtrar en cliente si Vertex ya filtra; extraer mapper compartido **o** un `nx-related-table` (proponer).
- [ ] Restaurar tabs de stock/movimientos en ProductDetail **solo** lazy (hoy comentados).
- [ ] No pedir a Vertex un DTO de página completa.

**Done when:** ProductDetail LDS; related de pagos sin `.filter` cliente duplicado.

---

## Fase 6 — Factory de services

**Objetivo:** `createResourceService(ENDPOINT)` para CRUD. Extras a mano.

### Tareas

- [ ] Factory en `src/services/` (getAll, getById, create, update, delete).
- [ ] Migrar Bank y 3 catálogos.
- [ ] Dejar a mano: Profile (`getCatalog`), transfers (`process`), Auth.

**Done when:** catálogos simples usan factory; contratos HTTP no cambian.

---

## Fase 7 — `nx-field` (opcional, después del chrome)

**Objetivo:** label + required + error + clases de input **sin** matar `<Field>`.

### Tareas

- [ ] Proponer props (`name`, `label`, `required`, `as`). Esperar confirmación.
- [ ] HTML 180–200. Un form piloto (BankForm).
- [ ] **No** generar el form desde un array de campos.

**Done when:** doc en `docs/components/` + BankForm; el resto puede quedar.

---

## Fase 8 — IAM de UI consistente

**Objetivo:** row actions custom y menú alineados a `docs/iam.md`.

### Tareas

- [ ] DataTable: documentar o filtrar acciones que no son `edit`/`delete` (hoy `permission` pasa). Decidir: filtro en el List **o** mapa en DataTable. Proponer.
- [ ] Alta de pantalla nueva: checklist IAM (object + sidebar `permission`) en este archivo o iam.md — ya está en iam.md; verificar que Profile/User lo cumplen.
- [ ] No inventar objetos IAM en Vue.

**Done when:** regla única documentada y ProfileList no es un caso especial opaco.

---

## Fuera de alcance (no colar)

- Formulario o detail 100% genérico por schema/JSON.
- Mega-DTO Vertex (header + todas las related lists).
- Inventar permisos o enums Nexus.
- `async/await` en `methods` de Vue (estándar: promesas).
- Prettier/JSX wrapping (`>` aislado).
- `title` en DataTable de un catálogo que ya usa ListView.
- Mapear `legal_name` / `iso_code` en JS (proyección Vertex).
- Trabajo de tenant/stock/cache: eso es Vertex.

---

## Prompt / contexto para la IA (copiar al iniciar una fase)

```
Estás trabajando en NexusCloud (Vue 3). Lee y obedece al 100%:

1) .cursor/rules/html-standards.mdc
2) .cursor/rules/salesforce-fetch.mdc
3) .cursor/rules/salesforce-domain.mdc
4) docs/standards/CODING_STANDARDS.md
5) docs/standards/HTML_STANDARDS.md
6) docs/iam.md
7) docs/debt/technical-debt.md — SOLO la fase que indique el usuario

Reglas de ejecución:
- Copiar BankList / BankForm / SalesOrderDetail. No inventar componentes “mágicos” ni schema-forms.
- Húngaro; métodos handle*; props en una línea; data() b→num→str→obj→lst; IDs = recordId.
- Promesas + bSpinner false solo en finally. Toasts: handleError / handleSuccess. No console.error de producto.
- HTML: líneas 180–200; > pegado al último atributo; indent 2.
- LDS: getById header; getAll del tab activo con filter[parent]; no Promise.all de related lists al mounted.
- IAM: object= del catálogo Vertex; UI oculta; 403 es Vertex. No inventar permisos.
- Lookups: nx-lookup. No mapear legal_name / iso_code en JS.
- Si algo no está en el estándar: propón + porqué + espera confirmación.
- No edites docs/debt/technical-debt.md salvo checkboxes de la fase cerrada, y solo si el usuario lo pide.
- No toques Vertex en esta fase.

Fase a ejecutar: [PEGAR NÚMERO Y TÍTULO]
Alcance explícito: [qué sí / qué no]
Confirmaciones pendientes del usuario: [si las hay]
```

### Mini-prompts por fase

**Fase 1**
```
Ejecuta Fase 1 de docs/debt/technical-debt.md: toasts handleError en catálogos. No DRY de componentes. No toques details.
```

**Fase 2**
```
Ejecuta Fase 2 de docs/debt/technical-debt.md: DRY de listas de catálogo. Propón helper vs nx-catalog-page y espera confirmación antes de migrar más allá del piloto Bank.
```

**Fase 4**
```
Ejecuta Fase 4 de docs/debt/technical-debt.md: nx-record-page. Propón API (props/slots), espera confirmación, documenta, migra SO+PO. Header getById; tabs lazy.
```

**Fase 5**
```
Ejecuta Fase 5 de docs/debt/technical-debt.md: LDS en ProductDetail y related lists. Sin mega-DTO Vertex. Sin filtro cliente redundante.
```

---

## Baseline (completar en Fase 0)

| Ítem | Valor | Fecha |
|------|-------|-------|
| `*List.vue` / `*Form.vue` / `*Detail.vue` | ~34 / ~30 / 8 | 2026-08-16 |
| Catálogos con `console.error` | Brand, Category, UoM, Location, Currency, PaymentMethod, Org, Branch, TaxProfile | 2026-08-16 |
| Details que hidratan related en `mounted` | ProductDetail (`handleGetEntries`) | 2026-08-16 |
| Create suelto en tab (no DataTable title) | ProductDetail “Agregar Precio” | 2026-08-16 |
| Services solo CRUD vs especiales | mayoría CRUD; Profile `getCatalog`; Transfer `process` | 2026-08-16 |

---

## Historial de cierre de fases

| Fase | Cerrada | Notas |
|------|---------|-------|
| 0 | | Baseline parcial 2026-08-16 (conteo orientativo) |
| 1 | | |
| 2 | | Esperar diseño helper vs componente |
| 3 | | |
| 4 | | Esperar API nx-record-page |
| 5 | | |
| 6 | | |
| 7 | | Opcional |
| 8 | | |
