# Reglas del Proyecto NexusCloud

Para consultar y mantener los estándares del proyecto de forma centralizada sin duplicidad, todas las reglas de código e interfaz se encuentran definidas en la carpeta `docs/standards/`:

1. **[Estándar de Formateo HTML / Vue](file:///Users/josuemendez/Documents/GitHub/NexusCloud/docs/standards/HTML_STANDARDS.md)**
   - Rango de 180 a 200 caracteres por línea.
   - Atributos inline y cierre `>` pegado al último atributo (sin líneas aisladas).

2. **[Estándar de Código JavaScript / Vue](file:///Users/josuemendez/Documents/GitHub/NexusCloud/docs/standards/CODING_STANDARDS.md)**
   - Notación húngara (`b`, `num`, `str`, `obj`, `lst`).
   - Orden estricto de variables en `data()` (Booleanos -> Números -> Textos -> Objetos -> Listas).
   - Prefijo obligatorio `handle` para métodos.
   - Manejo de asincronía con Promesas (`.then()`, `.catch()`, `.finally()`) y control de `bSpinner`.

> **Nota**: Para realizar cambios o agregar nuevas reglas al proyecto, edita directamente los archivos dentro de [docs/standards/](file:///Users/josuemendez/Documents/GitHub/NexusCloud/docs/standards/).
