# Contratos de dominio y límites de decisión

**Estado: propuesta para formalización; modelos concretos no aprobados.**

## Especificación por operación
- ID estable `UC-<MODULE>-NNN`, responsable y versión.
- Entrada validada, salida tipada y errores enumerados.
- Precondiciones, invariantes, postcondiciones y efectos secundarios.
- Actor/rol autorizado, propietario del recurso y amenaza relevante.
- Consistencia transaccional, idempotencia, concurrencia, auditoría y caché.
- Matriz `REQ-xxx → TEST-xxx`; al menos un caso negativo de autorización si aplica.

## Reglas transversales propuestas
1. Identificadores no implican permisos; verificar identidad y ownership.
2. No exponer columnas internas ni datos sensibles por defecto.
3. Escrituras atómicas cuando afecten múltiples registros relacionados.
4. Evitar pérdida de actualizaciones: definir versión o bloqueo en operaciones competidoras.
5. Lecturas públicas deben diferenciar publicado/oculto/borrado y coherencia de caché.
6. No acoplar módulo de dominio a Next.js, Drizzle ni SDK de un proveedor.
7. Definir estrategia de migración para cambios de contrato.

## Catálogo — SIN decidir
`Listing`, `Seller`, `Category`, `MediaAsset`, `User`, `ModerationCase` son nombres candidatos, no entidades aprobadas. Relaciones, columnas, moneda y estados requieren documento de dominio aprobado.

## Plantilla de contrato
| Campo | Descripción |
| --- | --- |
| ID y versión | UC-CATALOG-001 / 1 |
| Actor y permisos | Quién puede realizar la acción |
| Entrada | Validaciones y límites |
| Salida | DTO sin datos sensibles |
| Invariantes | Lo que nunca puede ser violado |
| Errores | Códigos estables |
| Efectos | BD, archivos, eventos, caché |
| Pruebas | REQ → TEST y casos negativos |

No implementar esquemas o API finales derivándolos de ejemplos.
