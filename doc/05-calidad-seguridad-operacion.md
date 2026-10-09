# Calidad, seguridad y operación

## Desde la primera implementación
- TypeScript estricto; ESLint y Oxlint; formateo consistente.
- Pruebas unitarias y de integración (Node.js test runner donde aplique).
- Pruebas E2E y de carga: herramienta por seleccionar.
- CI con instalación reproducible, lint, typecheck, tests y build.
- Logs estructurados sin secretos ni datos sensibles.
- Métricas, trazas y alertas de errores/latencia.
- Backups de PostgreSQL y ejercicios de restauración.
- Revisión de dependencias y actualizaciones de seguridad.

## Seguridad
- OAuth con Facebook: validar estado/nonce, callback, sesiones, expiración y revocación; no asumir que Facebook entrega todos los datos requeridos.
- Permisos por rol y propiedad de publicaciones verificados del lado servidor.
- Validación de entrada, consultas parametrizadas y protección CSRF cuando corresponda.
- Rate limiting, protección de abuso y moderación de publicaciones.
- Uploads con límites de tamaño/tipo, validación de contenido, nombres seguros y permisos mínimos de Spaces.
- HTTPS, cookies seguras, CSP y cabeceras apropiadas.
- Secretos en configuración segura, nunca en Git ni imágenes Docker.
- Política de privacidad, retención y eliminación de datos a definir según operación en Bolivia.

## Rendimiento y SEO
- Metadatos, canonical, sitemap, robots y datos estructurados cuando correspondan.
- Core Web Vitals, carga diferida, imágenes responsive y paginación.
- Evitar hidratar páginas completas sin necesidad.
- Cachear solo contenido apropiado; invalidar tras cambios en publicaciones.

## Operación
- Entornos local, staging y producción separados.
- Migraciones versionadas con plan de rollback/compatibilidad.
- Health/readiness checks, deploy reproducible y monitoreo postdeploy.
- Documentar runbooks para caída de app, BD, proveedor OAuth, Spaces y CDN.
- Establecer presupuestos y alertas de costos.

## Checklist antes de cada lanzamiento derivado del template
- Configuración de marca y dominio.
- Variables de entorno y secretos exclusivos.
- Base de datos propia y migraciones.
- OAuth Facebook configurado por sitio.
- Spaces/bucket y políticas de acceso.
- WhatsApp y textos legales específicos.
- Backup restaurable, alertas, SEO, seguridad y pruebas de carga.

**Estado:** estándares propuestos; no implementados todavía.
