# Registro de riesgos de desarrollo con IA

| ID | Riesgo | Prevención | Detección | Evidencia |
| --- | --- | --- | --- | --- |
| AI-01 | Requisitos inventados | Contrato APPROVED | Revisión de alcance | REQ y ADR |
| AI-02 | Arquitectura inconsistente | Límites modulares | Regla de imports futura | PR y lint |
| AI-03 | Código duplicado | APIs públicas y ownership | Revisión de duplicados futura | Diff |
| AI-04 | Abstracciones prematuras | Cambios mínimos | Revisión complejidad | ADR si excepcional |
| AI-05 | Tests tautológicos | REQ escritos antes de implementación | Revisión independiente | Matriz REQ/TEST |
| AI-06 | Test debilitado | Protección de diff | Revisión de tests | CI y PR |
| AI-07 | Código inseguro | Baseline de seguridad | SAST/pruebas negativas futuras | Logs CI |
| AI-08 | Dependencias inventadas | Lockfile y versiones verificadas | Instalación CI | Build |
| AI-09 | Dependencias vulnerables | Actualizaciones controladas | Auditoría futura | Reporte |
| AI-10 | Casos límite omitidos | Contratos de errores | Tests negativos | Test report |
| AI-11 | Regresión lateral | PR pequeños | Suite completa | CI |
| AI-12 | Migración incorrecta | Plan compatibilidad | DB integration | Migración y prueba |
| AI-13 | Caché inconsistente | TTL/invalidación | Tests multi-instancia | Test report |
| AI-14 | Fuga de datos | AuthZ por recurso | Pruebas de aislamiento | Tests negativos |
| AI-15 | Docs desactualizadas | Actualizar en mismo PR | Enlaces y checklist | Docs diff |
| AI-16 | Resultado inventado | Evidencia externa | CI obligatorio futuro | Logs reales |
| AI-17 | Pérdida de contexto | AGENTS/ADR | Auditoría documental | Decisiones |
| AI-18 | Cambios fuera de alcance | Plan y files scope | Revisión diff | PR |
| AI-19 | Prompt injection | Tratar inputs externos no confiables | Revisión de acciones | Permisos mínimos |
| AI-20 | Deriva de dependencias/versiones | Lockfile, política de upgrades | Auditoría actualización | CI |

## Priorización
Primero AI-01/05/06/07/12/14/16/19 (integridad y seguridad), después calidad y mantenimiento.

## Realidad de los controles
El workflow de gobernanza inicial solo comprueba documentación/contratos de proceso; no demuestra seguridad de una aplicación inexistente. SAST, E2E, tests de BD y límites automáticos se agregan al inicializar código.
