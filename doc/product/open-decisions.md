# Decisiones de producto — aprobadas y pendientes

**Estado actualizado: 2026-10-09.** Los seis parámetros iniciales y las tres decisiones adicionales de P0 aprobadas expresamente por el responsable son vinculantes para el MVP. Las demás recomendaciones de la tabla siguen sin aprobación. Codex no debe extender el alcance de una aprobación a detalles no mencionados.

| ID | Pregunta | Recomendación inicial | Impacto |
| --- | --- | --- | --- |
| PROD-011 | Username | **APROBADO:** 3–30 caracteres, letras minúsculas, números y guion; único. **APROBADO (D-019):** guion solo interior, no inicial/final ni doble guion. **Pendiente:** momento de elección en onboarding | Rutas y migración |
| PROD-012 | Cambio de username | **APROBADO:** username fijo durante MVP. Posibles cambios y redirecciones solo en una fase futura | SEO/URLs |
| PROD-013 | Número de WhatsApp | **APROBADO:** obligatorio y en formato internacional, sin verificación SMS en MVP. **Pendiente:** UX/validación precisa y gestión de cambios | Seguridad, costos |
| PROD-014 | Cantidad de imágenes | **APROBADO:** de 1 a 10 imágenes por artículo | UX, costos |
| PROD-015 | Límites de carga | **APROBADO:** máximo 10 MiB por archivo original; salida optimizada WebP. **APROBADO (D-021):** admitir JPEG, PNG y WebP; generar dos variantes WebP con dimensiones máximas 1600 y 480 px. **Pendiente:** calidad, límites de megapíxeles y forma de persistencia | UX, seguridad |
| PROD-016 | Precio | **APROBADO:** moneda BOB (Bs), importe mayor a cero, guardado en centavos enteros. **Pendiente:** precio negociable, formatos UX y precio máximo | BD/UI |
| PROD-017 | Baja del producto | **APROBADO:** desactivar sin borrar definitivamente; reactivación es posibilidad **futura**, no funcionalidad aprobada del MVP. Nombres de estados técnicos sujetos a contrato | SEO/cache |
| PROD-018 | Edición | Campos e imágenes; mantener URL de producto estable | SEO |
| PROD-019 | Mensaje WhatsApp | **APROBADO:** el mensaje predefinido incluye nombre del artículo y enlace al producto. **Pendiente:** texto literal, branding, idioma y codificación de plantilla | UX |
| PROD-020 | Nombre visible | `Tienda de {username}`; slug único en URL | SEO/UX |
| PROD-021 | Estado previo a publicar | **APROBADO (D-020):** nueva publicación pasa a visible/activa únicamente después de validar todos los campos y completar correctamente el procesamiento de todas sus imágenes. **Pendiente:** si se usa borrador interno transitorio y cómo se limpia | Integridad |
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

## Parámetros formalmente aprobados el 2026-10-09
- Username único, fijo inicialmente, con 3–30 caracteres: letras minúsculas, dígitos y guion.
- WhatsApp obligatorio en formato internacional; sin verificación SMS en MVP.
- De 1 a 10 imágenes por artículo; máximo 10 MiB por original; variantes optimizadas WebP.
- Precio BOB mayor que cero, representado exactamente mediante centavos enteros.
- Baja lógica del artículo sin borrado definitivo; la reactivación no forma parte del MVP confirmado.
- Enlace WhatsApp con mensaje predefinido que incorpora nombre del artículo y URL del detalle.

**Aprobado adicionalmente (D-019–D-021):** username sin guion al inicio o final ni guiones consecutivos; publicación directamente activa solo después de campos e imágenes correctos; JPEG/PNG/WebP como entrada y dos variantes WebP de 1600 y 480 px. **Siguen sin aprobarse por implicación:** calidad de compresión, límites de megapíxeles, manejo de borradores técnicos transitorios, reactivación, texto literal del mensaje, verificación de propiedad del teléfono y detalles no mencionados.
