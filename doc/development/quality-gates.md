# Puertas de calidad y definición de terminado

**Estado:** obligatoriedad del proceso aprobada; implementación progresiva.

| Gate | Cuándo | Mecanismo | Situación |
| --- | --- | --- | --- |
| G0 | Toda tarea | Especificación y REQ | Documentado |
| G1 | Toda entrega | Enlaces y archivos mínimos | Script + CI a incorporar |
| G2 | Código TypeScript | Types/lint/formatter | Pendiente de scaffold |
| G3 | Lógica de negocio | Unit e integración | Pendiente |
| G4 | Flujos críticos | E2E y auth negativa | Pendiente |
| G5 | Cambios sensibles | Revisión humana y ADR | Proceso definido |
| G6 | Integración a main | Checks requeridos + aprobación | Configuración GitHub pendiente |
| G7 | Producción | Observabilidad, rollback, backup | Pendiente |

## No negociables
- `NOT RUN` no equivale a `PASS`.
- No se aprueba una funcionalidad si fallan sus controles obligatorios.
- No se modifica criterio de aceptación unilateralmente.
- Tests que pasan no garantizan seguridad; controles por riesgo.
- Documentación propuesta no equivale a implementación.
- Un archivo de workflow no garantiza bloqueo de merge: configurar branch protection/ruleset en GitHub.

## Evidencias esperadas
REQ→TEST, comando, resultado, enlace a ejecución CI cuando exista y revisión del diff.
