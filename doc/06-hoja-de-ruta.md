# Hoja de ruta y decisiones pendientes

## Fase 0 — Contexto (actual)
- [x] Acordar propósito de repositorio base reutilizable.
- [x] Documentar stack propuesto e infraestructura prevista.
- [x] Acordar monolito modular y escalabilidad progresiva.
- [x] Documentar optimización, caché y monitoreo desde el inicio.
- [ ] Revisar y cerrar decisiones funcionales y técnicas.

## Fase 1 — Diseño
- [ ] Determinar modelo comercial: anuncios/WhatsApp vs checkout/pagos.
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
