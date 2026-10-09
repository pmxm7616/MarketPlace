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


## Gobernanza de desarrollo con Codex (2026-10-09)
- [Instrucciones automáticas para agentes](../AGENTS.md)
- [Límites modulares](architecture/module-boundaries.md)
- [Estándares de código](standards/README.md)
- [Estrategia de pruebas](testing/testing-strategy.md), [cobertura](testing/coverage-policy.md) y [aceptación](testing/acceptance-criteria.md)
- [Seguridad](security/security-baseline.md)
- [Reglas de agentes](ai-governance/agent-rules.md), [protocolo](ai-governance/task-protocol.md) y [revisión](ai-governance/review-checklist.md)
- [Plantilla de tarea](development/task-template.md), [plantilla de PR](development/pull-request-template.md) y [guía de desarrollo](development/README.md)
- [Registro de ADR](decisions/README.md)
- [Investigación y fuentes Codex](ai-governance/codex-research.md)

**Nota:** las reglas documentales están disponibles; aún no existen aplicación, pruebas ejecutables ni CI configurado.


## Auditoría de integridad y controles iniciales (2026-10-09)
- [Alcance del núcleo y preguntas bloqueantes](product/core-scope.md)
- [Contratos del dominio](architecture/domain-contracts.md)
- [API y compatibilidad](architecture/api-and-compatibility.md)
- [Modelo de extensiones](architecture/extension-model.md)
- [Jerarquía de decisiones y excepciones](ai-governance/decision-policy.md)
- [Riesgos del desarrollo con IA](ai-governance/vibecoding-risks.md)
- [Puertas de calidad y estado de implementación](development/quality-gates.md)
- [Modelo de amenazas](security/threat-model.md)
- [Control automático de gobernanza](../scripts/check-governance.mjs) y [tests](../tests/governance.test.mjs)
- [Workflow de GitHub Actions](../.github/workflows/governance.yml)
- [Plantilla de Pull Request](../.github/pull_request_template.md)

**Distinción crítica:** workflow creado ≠ checks ejecutados ≠ rama protegida. El primer control valida archivos/enlaces; el resto de pruebas de aplicación permanece pendiente hasta implementar el scaffold.

### Registro adicional de decisiones
| ID | Estado | Decisión | Motivo |
| --- | --- | --- | --- |
| D-009 | Acordado | Requisitos funcionales aprobados antes de comportamiento de producto | Evitar invención por IA |
| D-010 | Acordado | Gates progresivos y evidencia verificable | Evitar pruebas fabricadas |
| D-011 | Acordado | Documentación sincronizada en el mismo cambio | Reducir deriva del contexto |
| D-012 | Pendiente | Habilitar protección de rama y revisión obligatoria | Depende de configuración GitHub |


### D-013 — Protección de `main` diferida (2026-10-09)
**Estado: ACORDADO.** Durante la fase inicial de creación del proyecto **no se habilitará protección obligatoria de la rama `main`**. El equipo podrá trabajar directamente en `main` sin bloqueos de aprobación ni checks requeridos. Los workflows de calidad que existan seguirán siendo informativos y se revisarán sus resultados, pero no bloquearán integraciones. Revisar esta decisión antes de incorporar colaboradores, preparar despliegues productivos o estabilizar una primera versión. Esta decisión reemplaza la urgencia expresada en D-012, que queda **diferida**, no cancelada.
