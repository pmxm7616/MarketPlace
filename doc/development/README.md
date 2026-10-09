# Guía de desarrollo

**Estado:** planificación. Aún no existen `package.json`, scripts, contenedores ni CI.

## Flujo esperado
1. Elegir tarea definida con [plantilla](task-template.md).
2. Leer [AGENTS.md](../../AGENTS.md) y docs relevantes.
3. Implementar en cambios pequeños.
4. Ejecutar scripts de verificación **cuando existan**.
5. Completar [plantilla de PR](pull-request-template.md) y checklist.

## Comandos previstos (no ejecutables todavía)
`npm run lint`, `npm run typecheck`, `npm test`, `npm run build`, `npm run test:integration` y `npm run test:e2e`. Los nombres son **propuesta**; se fijarán al crear package.json.

## CI futuro
Instalación reproducible, análisis estático, tests, build, comprobación de secretos y revisión de documentación. Reglas de protección de rama y checks obligatorios requieren configuración posterior en GitHub.
