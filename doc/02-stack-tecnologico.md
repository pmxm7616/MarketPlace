# Stack tecnológico propuesto

**Estado:** propuesto y aceptado como punto de partida; versiones, librerías e integraciones se revisarán antes de implementarse.

| Capa | Tecnología |
| --- | --- |
| Frontend | React 19 + Next.js 16 (App Router) |
| Lenguaje | TypeScript |
| Backend | Node.js 24 integrado en Next.js |
| Persistencia | PostgreSQL 16 |
| Acceso a datos | Drizzle ORM + `pg` |
| Estilos | CSS propio |
| Iconos y tipografía | Lucide, Nunito Sans y Baloo 2 |
| Contenedores | Docker + Docker Compose |
| Pruebas y análisis | Node.js test runner, TypeScript, ESLint y Oxlint |

## Servicios previstos para producción
- DigitalOcean Droplet: aplicación.
- DigitalOcean Managed PostgreSQL: base de datos.
- DigitalOcean Spaces: imágenes y objetos.
- Cloudflare: DNS/proxy, CDN, caché y protecciones según configuración.
- Facebook: único proveedor de login previsto.
- WhatsApp: contacto con vendedores.

**No se ha aprovisionado ni integrado ninguno de estos servicios.**

## Criterios de implementación
- Preferir componentes de servidor para contenido público SEO y minimizar JavaScript cliente.
- Separar consultas SQL y lógica de negocio de componentes UI.
- Usar migraciones versionadas de Drizzle y transacciones donde corresponda.
- Validar datos de entrada, permisos y propiedad de recursos en el servidor.
- Servir imágenes optimizadas; no almacenarlas en el filesystem efímero del Droplet.
- Mantener proveedores externos detrás de interfaces/adaptadores cuando aporte flexibilidad.
- Configuración por variables de entorno validadas; archivo `.env.example` sin secretos.

## Pendiente de evaluación
Librería concreta para OAuth/sesiones, uploads firmados, gestión de imágenes, herramientas de pruebas de carga, error tracking y métricas. No se presupone que Node.js test runner sustituya pruebas E2E.
