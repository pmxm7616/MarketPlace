# MarketPlace — especificación funcional del MVP

**Fecha:** 2026-10-09. **Estado:** alcance confirmado por descripción del responsable; detalles operativos marcados como propuestas. **Referencia:** [decisiones abiertas](open-decisions.md).

## Propósito y modelo comercial
MarketPlace es un **template reutilizable** para desplegar marketplaces independientes de anuncios/productos. No es multi-tenant. **No hay checkout ni pagos dentro del MVP**; la intención de compra se gestiona por WhatsApp fuera de la plataforma. El template no asume categorías, marcas ni comisiones.

## Actores
- **Visitante:** sin autenticación; ve catálogo, detalle y tienda del vendedor; inicia contacto por WhatsApp.
- **Usuario registrado/vendedor:** inicia sesión con Facebook, completa teléfono WhatsApp y username único; puede crear, editar y retirar **sus propias** publicaciones y administrar galería.
- **Administrador:** función técnica propuesta, **no detallada ni confirmada**; no implementar interfaz administrativa sin contrato aprobado.

## Capacidades confirmadas
| ID | Capacidad | Regla funcional |
| --- | --- | --- |
| CAP-001 | Login Facebook | Único proveedor de autenticación para registrarse e iniciar sesión |
| CAP-002 | Alta de perfil | WhatsApp obligatorio antes de publicar; username único |
| CAP-003 | Crear producto | Nombre, descripción, precio y varias imágenes |
| CAP-004 | Catálogo público | Visitantes consultan publicaciones activas sin sesión |
| CAP-005 | Detalle público | Información e imágenes del ítem y vendedor |
| CAP-006 | Contacto WhatsApp | Enlace a WhatsApp del vendedor con mensaje predefinido contextual |
| CAP-007 | Tienda pública | Título visible `Tienda de {username}` con publicaciones activas del vendedor |
| CAP-008 | Edición propia | Vendedor modifica sus publicaciones |
| CAP-009 | Baja propia | Vendedor deja de mostrar una publicación en el catálogo |
| CAP-010 | Optimización de imágenes | Redimensionar, optimizar y convertir; galería con varias imágenes |

## Recorridos y criterios de aceptación

### US-001: navegar sin registro
- REQ-001: GET de portada/catálogo, detalle y tiendas públicas no exige sesión.
- REQ-002: listar únicamente ítems activos y públicamente visibles.
- REQ-003: listado paginado con orden estable para evitar consultas ilimitadas.
- TEST-001: navegación anónima E2E y prueba de filtros de visibilidad.
- TEST-002: paginación y no exposición de datos privados.

### US-002: registro e inicio de sesión con Facebook
- REQ-004: el flujo de entrada usa únicamente Facebook como proveedor del MVP.
- REQ-005: usuario sin WhatsApp completado puede autenticar, pero no publicar.
- REQ-006: username único se valida en servidor y con constraint único en BD.
- TEST-003: callback válido/inválido, identidad, sesiones y errores OAuth.
- TEST-004: dos registros con el mismo username no producen duplicados.

### US-003: publicar artículo
- REQ-007: solo usuario autenticado con perfil completo puede publicar.
- REQ-008: nombre, descripción, precio y galería se validan del lado servidor.
- REQ-009: ítem nuevo pertenece al usuario autenticado, nunca a un ID arbitrario enviado por cliente.
- TEST-005: creación válida y rechazos por campos inválidos, sesión ausente y perfil incompleto.
- TEST-006: prevención de asignar publicaciones a otro vendedor.

### US-004: consultar detalle y contactar
- REQ-010: artículo activo muestra nombre, descripción, precio, galería y vendedor.
- REQ-011: enlace WhatsApp usa número normalizado del vendedor y mensaje contextual codificado correctamente.
- TEST-007: URL de WhatsApp y mensaje, caracteres especiales y artículos retirados.
- TEST-008: visitante puede acceder sin iniciar sesión; número privado no se filtra por otras rutas involuntarias.

### US-005: tienda del vendedor
- REQ-012: ruta pública de tienda identifica al vendedor por username único.
- REQ-013: título `Tienda de {username}` y publicaciones activas de ese vendedor.
- TEST-009: dos usernames diferentes resuelven tiendas diferentes.
- TEST-010: artículos dados de baja no aparecen.

### US-006: editar y dar de baja
- REQ-014: solo propietario puede editar nombre, descripción, precio y galería.
- REQ-015: solo propietario puede retirar sus artículos; el artículo retirado no aparece públicamente.
- TEST-011: actualización válida, no autorizado, recurso inexistente.
- TEST-012: retirada y desaparición de catálogo y tienda; caché invalidada.

### US-007: imágenes
- REQ-016: subida solo autenticada, asociada a artículo propio o borrador autorizado.
- REQ-017: validar tipo real, tamaño, cantidad y dimensiones; no confiar en MIME del navegador.
- REQ-018: conversión con orientación corregida y sin metadatos sensibles; publicación solo tras procesamiento correcto.
- REQ-019: variantes de imagen servidas desde almacenamiento de objetos; orden de galería consistente.
- TEST-013: subida válida, archivo falso, archivo excesivo, imagen corrupta y autoría ajena.
- TEST-014: dimensiones/formato, eliminación/reemplazo e indisponibilidad del almacenamiento.

## Reglas de dominio iniciales
- Vendedor = usuario registrado que completa perfil; no requiere una cuenta comercial separada.
- Publicaciones se asocian siempre a un único dueño.
- Se separa baja de ocultación pública del borrado físico definitivo: estrategia exacta por aprobar.
- Mostrar nombre público derivado de username; el nombre real del proveedor OAuth no debe hacerse público implícitamente.
- Precio en bolivianos (BOB) como valor predeterminado inicial **propuesto**, configurable por proyecto; estrategia de cantidad exacta por confirmar.

## Fuera del MVP
Carrito, checkout, pasarela de pago, entrega, facturación, comentarios, reseñas, chat interno, pagos por destacar, suscripción monetizada, categorías/filtros sofisticados, geolocalización, app móvil nativa y múltiples proveedores OAuth. No implementarlos sin alcance aprobado.

## Referencias complementarias
- [Pantallas y rutas](screens-and-routes.md)
- [Modelo de datos](data-model.md)
- [Imágenes](image-processing.md)
- [Seguridad](../security/threat-model.md)
- [Plan de desarrollo](../development/master-plan.md)
- [Decisiones pendientes](open-decisions.md)
