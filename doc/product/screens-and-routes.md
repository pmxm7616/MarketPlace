# Inventario de pantallas y rutas

**Estado: propuesta de rutas, flujo funcional confirmado.** Los segmentos exactos deben evitar colisiones y conservar estabilidad SEO.

| Pantalla | Ruta propuesta | Acceso | Función |
| --- | --- | --- | --- |
| Inicio/catálogo | `/` | Público | Lista de publicaciones activas |
| Detalle producto | `/items/[id]` | Público | Nombre, descripción, precio, galería y contacto |
| Tienda | `/tienda/[username]` | Público | «Tienda de {username}», catálogo de vendedor |
| Entrar | `/login` | Público | Botón Facebook |
| Completar perfil | `/onboarding` | Autenticado | Username y WhatsApp |
| Mis productos | `/dashboard/items` | Propietario | Activos/inactivos, acciones |
| Publicar | `/dashboard/items/new` | Perfil completo | Formulario y múltiples imágenes |
| Editar | `/dashboard/items/[id]/edit` | Propietario | Modificar información, galería y estado |
| Perfil/ajustes | `/dashboard/profile` | Autenticado | Ver/editar datos permitidos |
| Callback auth | `/api/auth/[...]` | Proveedor | Según librería final |

## Estados de UI
Loading, vacío, error recuperable, no encontrado, sesión expirada, subida en proceso, validación, almacenamiento temporal no disponible, acceso denegado.

## Navegación
Desde catálogo a detalle; desde detalle a tienda; desde detalle a WhatsApp. Login requiere retorno seguro a ruta interna. No exponer enlaces de edición a visitantes; independientemente, **verificar autorización en servidor**.

## SEO/accesibilidad
Metadata por artículo/tienda, canonical, sitemap solo para páginas públicas activas, noindex para pantallas privadas; imágenes con textos alternativos, formularios etiquetados, navegación por teclado y mensajes de estado accesibles.

## Pruebas E2E mínimas
Visitante → artículo → tienda → WhatsApp; Facebook simulado en entorno test → onboarding → publicación → edición → baja; permisos cruzados; formulario y galería móvil.
