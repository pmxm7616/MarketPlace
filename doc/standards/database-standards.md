# PostgreSQL 16 + Drizzle + pg

**Estado:** propuesta para cuando exista esquema.

- PostgreSQL es fuente de verdad. Cambios de esquema mediante migraciones versionadas y revisadas.
- Nombres de tablas y columnas: `snake_case`, explícitos y consistentes.
- Primary keys y foreign keys explícitas; definir `ON DELETE` intencionalmente.
- Constraints para invariantes que la BD pueda garantizar (`NOT NULL`, `UNIQUE`, `CHECK`, FK).
- Crear índices en función de consultas reales; verificar planes con `EXPLAIN ANALYZE` cuando corresponda.
- Paginación obligatoria para listas potencialmente grandes; evaluar cursor/keyset en catálogos.
- No hacer N+1 queries; seleccionar columnas necesarias; establecer límites de resultados.
- Transacciones para cambios que deban ser atómicos.
- Pool de conexiones controlado; considerar PgBouncer administrado cuando se justifique.
- Fechas en UTC y representación coherente; definir zona horaria en presentación.
- Precios con estrategia exacta, no floats binarios; definir moneda y unidades en dominio.
- Datos de prueba sintéticos, nunca producción en fixtures.
- Migraciones compatibles con despliegue gradual cuando haya múltiples instancias.
- Revisar impactos de borrado, privacidad, backup y restauración.

## Checklist de cambios de esquema
Migración + rollback/mitigación; constraints; índices; compatibilidad; consultas afectadas; pruebas de integración; impacto en datos existentes.
