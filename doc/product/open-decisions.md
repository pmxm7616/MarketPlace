# Decisiones de producto pendientes

**Regla:** estos puntos no se consideran aprobados por aparecer como recomendación. Codex puede preparar una tarea neutral, pero no decidir cambios irreversibles por sí solo.

| ID | Pregunta | Recomendación inicial | Impacto |
| --- | --- | --- | --- |
| PROD-011 | Cómo se elige username | Usuario lo elige al completar perfil; minúsculas ASCII, 3–30, único case-insensitive | Rutas y migración |
| PROD-012 | Qué pasa si cambia username | Mantener fijo inicialmente; posible cambio con alias/redirect futuro | SEO/URLs |
| PROD-013 | Validación de WhatsApp | Normalizar número internacional, confirmación declarativa inicialmente; verificación OTP posterior si abuso | Seguridad, costos |
| PROD-014 | Cantidad de imágenes | 1–10 por artículo, configurable | UX, costos |
| PROD-015 | Límites de carga | 10 MiB por original; JPG/PNG/WebP; rechazar SVG/GIF/HEIC hasta soporte seguro | UX, seguridad |
| PROD-016 | Precio | BOB por defecto, importe > 0, exacto en centavos; sin precio negociable inicialmente | BD/UI |
| PROD-017 | Baja del producto | `ACTIVE` → `INACTIVE` reversible; eliminación definitiva aparte | SEO/cache |
| PROD-018 | Edición | Campos e imágenes; mantener URL de producto estable | SEO |
| PROD-019 | Mensaje WhatsApp | «Hola, vi tu producto "{nombre}" en {nombre del marketplace}. ¿Sigue disponible? {URL}» | UX |
| PROD-020 | Nombre visible | `Tienda de {username}`; slug único en URL | SEO/UX |
| PROD-021 | Estado previo a publicar | Borrador interno durante carga; publicación atómica al finalizar | Integridad |
| PROD-022 | Listado | Más recientes primero, 20 por página, cursor si se necesita | Consultas |
| PROD-023 | Contenido prohibido/moderación | Política y mecanismo de reporte mínimos antes de apertura pública | Riesgo legal/abuso |
| PROD-024 | Eliminación de cuenta y retención | Definir flujo y plazos antes de producción | Privacidad |
| PROD-025 | Login Facebook | Decidir proveedor/lib de sesiones, campos solicitados y tratamiento de email ausente | Identidad |
| PROD-026 | Fotos originales | Procesar en memoria/temporal seguro, persistir solo variantes optimizadas por defecto | Costos y privacidad |
| PROD-027 | Precio mostrado | Separador/localidad `es-BO`, símbolo Bs, definir reglas de redondeo | UX |
| PROD-028 | Perfil vendedor | Username y catálogo, posible imagen/avatar de Facebook no exigido | Permisos OAuth |
| PROD-029 | Eliminación de archivos huérfanos | Recolección idempotente tras bajas/reemplazos y período de gracia | Integridad |

## Decisiones ya aclaradas por el responsable
- Facebook como única opción de ingreso.
- WhatsApp obligatorio para poder publicar.
- Visitantes navegan y contactan sin cuenta.
- Campos de artículo: nombre, descripción, precio, múltiples imágenes.
- Un perfil público de tienda por username único.
- El vendedor edita y da de baja sus artículos.
- Imágenes transformadas y optimizadas al subir.
- No hay pago ni carrito dentro de la plataforma, conforme al flujo descrito.

La definición comercial esencial permite planificar. Los valores sugeridos solo se convierten en norma tras aprobación.
