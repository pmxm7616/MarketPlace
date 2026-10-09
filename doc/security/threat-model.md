# Modelo de amenazas inicial

**Estado: borrador; revisar contra flujos aprobados antes de implementar.**

## Activos
Datos personales de usuarios/vendedores, sesión de Facebook, publicaciones, medios, credenciales BD/Spaces, panel admin, integridad de registros y disponibilidad.

## Fronteras de confianza
Cliente → Next.js; Next.js → PostgreSQL/Spaces/OAuth; app → Cloudflare; repositorio → CI/deploy; futuras instancias → caché compartida.

## Amenazas y contramedidas
- Suplantación de sesión → OAuth verificado, cookies seguras, protección CSRF.
- IDOR/BOLA → autorización de recurso en cada acción y tests negativos.
- XSS/inyección → sanitización contextual, parámetros SQL, CSP.
- Subida maliciosa → límites, revisión del contenido, permisos mínimos, procesamiento seguro.
- Scraping/abuso/spam → rate limiting, moderación y métricas.
- Fuga entre usuarios → DTO mínimos, caché pública solo para respuestas públicas, pruebas de aislamiento.
- Dependencias/código malicioso → lockfile, CI, revisión y scopes de token mínimos.
- Pérdida de datos → backups y restauración ensayada.
- Estado incoherente en varios Droplets → almacenamiento externo, estrategia de caché y sesiones compartidas donde aplique.

## Condiciones de salida
Antes de funcionalidad sensible: modelo de amenazas específico + pruebas de autorización + revisión independiente. No asumir cumplimiento normativo sin revisión legal.
