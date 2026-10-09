# Jerarquía de decisiones y excepciones

**Acordado como proceso de trabajo; las decisiones funcionales permanecen pendientes.**

## Fuentes de verdad (orden para tareas del repositorio)
1. Solicitud explícita actual del responsable del proyecto.
2. ADR aprobado y requisitos de tarea aprobados.
3. Contratos funcionales aprobados.
4. Estándares normativos y AGENTS.md.
5. Implementación existente y pruebas (evidencia, no autoridad sobre requisitos).
6. Ejemplos e ideas propuestas.

Si existe contradicción, detener únicamente la parte afectada y registrar el conflicto; no elegir por intuición. Normas de seguridad críticas no se ignoran sin análisis y aprobación explícita.

## Estados
- `PROPOSED`: propuesta no autorizada para decidir producto.
- `APPROVED`: decisión autorizada por responsable.
- `IMPLEMENTED`: evidencia de código integrado + controles aplicables.
- `DEPRECATED`: reemplazado, enlazar sucesor.
- `BLOCKED`: requiere decisión.

No convertir `PROPOSED` a `APPROVED` por el simple hecho de escribir un documento.

## Excepciones
Requieren: ID, norma que se exceptúa, motivo, alcance, riesgo, compensación, responsable y fecha de revisión. Excepciones de alto riesgo necesitan aprobación humana. No usar comentarios para desactivar controles silenciosamente.

## Cambios de documentación
Si se modifica código que afecta contrato/arquitectura, actualizar docs en el mismo PR. Los tests no reemplazan un registro de decisión.
