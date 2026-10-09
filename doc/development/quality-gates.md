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


## Primer control creado
- `scripts/check-governance.mjs`: verifica presencia de rutas esenciales, encabezados H1 y enlaces Markdown relativos.
- `tests/governance.test.mjs`: pruebas del validador.
- `.github/workflows/governance.yml`: ejecuta esas pruebas y el validador en push/PR.

**Alcance limitado:** no valida aún cobertura de REQ→TEST, normativa semántica, compilación, SAST, autorización, migraciones ni branch protection. No marcar esos gates como satisfechos.


## Política temporal para `main` (D-013, 2026-10-09)
Durante la fase inicial **no se configurará branch protection ni aprobación obligatoria**. La puerta G6 («checks requeridos + aprobación») pasa a estado **DIFERIDA**, no bloquea cambios ni la inicialización del proyecto. Los scripts de validación y GitHub Actions se conservan para ofrecer retroalimentación, y los agentes deben informar resultados reales. La protección se reconsiderará únicamente cuando el proyecto madure y su responsable así lo decida.
