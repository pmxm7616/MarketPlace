# Hoja de ruta y decisiones pendientes

## Fase 0 — Contexto (actual)
- [x] Acordar propósito de repositorio base reutilizable.
- [x] Documentar stack propuesto e infraestructura prevista.
- [x] Acordar monolito modular y escalabilidad progresiva.
- [x] Documentar optimización, caché y monitoreo desde el inicio.
- [ ] Revisar y cerrar decisiones funcionales y técnicas.

## Fase 1 — Diseño
- [x] Modelo comercial: anuncios con contacto por WhatsApp, sin checkout/pagos.
- [ ] Definir módulos obligatorios, opcionales y contratos.
- [ ] Definir entidades, permisos, catálogo, búsqueda y moderación.
- [ ] Definir estrategia concreta de sesiones Facebook, caché y observabilidad.
- [ ] Definir objetivos medibles de rendimiento y seguridad.

## Fase 2 — Esqueleto técnico
- [ ] Inicializar Next.js 16/React 19/TypeScript/Node.js 24.
- [ ] Crear módulos, configuración, CSS y componentes genéricos.
- [ ] Configurar PostgreSQL, Drizzle, migraciones y seeds de ejemplo.
- [ ] Docker Compose para desarrollo y variables de entorno de muestra.
- [ ] Añadir tests, lint, typecheck, CI, health checks y logs.
- [ ] Preparar interfaces para Spaces, OAuth y WhatsApp.

## Fase 3 — Núcleo funcional
- [ ] Implementar módulos acordados sin branding específico.
- [ ] SEO, seguridad, permisos y moderación mínima.
- [ ] Medir y optimizar rutas críticas.
- [ ] Pruebas de integración, E2E, seguridad y carga.

## Fase 4 — Template
- [ ] Eliminar secretos, marcas y datos específicos.
- [ ] Crear guía de inicialización y checklist de personalización.
- [ ] Validar creación de un segundo proyecto desde la base.
- [ ] Activar **Template repository** en GitHub tras validación.

## Registro de pendientes
| Prioridad | Tema | Motivo |
| --- | --- | --- |
| Alta | Modelo de transacción/contacto | Determina arquitectura de dominio |
| Alta | Módulos comunes/opcionales | Determina estructura base |
| Alta | Facebook OAuth y sesiones | Seguridad e independencia por proyecto |
| Alta | Estrategia de caché y invalidación | Coherencia con múltiples instancias |
| Media | SLO, pruebas de carga y presupuesto | Dimensionamiento sustentado |
| Media | Moderación, abuso y privacidad | Riesgo operativo |
| Media | Búsqueda y filtros | Escalabilidad del catálogo |
| Media | Backups, RTO/RPO y despliegue | Continuidad operativa |

## Nota de mantenimiento
Cada decisión nueva debe registrarse en `doc/README.md` y actualizar la documentación afectada. Diferenciar claramente lo **acordado**, lo **propuesto**, lo **pendiente** y lo **implementado**.


## Avance de auditoría y gobernanza (2026-10-09)
- [x] Documentar riesgos específicos de vibecoding y medidas.
- [x] Crear fuente de verdad para alcance funcional **pendiente de aprobación**.
- [x] Crear plantillas de contratos, excepciones, gates y PR.
- [x] Añadir script y tests de integridad documental.
- [x] Crear workflow que ejecute esos controles en GitHub Actions.
- [ ] Confirmar ejecución verde del workflow remoto.
- [x] Diferir protección obligatoria de `main` durante la fase inicial (D-013).
- [x] Resolver alcance fundamental (D-014–D-021); continúan detalles en [checklist](product/decision-checklist.md).
- [ ] Convertir convenciones propuestas en configuración ejecutable (lint/TypeScript/tests) al crear scaffold.
- [ ] Realizar prueba negativa: romper un enlace en un PR y comprobar que el workflow falle.
- [ ] Establecer contratos y matriz REQ→TEST para primer módulo aprobado.

**Próximo hito:** scaffold técnico sin lógica comercial; cerrar contratos aún abiertos antes de implementar los módulos respectivos. No adelantar implementaciones de negocio basadas en supuestos.


### Ajuste acordado: política de ramas (2026-10-09)
- [x] Decidir que `main` permanecerá **sin protección obligatoria durante el inicio**.
- [ ] **Más adelante, si las necesidades lo justifican:** evaluar protección de ramas, aprobaciones y checks requeridos (no es una tarea bloqueante para empezar a desarrollar).
- [ ] Mantener y verificar CI como **señal informativa**, sin exigirlo para escribir en `main`.

La tarea anterior «Habilitar reglas de protección de `main` con checks obligatorios y aprobaciones» se considera **diferida por decisión expresa del responsable**. No solicitar su activación de nuevo como requisito del arranque.


## Plan de implementación detallado (2026-10-09)
El plan operativo vigente es [`doc/development/master-plan.md`](development/master-plan.md), con P0–P11 y tareas TASK. El alcance de producto ya fue aclarado en [especificación funcional](product/functional-specification.md):
- [x] Modelo comercial de contacto WhatsApp, sin pagos internos.
- [x] Registro Facebook, completar WhatsApp y username único.
- [x] Catálogo público, detalle, tienda, publicación, edición y baja.
- [x] Subida múltiple con conversión/optimización de imágenes como requisito.
- [ ] Cerrar decisiones de valores y casos extremos en [open-decisions.md](product/open-decisions.md).
- [ ] Aprobar contratos/modelo de datos y comenzar P1 técnico.
- [ ] Validar workflows de gobernanza existentes; `main` sigue sin protección por D-013.
