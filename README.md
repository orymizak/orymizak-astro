# Landing Portfolio – Astro

Portfolio personal construido con Astro, pensado para ser rápido, accesible y fácil de mantener.  
Incluye soporte multilenguaje (ES/EN), diseño modular y componentes reutilizables.

---

## Tecnologías usadas

- Astro  
- React  
- TypeScript  
- TailwindCSS  
- SCSS  
- Node.js  

## Recursos de terceros
- Icons by Icons8  

---

## Idiomas

El sitio soporta los siguientes idiomas:

- Español (`/es`)
- Inglés (`/en`)

El manejo de rutas se realiza utilizando `i18n.mode = "manual"` y middleware personalizado para gestionar rutas no definidas y redirecciones.

---

## Estructura del proyecto

```
/
├─ src/
│  ├─ components/   
│  ├─ layouts/
│  ├─ i18n/
│  ├─ middleware.ts
│  ├─ pages/
│  │  └─[locale]/
│  │    ├─ index.astro
│  │    └─ ...
└─ astro.config.mjs
```

---

## Características principales

- Arquitectura modular basada en componentes.  
- Routing multilenguaje con carpetas dinámicas `[locale]`.  
- Carga dinámica de textos desde un módulo centralizado en `src/i18n/`.  
- Layout reutilizable con `BaseLayout`.  
- Drawer responsivo y secciones organizadas por página.  
- Animaciones suaves y diseño moderno basado en TailwindCSS.  
- Imágenes optimizadas y carga eficiente.

---

## Versionamiento

### 0.0.2 – Soporte de idiomas
- Implementación de i18n en modo manual.  
- Carpetas dinámicas para ES/EN.  
- Integración de textos multilenguaje mediante `getTexts()`.  
- Middleware para gestionar rutas y normalización de paths.

### 0.0.1 – Layout inicial
- Creación de estructura base del proyecto.  
- Implementación del layout principal.  
- Drawer, Footer y estructura inicial de la página Home.

---

## Scripts disponibles

```
npm install
npm run dev
npm run build
npm run preview
```

---

## Licencia

MIT.
