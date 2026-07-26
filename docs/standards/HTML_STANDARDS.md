# Estándar de Formateo HTML / Vue - NexusCloud

Este documento define las reglas de estilo y estructura para la escritura de plantillas HTML y Vue en el proyecto **NexusCloud**.

---

## 1. Formato de Etiquetas y Longitud Máxima de Línea

- **Longitud Estándar Recomendada**: Las líneas de código HTML / Vue deben mantenerse dentro de un rango de **180 a 200 caracteres**.
- **Atributos Inline**: Siempre que una etiqueta y sus atributos quepan dentro del límite de 180-200 caracteres, **deben mantenerse en una sola línea**.
- **Salto de Línea en Etiquetas Largas**: Si una etiqueta supera los 180-200 caracteres debido a múltiples clases de Tailwind o atributos largos:
  - Se permite dividir los atributos en líneas secundarias.
  - **REGLA CRÍTICA**: El carácter de cierre de la etiqueta de apertura (`>`) **NUNCA debe colocarse solo en una línea aislada**. Debe quedar pegado al final del último atributo.

---

## 2. Ejemplos de Formateo

### Ejemplo 1: Línea Estándar (<= 180-200 Caracteres)
```html
<button @click="handlePageChange(currentPage + 1)" :disabled="currentPage === totalPages" class="size-7 rounded-md text-sm border border-border-color hover:bg-light disabled:opacity-50">
    <i class="ph ph-caret-right text-sm"></i>
</button>
```

### Ejemplo 2: Etiqueta Larga (> 200 Caracteres) con Salto de Línea Correcto
```html
<button type="button" class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white"
    aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
    <i class="icon-funnel font-normal"></i> Filter <i class="icon-chevron-down"></i>
</button>
```

### Ejemplo Incorrecto (PROHIBIDO):
```html
<!-- INCORRECTO: Cierre '>' aislado en su propia línea -->
<button 
    type="button" 
    class="hs-dropdown-toggle cursor-pointer btn-sm bg-white border border-border-color text-gray-900 inline-flex items-center gap-2 hover:bg-primary hover:border-primary hover:text-white"
    aria-haspopup="menu"
    aria-expanded="false"
    aria-label="Dropdown"
>
    <i class="icon-funnel font-normal"></i> Filter
</button>
```

---

## 3. Reglas de Estructura Visual
1. **Semántica HTML5**: Utilizar etiquetas semánticas (`<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
2. **Indentación**: Indentación de 2 espacios por nivel jerárquico.
3. **Imágenes**: Todas las etiquetas `<img>` deben incluir el atributo `alt` explícito.
