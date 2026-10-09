# Plan maestro de desarrollo — MarketPlace Template

**Versión:** 0.1 | **Fecha:** 2026-10-09 | **Estado:** PLAN PROPUESTO para implementación progresiva, sujeto a decisiones de detalle.

## Objetivo y definición de MVP
Marketplace web reutilizable: visitante navega catálogo, detalle y tienda; vendedor inicia sesión exclusivamente con Facebook, completa username único y WhatsApp, publica artículos con nombre, descripción, precio y galería, edita y da de baja sus artículos; visitante lo contacta por WhatsApp con mensaje predefinido. Sin compra ni pagos en plataforma.

**Fuentes de verdad:** [especificación funcional](../product/functional-specification.md), [decisiones pendientes](../product/open-decisions.md), [modelo lógico](../product/data-model.md), [pantallas](../product/screens-and-routes.md), [imágenes](../product/image-processing.md), [contratos](../architecture/domain-contracts.md), [gates](quality-gates.md).

## Principios de ejecución
- Pequeñas tareas en secuencia de dependencias. No habilitar producto por adelantado si faltan decisiones bloqueantes.
- Cada tarea debe tener TASK-ID, scope, archivos, criterios REQ, pruebas TEST, evidencia, rollback y actualización documental.
- Aplicar [protocolo Codex](../ai-governance/task-protocol.md), [AGENTS.md](../../AGENTS.md) y [plantilla](task-template.md).
- No proteger `main` por ahora (D-013). Comprobaciones informativas y reporte honesto.
- Ningún despliegue productivo ni integraciones reales sin revisión de seguridad, configuración y privacidad.
- No prometer fechas ni capacidades sin estimación basada en trabajo medido.

## Mapa de dependencias
```text
P0 decisiones detalladas
  ↓
P1 scaffold / tooling / CI
  ↓
P2 infraestructura local / DB / esquema base
  ├── P3 OAuth Facebook + sesiones → onboarding + perfil
  ├── P4 almacenamiento + pipeline de imágenes
  └── P5 componentes y diseño básico público
        ↓
P6 casos de uso y gestión de artículos (requiere P3 y P4)
        ↓
P7 catálogo, detalle y tienda (requiere P6)
        ↓
P8 WhatsApp / SEO / accesibilidad
        ↓
P9 seguridad, pruebas E2E, rendimiento y monitoreo
        ↓
P10 deploy staging y validación template
        ↓
P11 readiness producción (solo previa aprobación)
```

## P0 — Cierre de contratos funcionales (sin código)
- TASK-0001: validar decisiones de [open-decisions.md](../product/open-decisions.md): username, WhatsApp, límites de imágenes, precio/moneda, baja, mensajería, moderación, retención.
- TASK-0002: aprobar rutas, estados del artículo y matriz rol/acción.
- TASK-0003: aprobar esquema lógico, migración inicial y contratos de operaciones.
- **Entregables:** ADR(s) aprobadas, tablas de estados, matriz de permisos, REQ→TEST actualizada.
- **Gate:** ningún supuesto crítico permanece sin etiquetar; firmas y restricciones mínimas definidas.
- **Paralelo permitido:** preparar scaffold neutral sin implementar negocio.

## P1 — Base reproducible y verificaciones
- TASK-0101: Next.js 16 + React 19 + TypeScript estricto + Node.js 24; CSS Modules + tokens.
- TASK-0102: configuración consistente: ESLint, Oxlint, formatter elegido, alias TS, `.editorconfig`, `.gitignore`.
- TASK-0103: dependencias fijadas/lockfile, validación de env, `.env.example` sin secretos.
- TASK-0104: Node test runner para dominio, herramienta E2E por confirmar, tests de humo.
- TASK-0105: ampliar workflow GitHub Actions para `typecheck`, `lint`, `test`, `build`, checks de seguridad de dependencias; mantener checks informativos.
- TASK-0106: pruebas negativas de CI: introducir tipo erróneo/test fallido en entorno de prueba y comprobar señal roja.
- **Entregables:** app inicial renderiza, scripts reproducibles, documentación de desarrollo y evidencia CI.
- **Gate:** build limpio reproducible, tests y lint sin errores; resultados realmente ejecutados.

## P2 — Persistencia y entorno local
- TASK-0201: Docker Compose local: app + PostgreSQL 16, health checks, persistencia de desarrollo, sin credenciales reales.
- TASK-0202: Drizzle + pg, migraciones iniciales aprobadas, constraints y seeds sintéticas.
- TASK-0203: base de repositorios y adaptadores; contratos desacoplados de Drizzle.
- TASK-0204: pruebas de integración con PostgreSQL aislado y migraciones desde cero.
- TASK-0205: configuración de almacenamiento (interfaz), fake local de pruebas y adaptador Spaces sin secretos en repo.
- **Gate:** migrar y reiniciar base de prueba; impedir duplicados y violaciones de FK; pruebas automatizadas.
- **Cuidado:** no diseñar IDs/schema sin aprobación P0.

## P3 — Identidad, sesión y onboarding
- TASK-0301: seleccionar y registrar librería OAuth/sesiones, alcance mínimo y manejo de fallos.
- TASK-0302: integración Facebook login/callback, estado de sesión, logout, cookies seguras y CSRF según flujo.
- TASK-0303: onboarding con username único (BD + UX de conflictos) y WhatsApp normalizado.
- TASK-0304: guard de perfil completo para acciones de vendedor; configuración por proyecto.
- TASK-0305: tests de autenticación con proveedor simulado; sesiones vencidas, callbacks erróneos, duplicados y autorización negativa.
- **Gate:** visitante navega sin login; vendedor no publica sin WhatsApp; cuentas duplicadas no generan vendedores duplicados; tokens protegidos.

## P4 — Pipeline de imágenes
- TASK-0401: definir límites y contratos de upload, formatos y quotas.
- TASK-0402: Sharp: decode seguro, orientación, retirada metadata, variantes WebP e indicadores de tamaño.
- TASK-0403: subida a Spaces, claves únicas, permisos mínimos, URLs de distribución y retry.
- TASK-0404: galería: selección múltiple, preview, orden, eliminar/reemplazar.
- TASK-0405: limpieza de objetos huérfanos y consistencia BD/Spaces.
- TASK-0406: tests de archivos inválidos, corruptos, gigantes, metadata, permisos y fallos de proveedor.
- **Gate:** no se publica artículo referenciando imágenes no disponibles; variantes accesibles y sin GPS/EXIF.

## P5 — Sistema visual y navegación básica
- TASK-0501: layout responsive, tipografía, tokens CSS y componentes accesibles.
- TASK-0502: navegación principal, formularios, tarjetas, galería y estados vacío/error/carga.
- TASK-0503: composición UI desacoplada de adaptadores y contratos de dominio.
- TASK-0504: tests de componentes e interacción, accesibilidad automatizada básica y revisión visual móvil.
- **Gate:** comportamiento teclado, etiquetas y contraste; sin dependencia de branding concreto.

## P6 — Publicaciones y gestión del vendedor
- TASK-0601: crear publicación con perfil autorizado, validación de nombre/descripcion/precio/imágenes.
- TASK-0602: edición por propietario con protección frente a operaciones concurrentes.
- TASK-0603: baja de producto y invalidación apropiada; definir si reactivación forma parte del MVP.
- TASK-0604: dashboard «Mis productos» con estados y paginación.
- TASK-0605: integration tests de contratos, ownership, transacciones y fallos en almacenamiento.
- **Gate:** ningún vendedor puede modificar ítems ajenos; retirados no aparecen en público; no hay registros parciales visibles.

## P7 — Catálogo, detalle y tienda
- TASK-0701: home/catálogo público paginado con tarjetas e imagen principal.
- TASK-0702: detalle con galería responsive, precio, descripción, información pública de vendedor.
- TASK-0703: tienda por username único, con título «Tienda de {username}» y activos propios.
- TASK-0704: consultas eficientes, índices, estados vacío/no encontrado y SEO técnico base.
- TASK-0705: pruebas anónimas de navegación, visibilidad por estado, paginación, username y consultas.
- **Gate:** no se muestran inactivos ni datos privados; rutas públicas accesibles sin sesión.

## P8 — Contacto por WhatsApp y pulido SEO
- TASK-0801: enlace `https://wa.me/{phone}?text={encodeURIComponent(message)}` armado solo con datos válidos.
- TASK-0802: mensaje predefinido configurable por cada marketplace, con título y URL canónica.
- TASK-0803: metadata, canonical, sitemap de activos y tiendas; robots/noindex para privados.
- TASK-0804: tests de formato E.164, encoding de texto y caracteres especiales, salida externa segura.
- **Gate:** contacto funciona sin autenticación y apunta al vendedor correcto.

## P9 — Verificación integral y endurecimiento
- TASK-0901: E2E invitado→detalle→tienda→WhatsApp y vendedor→Facebook simulado→perfil→publicar→editar→baja.
- TASK-0902: seguridad: authz cruzada, abuso uploads, CSRF, datos privados, headers, inyección, rate limiting.
- TASK-0903: rendimiento y SEO: Core Web Vitals, carga/listados, tamaños imágenes, índices y caché.
- TASK-0904: observabilidad: logs sin PII, health endpoints, error tracking y alertas según servicios elegidos.
- TASK-0905: pruebas de regresión, restauración backup, escenarios de proveedor fallido y retries.
- **Gate:** sin fallos críticos abiertos; resultados de pruebas reproducibles; presupuesto de performance por validar.

## P10 — Staging y validación de template
- TASK-1001: pipeline de Docker de producción y guía de despliegue DigitalOcean Droplet, Managed PostgreSQL, Spaces y Cloudflare.
- TASK-1002: staging independiente de producción, variables de entorno y secrets management.
- TASK-1003: ejecución smoke tests y backups/restauración en staging.
- TASK-1004: crear **dos** derivados del template con branding/config separados y verificar independencia.
- TASK-1005: guía «crear nuevo marketplace», lista de personalización, migraciones y límites de actualización del template.
- **Gate:** creación repetible de marketplace derivado sin cambios manuales en core; sin secretos compartidos.

## P11 — Preparación productiva, solo cuando se apruebe
- TASK-1101: requisitos legales y política de contenido, privacidad y eliminación de cuenta.
- TASK-1102: dominio real, Facebook app apta para producción, permisos/URLs y WhatsApp válidos.
- TASK-1103: backups, monitoreo, disaster recovery, costos y límites de cuenta.
- TASK-1104: pruebas de carga realistas y runbooks; capacidad determinada por métricas.
- **Gate:** aprobación humana explícita de lanzamiento.

## Criterios generales Definition of Done
- Tarea tiene REQ/TEST y evidencia real; tipo/lint/test/build pasan cuando aplican.
- Tests negativos para permisos y recursos ajenos.
- Migraciones consistentes y reversibilidad documentada.
- Documentación y ADR actualizados **en el mismo cambio**.
- Se revisan efectos sobre caché, SEO, datos privados y multi-instancia.
- Ningún resultado `NOT RUN` se informa como `PASS`.

## Riesgos que afectan planificación
Facebook App Review/configuración externa, variaciones de formatos de imágenes, costos de carga de imágenes, spam/fraude, privacidad por exhibición de teléfonos, consistencia entre BD/Spaces y escalamiento de procesamiento. Registrar en [riesgos IA](../ai-governance/vibecoding-risks.md) y modelo de amenazas.

## Principio de tiempo
No establecer duración o fecha de entrega sin medir esfuerzo, prioridades y dependencias. Cada TASK permite descomposición adicional en issues.
