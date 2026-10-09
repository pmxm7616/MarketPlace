# Criterios de aceptación verificables

Cada tarea debe describir:
1. Resultado visible o contrato observable.
2. Entradas válidas e inválidas.
3. Permisos, límites de seguridad y privacidad.
4. Estados de error y casos extremos.
5. Impacto en persistencia, migraciones y caché.
6. Requisitos no funcionales medibles cuando corresponda.
7. Pruebas que evidencian cada requisito.

## Ejemplo ilustrativo (no funcionalidad aprobada)
`REQ-01`: una publicación sin título válido es rechazada sin escritura en BD.
`TEST-01`: integración que envía título vacío y verifica respuesta de validación y ausencia de registro.

La IA implementadora no debe reinterpretar criterios de aceptación sin registrar la discrepancia y obtener aprobación.
