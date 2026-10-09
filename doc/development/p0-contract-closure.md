# P0 — Cierre de contratos y decisiones

**Estado:** en curso · 2026-10-09. No se ha implementado código de negocio.

## Entregables revisables
1. [Contratos por operación y casos negativos](../product/contracts-mvp-v1.md).
2. [Especificación aprobada](../product/functional-specification.md).
3. [Matriz de permisos y estados](../product/permissions-and-states.md).
4. [Modelo lógico provisional](../product/data-model.md).
5. [Decisiones aprobadas y preguntas restantes](../product/open-decisions.md).

## Reglas de aceptación de P0
- P0-REQ-01: ningún parámetro ya aprobado vuelve a aparecer como meramente propuesto.
- P0-REQ-02: cada operación sensible incluye quién puede ejecutarla y un caso negativo.
- P0-REQ-03: todos los cambios de estado tienen política de visibilidad.
- P0-REQ-04: cambios de galería no crean referencias permanentes a archivos inexistentes.
- P0-REQ-05: toda pregunta no respondida se identifica explícitamente; el agente no decide en silencio.
- P0-REQ-06: conflictos de username y accesos a publicaciones ajenas están cubiertos.
- P0-REQ-07: se enlazan plan, contratos y requisitos desde el índice y AGENTS.md.

## Secuencia propuesta
- P0A (actual): documentar operaciones, invariantes, casos de error.
- P0B: aprobar decisiones funcionales que afectan DB/UX.
- P0C: cerrar esquema, rutas y validaciones de runtime, fijar matriz final REQ→TEST.
- P0D: pasar a P1 (scaffold Next.js y CI técnico).

## Límite del avance
Documentar no equivale a pasar pruebas ni a tener servicios externos. Se mantiene D-013: sin protección de `main` durante el arranque.
