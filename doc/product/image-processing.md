# Procesamiento de imágenes del marketplace

**Recomendación técnica:** `sharp` (Node.js) + WebP + DigitalOcean Spaces + CDN Cloudflare.

## Objetivos
Reducir tráfico/costo, preservar calidad visual, no retener metadatos privados y evitar que uploads arbitrarios consuman recursos o comprometan el servidor.

## Parámetros aprobados y recomendaciones por validar
- **APROBADO:** admitir JPEG, PNG y WebP como entrada. Validar contenido real, no confiar en extensión ni en cabecera del cliente. Tratamiento de animaciones/archivos especiales continúa pendiente de especificación segura.
- **APROBADO:** galería de **1 a 10 imágenes por publicación**, cada original con límite de **10 MiB** (10 × 1024 × 1024 bytes).
- Decodificar con límite de dimensiones y megapíxeles; evitar bombas de descompresión.
- Corregir orientación EXIF antes de redimensionar; eliminar GPS/EXIF/metadatos no necesarios.
- **APROBADO:** variante principal WebP de hasta 1600 px en su lado mayor, manteniendo proporción y sin ampliación. **PROPUESTA no aprobada:** calidad 78–82.
- **APROBADO:** segunda variante WebP de hasta 480 px en su lado mayor, manteniendo proporción y sin ampliación. **PROPUESTA no aprobada:** calidad 72–78.
- Registrar dimensiones, peso, formato, orden, clave y checksum.
- Preservar proporciones; evitar recorte automático de imágenes de producto.
- Guardar solo variantes procesadas en Spaces por defecto; originales se descartan una vez confirmada la transformación.
- Nombres de objeto impredecibles, sin nombres de usuario, y URLs versionadas/inmutables.
- Nunca sobrescribir objetos con la misma URL pública: generar claves nuevas e invalidar referencias de BD/caché.
- **APROBADO:** si falla la validación de un campo, carga o procesamiento de cualquiera de las imágenes, el producto no se crea activo ni queda parcialmente visible.
- Uploads incompletos u objetos huérfanos: recolector posterior idempotente y monitoreado.

## Flujo propuesto
1. Cliente selecciona imágenes y ve vistas previas.
2. Servidor autentica, verifica perfil y propiedad de recurso/borrador.
3. Validar límites (archivo, lote, frecuencia), firmas y dimensiones.
4. Procesar mediante Sharp con límites de CPU/memoria y concurrencia.
5. Subir variantes WebP a Spaces; confirmar objetos.
6. Confirmar asociación de todas las variantes en PostgreSQL y crear/activar la publicación únicamente cuando campos y galería estén completos; compensar objetos huérfanos ante fallos.
7. Servir mediante CDN; componente `next/image` con configuración adecuada, evitando doble transformación innecesaria.
8. Eliminar reemplazos/huérfanos mediante tarea segura y reintentable.

## Seguridad y capacidad
No aceptar SVG de usuario (XSS), GIF animado ni HEIC hasta definir canal seguro. Proteger endpoints contra abuso, rechazar archivos maliciosos, configurar límites de carga y contabilizar costos. Procesamiento sin workers puede afectar latencia del Droplet: medir y migrar a cola/worker si la carga lo exige.

## Formato de salida acordado
**APROBADO:** originales JPEG, PNG o WebP se redimensionan y convierten a **dos variantes WebP** de hasta **1600 px y 480 px** de lado mayor; proporciones preservadas. La calidad de compresión exacta continúa propuesta.

## WebP vs AVIF
WebP recomendado para primera versión por equilibrio de calidad, compatibilidad y esfuerzo de CPU. AVIF podría añadirse tras benchmarks por resultar más compacto en algunos casos, pero con codificación más costosa.

## Criterios REQ/TEST
- IMG-REQ-001: archivos corruptos o no permitidos se rechazan.
- IMG-REQ-002: variantes producidas usan MIME WebP y respetan límites/proporciones.
- IMG-REQ-003: metadata GPS/EXIF no llega al resultado.
- IMG-REQ-004: usuario no puede subir/eliminar imágenes de otro vendedor.
- IMG-REQ-005: orden de galería estable y ausencia de objetos referenciados sin existencia.
- IMG-REQ-006: reemplazo no deja referencias obsoletas ni sirve contenidos privados.

Fuentes: https://sharp.pixelplumbing.com/ ; https://nextjs.org/docs/app/api-reference/components/image .
