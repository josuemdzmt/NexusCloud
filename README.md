# NexusCloud ☁️

**NexusCloud** es una plataforma moderna de gestión empresarial (ERP/CRM) diseñada para centralizar, automatizar y simplificar los procesos de negocio. Actúa como el punto de conexión (el *Nexo*) entre las diferentes áreas de tu empresa, operando íntegramente en la nube (*Cloud*) para ofrecer disponibilidad, escalabilidad y seguridad.

## ¿Qué significa NexusCloud?
El nombre se compone de dos conceptos fundamentales:
- **Nexus (Nexo):** Representa el núcleo o punto central donde convergen todas las operaciones de la empresa. NexusCloud integra ventas, inventario, finanzas, compras y clientes en un solo ecosistema unificado.
- **Cloud (Nube):** Simboliza la infraestructura subyacente. Una solución moderna, siempre disponible, accesible desde cualquier lugar y respaldada por tecnología de última generación.

## Tecnologías Principales
Este repositorio contiene la aplicación **Frontend** de NexusCloud, construida utilizando las mejores prácticas y tecnologías modernas:
- **Vue.js 3** (Framework reactivo para interfaces de usuario fluidas)
- **Vite** (Herramienta de compilación ultrarrápida)
- **Tailwind CSS** (Framework de utilidades para el diseño rápido y responsivo)
- **VeeValidate & Yup** (Para el manejo robusto y validación de formularios)

## Arquitectura
NexusCloud está diseñado bajo una arquitectura modular y desacoplada:
- **Frontend (NexusCloud):** Este repositorio. Se encarga de toda la experiencia de usuario (UX/UI), renderizado de componentes y consumo de APIs.
- **Backend (Vertex):** Repositorio separado (basado en Laravel) que maneja la lógica de negocio, seguridad, y la base de datos a través de una robusta arquitectura de dominio (`Domain-Driven Design`).

## Estructura del Proyecto
- `src/views/pages/`: Contiene los módulos principales del sistema (Ventas, Inventario, Compras, etc.).
- `src/components/nexus/`: Componentes globales y reutilizables del sistema (tablas, modales, formularios).
- `src/services/`: Capa de servicios para la comunicación con el Backend (API Vertex).
- `docs/standards/`: Documentación estricta de las reglas y estándares de código (HTML/Vue y JS) que todo desarrollador debe seguir en este proyecto.

## Comenzando
Para ejecutar NexusCloud en modo de desarrollo local:
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo (Vite)
npm run dev
```

---
*NexusCloud - Centralizando el futuro de tu negocio.*
