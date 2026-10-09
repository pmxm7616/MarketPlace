# Errores, validación y contratos

**Estado:** propuesta.

## Capas
- Validar entradas externas en límites HTTP/acciones y validar invariantes en dominio.
- Distinguir errores esperados (validación, no autorizado, no encontrado, conflicto) de fallos inesperados.
- No exponer SQL, tokens, stack traces ni detalles internos al cliente.
- Registrar fallos inesperados con contexto seguro y correlación, sin datos personales sensibles.
- Respuestas estables, con código identificable y mensaje apropiado para UI.
- Manejar timeouts, reintentos limitados e idempotencia en integraciones externas cuando aplique.

## Contratos
Para cada caso de uso especificar precondiciones, entradas, salida, errores esperados, autorización, efectos secundarios y pruebas. La implementación debe ajustarse al contrato, no modificarlo silenciosamente para que pase el test.

## Revisión
Comprobar rutas de éxito, entradas inválidas, ausencia de sesión, permisos insuficientes, recursos inexistentes, conflictos, fallos de proveedor y repetición de solicitudes.
