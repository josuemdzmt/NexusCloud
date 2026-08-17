# Estándar de Código JavaScript / Vue - NexusCloud

Este documento establece las convenciones de notación, declaración de variables, formato de `props`, nombres de funciones y manejo de asincronía obligatorios en **NexusCloud** (basados en los estándares de PhysioCloud).

IAM (ocultar menú / alta / row actions; Vertex autoriza): [docs/iam.md](../iam.md). Chrome de catálogos: [NX-LIST-VIEW](../components/NX-LIST-VIEW.md).

---

## 1. Declaración de Variables (Notación Húngara)

Todas las variables definidas en `data()`, `props`, o variables locales deben utilizar notación húngara estricta basada en su tipo de dato:

| Prefijo | Tipo de Dato | Ejemplo |
| :--- | :--- | :--- |
| **`b`** | Booleano | `bSpinner`, `bLoading`, `bIsActive`, `bModalOpen` |
| **`num`** | Número / Entero | `numCurrentPage`, `numPageSize`, `numTotalRecords` |
| **`str`** | Cadena de Texto | `strSearch`, `strTitle`, `strStatus` |
| **`obj`** | Objeto (`Object`) | `objForm`, `objFilter`, `objProduct`, `objUser` |
| **`lst`** | Arreglo / Lista (`Array`) | `lstProducts`, `lstColumns`, `lstCategories` |

> **Excepción de IDs:** Los identificadores de registros no deben llevar el prefijo `num`, aunque sean de tipo número. Se deben nombrar de forma explícita y sin prefijo, por ejemplo: `recordId` o `relatedRecordId`.

---

## 2. Formato de Declaración de `props`

Las propiedades (`props`) de los componentes Vue **deben declararse en una sola línea por cada propiedad**:

### Ejemplo Correcto:
```javascript
props: {
    keyField: { type: String, default: 'id' },
    data: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    isLoading: { type: Boolean, default: false },
    hideCheckboxColumn: { type: Boolean, default: false },
    selectedRows: { type: Array, default: () => [] }
}
```

### Ejemplo Incorrecto:
```javascript
// INCORRECTO: Evitar desplegar cada propiedad en múltiples líneas
props: {
    keyField: {
        type: String,
        default: 'id'
    }
}
```

---

## 3. Orden de Declaración en `data()`

En los componentes de Vue, las variables retornadas en la función `data()` **deben ordenarse strictly** según el tipo de dato en el siguiente orden secuencial:

1. **Booleanos (`b`)**
2. **Números (`num`)**
3. **Cadenas de Texto (`str`)**
4. **Objetos (`obj`)**
5. **Listas / Arreglos (`lst`)**

### Ejemplo Correcto:
```javascript
data() {
    return {
        // 1. Booleanos
        bSpinner: false,
        bLoading: false,

        // 2. Números
        numCurrentPage: 1,
        numPageSize: 10,

        // 3. Cadenas de Texto
        strSearch: '',
        strTitle: 'Lista de Productos',

        // 4. Objetos
        objFilter: {},
        objForm: {
            name: '',
            sku: ''
        },

        // 5. Listas / Arreglos
        lstProducts: [],
        lstCategories: []
    };
}
```

---

## 4. Nombramiento de Métodos y Funciones

- **Prefijo obligatorio `handle`**: Todos los métodos dentro del bloque `methods` de los componentes Vue **deben comenzar obligatoriamente con el prefijo `handle`**.
- Ejemplos: `handleGetData()`, `handleInitForm()`, `handleCreate()`, `handleUpdate()`, `handleDelete()`, `handleSearch()`, `handlePageChange()`.

---

## 5. Manejo de Peticiones y Asincronía

1. **Uso de Promesas**: Se prefiere el uso de cadenas de Promesas (`.then()`, `.catch()`, `.finally()`) sobre `async/await` dentro de los componentes Vue.
2. **Gestión del Spinner**: La variable `bSpinner` debe activarse a `true` al inicio del proceso y reiniciarse a `false` **única y exclusivamente en el bloque `.finally()`**.

---

## 6. Formato de Arreglos y Objetos Anidados (Ej. Columnas)

Para estructuras de datos como configuraciones de columnas en datatables, los objetos simples deben mantenerse en **una sola línea**. Si el objeto contiene propiedades anidadas complejas (como `typeAttributes`), se debe estructurar con saltos de línea e indentación clara para mantener la legibilidad, evitando líneas excesivamente largas.

### Ejemplo Correcto:
```javascript
columns: [
    { label: 'Code', fieldName: 'code', type: 'text', sortable: true },
    { label: 'Product', fieldName: 'name', type: 'text', sortable: true },
    { label: 'Status', fieldName: 'status', type: 'badge', typeAttributes: { 
        classMap: { 
            'En Stock': 'bg-success-transparent text-success',
            'Low Stock': 'bg-warning-transparent text-warning',
            'No Stock': 'bg-danger-transparent text-danger' 
        } 
    }},
    { label: 'Action', type: 'action', typeAttributes: { 
        rowActions: [ 
            { label: 'Edit', name: 'edit', icon: 'icon-pencil-line' }, 
            { label: 'Delete', name: 'delete', icon: 'icon-trash-2', class: 'text-danger' } 
        ] 
    }}
]
```

---

## 7. Validación de Formularios (VeeValidate + Yup)

Para formularios complejos y escalables, se utilizará el estándar de **Componentes de VeeValidate con Yup**:

1. **Uso de Componentes**: Se utilizarán los componentes `<Form>`, `<Field>` y `<ErrorMessage>` de `vee-validate` directamente en la plantilla HTML.
2. **Esquemas Reusables como Fuente de Verdad**: Las reglas de validación se definirán mediante esquemas de **Yup**. Se utilizará el método `.default()` en cada propiedad del esquema para generar dinámicamente la estructura inicial del formulario mediante `validationSchema.getDefault()`. Esto evita la duplicación de estructuras.
3. **No ensuciar el Javascript**: Toda la lógica de estado (valores, errores, estado de carga) es manejada automáticamente por `<Form>` usando propiedades y variables de `slot` (`v-slot="{ errors, isSubmitting, setValues }"`).
4. **Plantilla Limpia**: En vez de usar `<input v-model="campo">`, se utilizará `<Field name="campo" as="input">`. Las clases de CSS se inyectan tal cual como atributos.

### Ejemplo Básico:

**HTML:**
```html
<Form :validation-schema="validationSchema" :initial-values="initialData" @submit="handleSubmit" v-slot="{ errors, isSubmitting }">
    <label>Nombre</label>
    <Field name="name" as="input" type="text" :class="{'border-danger': errors.name}" />
    <ErrorMessage name="name" class="text-danger" />
    
    <button type="submit" :disabled="isSubmitting">Guardar</button>
</Form>
```

**Script:**
```javascript
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const validationSchema = yup.object({
    name: yup.string().default('').required('El nombre es obligatorio')
});

export default {
    components: { Form, Field, ErrorMessage },
    data() {
        return {
            validationSchema,
            initialData: validationSchema.getDefault() // ¡Autogenerado por Yup!
        };
    },
    methods: {
        handleSubmit(values) {
            this.handleSave(values);
        },
        handleSave(values) { /* Lógica de guardado */ }
    }
}
```
