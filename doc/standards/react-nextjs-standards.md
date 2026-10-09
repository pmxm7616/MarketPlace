# React 19 y Next.js 16

**Estado:** propuesta. Revisar API exacta al inicializar versiones.

- App Router; Server Components por defecto. Añadir `"use client"` únicamente para interactividad necesaria.
- Mantener límites servidor/cliente explícitos: secretos, SQL, tokens y autorización nunca en cliente.
- Componentes presentacionales pequeños; extraer lógica de negocio a casos de uso.
- Handlers/Server Actions validan identidad, permisos y datos en cada operación; no confiar en ocultar botones.
- Formularios accesibles con etiquetas, estados de carga, errores y feedback.
- No crear waterfalls evitables; preferir carga paralela cuando sea segura.
- SEO para páginas públicas: metadata, canonical, sitemap, robots y datos estructurados donde proceda.
- Imágenes responsive, tamaños definidos, lazy loading apropiado y optimización.
- Cachear únicamente datos públicos apropiados; definir TTL e invalidación tras cambios.
- No cachear contenido de usuario autenticado de forma compartida.
- Multi-instancia: planificar coordinación de caché, claves de Server Actions, versiones y despliegues.
- No acceder a variables de entorno privadas desde bundles cliente.
- Mantener handlers delgados; evitar acoplar directamente Drizzle a JSX.

## Pruebas recomendadas
Comportamiento accesible, estados de error, validación, autorización, metadata y rutas críticas E2E. No basarse únicamente en snapshots.
