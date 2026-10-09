# Protocolo de tareas para Codex y otros agentes

## 1. Definir
Registrar objetivo, contexto, límites, criterios de aceptación numerados, contratos afectados, riesgos, pruebas requeridas y definición de terminado. Usar [plantilla](../development/task-template.md).

## 2. Planificar
Para cambios multiarchivo o sensibles: propuesta breve con dependencias, pasos y rollback. Resolver incertidumbres de producto antes de codificar.

## 3. Implementar
Cambios pequeños y revisables. Mantener límites de módulos, nomenclatura, seguridad, migraciones y documentación pertinente. No cambiar tests para ocultar errores.

## 4. Verificar
Ejecutar checks disponibles: formato, lint, tipos, tests focalizados, integración, build y E2E según riesgo. Comprobar diff y ausencia de secretos. Si no hay entorno o comandos, declarar `NOT RUN`.

## 5. Contrastar
Crear matriz REQ → TEST → resultado; revisar que cada criterio está satisfecho y que no hay regresiones. Contrastar contra especificación, no solo contra pruebas escritas por el mismo agente.

## 6. Entregar
Resumen, archivos modificados, decisiones, comandos/resultados, riesgos pendientes y pasos manuales. No afirmar aprobación/merge/despliegue no verificado.

## Niveles de riesgo
- Bajo: docs/cambios locales sin comportamiento.
- Medio: UI, lógica de catálogo, adaptadores.
- Alto: auth, permisos, pagos si se aprueban, migraciones destructivas, datos privados, despliegue.

Riesgo alto exige revisión humana y pruebas negativas específicas.
