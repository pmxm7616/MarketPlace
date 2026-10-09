# Estrategia de pruebas y evidencia

**Estado:** política propuesta; todavía no existe runner configurado ni suite ejecutable.

## Pirámide de verificación
1. Tipos, lint y análisis estático.
2. Pruebas unitarias de dominio/casos de uso (Node.js test runner donde sea compatible).
3. Integración con PostgreSQL real de prueba y adaptadores.
4. Contratos HTTP/acciones, autenticación y autorización.
5. E2E para recorridos críticos (herramienta pendiente).
6. Pruebas de carga, accesibilidad y seguridad para riesgos específicos.

## Reglas
- Cada cambio de comportamiento agrega o actualiza pruebas.
- Probar resultados observables, casos límite y fallos, no detalles internos triviales.
- No debilitar assertions ni eliminar pruebas para ocultar errores.
- Fixtures sintéticos, deterministas y aislados; sin servicios productivos.
- Las pruebas de autorización negativas son obligatorias para operaciones sensibles.
- Cambios de esquema requieren pruebas de migración/integración.
- No usar solo cobertura como indicador de calidad.

## Evidencia por tarea
Registrar comando exacto, entorno, resultado, fecha y limitaciones. Si no pudo ejecutarse, marcar `NOT RUN` con motivo; no escribir `PASS`.

## Matriz requisito ↔ prueba
Cada tarea tiene IDs `REQ-01`, `REQ-02` y referencias a pruebas `TEST-01`, `TEST-02`; la matriz vive en la especificación/PR y demuestra cobertura de requisitos, no solo porcentaje de líneas.

## Objetivos iniciales por definir
Cobertura mínima, tiempos máximos de CI, SLO, navegador E2E, generador de carga y base de datos de CI. No inventar porcentajes arbitrarios.
