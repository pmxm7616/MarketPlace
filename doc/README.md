# Documentación de MarketPlace

**Actualización inicial:** 2026-10-09. **Estado:** diseño, sin implementación.

## Propósito
Preservar decisiones, hipótesis, restricciones y pendientes para que el desarrollo de la base reutilizable conserve su contexto.

## Lectura recomendada
1. [Visión y alcance](01-vision-y-alcance.md)
2. [Stack tecnológico](02-stack-tecnologico.md)
3. [Arquitectura](03-arquitectura.md)
4. [Infraestructura y escalamiento](04-infraestructura-y-escalamiento.md)
5. [Calidad, seguridad y operación](05-calidad-seguridad-operacion.md)
6. [Hoja de ruta y decisiones pendientes](06-hoja-de-ruta.md)

## Convenciones de decisión
- **Acordado:** intención aprobada para guiar diseño.
- **Propuesto:** recomendación pendiente de validación o detalles.
- **Pendiente:** decisión abierta; no asumir como implementada.
- **Implementado:** solamente después de existir código/configuración verificados.

## Registro de decisiones (ADR resumido)
| ID | Estado | Decisión | Motivo |
| --- | --- | --- | --- |
| D-001 | Acordado | Repositorio reutilizable para proyectos independientes | Personalización y despliegue por marketplace |
| D-002 | Acordado | Monolito modular Next.js full-stack inicialmente | Menor complejidad operativa |
| D-003 | Acordado | Optimización, caché y monitoreo desde la primera versión | Rendimiento observable desde el lanzamiento |
| D-004 | Acordado | Diseñar para escalado horizontal futuro | Evitar reescrituras |
| D-005 | Acordado | No exigir Redis/Valkey en la primera versión | Mantener la base ligera |
| D-006 | Propuesto | DigitalOcean + Cloudflare como despliegue | Servicios previstos; detalles por validar |
| D-007 | Pendiente | Flujo comercial: anuncios/WhatsApp o checkout y pagos | Define entidades y complejidad del dominio |
| D-008 | Pendiente | Estrategia de autenticación Facebook y manejo de sesiones | Seguridad y configuración por sitio |

Al cambiar una decisión, actualizar el documento afectado, esta tabla y la fecha de revisión. No convertir estimaciones de capacidad en garantías.
