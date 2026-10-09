# API, versiones y compatibilidad

**Estado: normativa de proceso propuesta, endpoints aún por definir.**

- Cada endpoint/Server Action nuevo exige contrato: ruta o nombre, actor, esquema runtime de request, respuesta, errores, rate limits y efecto de caché.
- Autenticación y autorización verificadas en el servidor por operación, no delegadas exclusivamente a middleware de navegación.
- Listados acotados y paginados; orden determinista y límites máximos documentados.
- Respuestas evitan filtrar stack traces y datos internos.
- Para mutaciones repetibles por redes inestables, decidir idempotencia antes de codificar.
- Cambios incompatibles: plan de versionado/migración, pruebas de compatibilidad y ventana de despliegue.
- Error contracts estables: `code` legible por máquina y mensaje de UI independiente.
- Formularios y handlers comparten casos de uso sin duplicar reglas.

## Bloqueos previos a implementar
Resolver autenticación/sesiones, modelo comercial, formato de IDs, validación runtime y convenciones de errores concretas. No crear endpoints públicos basados únicamente en este documento.
