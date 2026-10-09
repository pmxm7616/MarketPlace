# CSS propio

**Estado:** propuesta.

- CSS nativo, sin framework utilitario obligatorio.
- Tokens CSS para colores, tipografía, espacios, radios, sombras y breakpoints.
- Clases en `kebab-case`; nombres semánticos, no dependientes de color/posición cuando se pueda.
- Preferir CSS Modules para estilos locales; globales solo para reset, tokens y tipografía.
- Evitar selectores excesivamente específicos, `!important` habitual y estilos inline dinámicos innecesarios.
- Responsive mobile-first; accesibilidad de contraste, foco visible y preferencias de movimiento reducido.
- Fuentes previstas: Nunito Sans y Baloo 2; revisar licencias, carga y fallbacks.
- Lucide como biblioteca de iconos; accesibilidad para iconos decorativos y accionables.
- Cada sitio derivado podrá reemplazar tokens/branding sin modificar componentes de dominio.
- No incluir marcas, paletas o categorías específicas en el núcleo.
- Verificar visualmente estados responsive, loading, empty, error, focus y disabled.
