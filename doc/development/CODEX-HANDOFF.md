# Traspaso operativo a Codex — MarketPlace

**Fecha:** 2026-10-09  
**Estado:** P0 parcialmente completo; aplicación todavía no inicializada.  
**Rama:** main (sin protección obligatoria por D-013).  
**Documento rector:** [Plan maestro](master-plan.md).

## Inicio rápido (leer en este orden)
1. [AGENTS.md](../../AGENTS.md): reglas para agentes.
2. [Índice/registro de decisiones](../README.md): decisiones aprobadas y reemplazadas.
3. [Funcionalidad del MVP](../product/functional-specification.md): requisitos del negocio.
4. [Contratos operativos](../product/contracts-mvp-v1.md) y [permisos](../product/permissions-and-states.md).
5. [Plan maestro](master-plan.md) y [cierre de P0](p0-contract-closure.md).
6. [Decisiones abiertas](../product/open-decisions.md) y [lista priorizada](../product/decision-checklist.md).
7. Solo los estándares técnicos pertinentes a la tarea.

## MVP acordado (no reinterpretar)
- Template que crea marketplaces **independientes**, no plataforma multi-tenant.
- Visitante anónimo: catálogo público, detalle, tienda por username y WhatsApp al vendedor.
- Login/registro únicamente Facebook; para publicar, username y WhatsApp obligatorios.
- Username: único y fijo en MVP, de 3 a 30 caracteres, patrón de minúsculas, dígitos y guiones simples interiores. Patrón de validación: `^[a-z0-9]+(?:-[a-z0-9]+)*$` más longitud.
- WhatsApp en formato internacional, sin verificación SMS.
- Publicación: nombre, descripción, precio BOB > 0 almacenado en centavos enteros, entre 1 y 10 imágenes originales de máximo 10 MiB cada una.
- Imágenes originales aceptadas: JPEG, PNG, WebP. Generar dos variantes WebP de lado mayor máximo 1600 y 480 px, sin cambiar proporción.
- Publicación nueva se hace activa solo cuando todos los campos e imágenes están correctos; nunca parcialmente pública.
- Solo dueño edita y desactiva sin borrado definitivo. Reactivación no forma parte del MVP.
- Tienda pública titulada `Tienda de {username}`.
- Enlace WhatsApp lleva mensaje predefinido con nombre de artículo y URL.
- No hay checkout, carrito, cobros ni pagos en plataforma.

## Fuente de verdad y conflictos
- Lo aprobado en los ADR recientes y especificación funcional prevalece sobre documentos históricos; ver [decisiones](../README.md).
- `doc/product/core-scope.md` guarda la discusión histórica y no debe usarse para invalidar decisiones posteriores.
- Las opciones sin aprobar (calidad de compresión, E.164 exacto, longitudes de campos, textos del mensaje, comportamiento de editar inactivos, paginación, modelo exacto de BD) **no son requisitos aprobados**.
- No convertir recomendaciones en funcionalidades cerradas sin confirmación.

## Qué puede iniciar Codex hoy
**TASK-0101 a TASK-0105: scaffold neutral**, sujeto a verificar versiones y dependencias compatibles:
- Next.js, React, Node, TypeScript strict, CSS Modules/tokens.
- Herramientas de calidad, Node test runner, build, Docker para desarrollo, env.example sin secretos, CI informativo.
- Ejecutar verificaciones reales e informar PASS/FAIL/NOT RUN.
- No crear tablas finales ni lógica de Facebook/publicaciones hasta cerrar los contratos pertinentes.
- No habilitar protección de `main`.

## Gate para iniciar funcionalidades de negocio
Completar [P0 decisiones](../product/decision-checklist.md); revisar contratos, ruta pública y esquema/constraints. La decisión de usar Facebook no define por sí sola librería/sesiones. Imágenes públicas tampoco autorizan exponer credenciales.

## Protocolo de cada tarea
- Antes: TASK ID, REQ, alcance, decisiones, tests.
- Durante: cambios pequeños, capas separadas, sin secretos.
- Después: comandos ejecutados y resultado, pruebas negativas, documentación actualizada, diff examinado.
- No afirmar que CI, branch protection, despliegues o tests pasaron sin evidencia.

## Estado de infraestructura
No hay constancia de app, base de datos, bucket, despliegue o proveedores OAuth configurados. La existencia de `.github/workflows/governance.yml` no garantiza ejecución exitosa.

## Primera tarea sugerida
`TASK-0101`: inicializar esqueleto verificable **sin lógica comercial**, incluyendo tests mínimos de render/compilación, scripts y documentación de cómo ejecutarlo. Cerrar en el mismo cambio las decisiones técnicas que realmente se adopten.
