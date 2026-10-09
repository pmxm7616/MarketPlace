# Línea base de seguridad

**Estado:** requisitos para implementación; no controles ya desplegados.

- Autenticación Facebook: flujo OAuth seguro, state/nonce según protocolo, callbacks permitidos, sesiones seguras, expiración y revocación.
- Autorización por recurso/acción en servidor; no confiar en cliente ni en IDs proporcionados.
- Validación de entradas y consultas parametrizadas.
- Protección frente a CSRF, XSS, inyección, SSRF, abuso y enumeración según superficie.
- Uploads: tamaño, tipo real, permisos, sanitización de metadatos, procesamiento seguro, URLs firmadas cuando corresponda.
- Rate limiting, moderación y mecanismos anti-spam; evaluar controles distribuidos en multi-instancia.
- Secretos fuera de Git; rotación y mínimo privilegio para BD, Spaces y proveedores.
- HTTPS, cookies seguras, cabeceras de seguridad y CSP compatible con Next.js.
- Logs sin tokens, contraseñas ni información sensible.
- Separación de entornos y bases de datos; backup probado y restauración documentada.
- Revisión de dependencias y respuesta a vulnerabilidades.
- Privacidad, retención, consentimiento y eliminación conforme al modelo operativo y normativa aplicable en Bolivia.

## Gates de seguridad
Todo endpoint/acción sensible requiere prueba negativa de permisos. Todo upload requiere pruebas de tipo/tamaño y rechazo. Toda modificación de autenticación requiere revisión humana y E2E antes de producción.

## Pendientes
Librería de autenticación, estrategia de sesiones, proveedor de escaneo de archivos, política de retención y evaluación legal.
