# Contratos funcionales MVP — versión 0.2

**Estado: PROPUESTA PARA REVISIÓN** · 2026-10-09. Derivado de los requisitos [confirmados](functional-specification.md); las decisiones técnicas no confirmadas se identifican como tales.

## Contratos transversales aprobados

- El catálogo, detalle y tienda son visibles sin sesión; únicamente publicaciones activas pueden aparecer.
- Facebook es el único método de autenticación; un usuario debe registrar username y WhatsApp para publicar.
- Username de 3 a 30 caracteres, letras minúsculas/dígitos y guiones interiores simples, nunca consecutivos o en los extremos. Regex `^[a-z0-9]+(?:-[a-z0-9]+)*# Contratos funcionales MVP — versión 0.2

**Estado: PROPUESTA PARA REVISIÓN** · 2026-10-09. Derivado de los requisitos [confirmados](functional-specification.md); las decisiones técnicas no confirmadas se identifican como tales.

## Contratos transversales aprobados

- El catálogo, detalle y tienda son visibles sin sesión; únicamente publicaciones activas pueden aparecer.
- Facebook es el único método de autenticación; un usuario debe registrar username y WhatsApp para publicar.
 y longitud 3–30.
- Número WhatsApp obligatorio en formato internacional, sin SMS.
- Nombre, descripción, precio BOB estrictamente positivo en centavos enteros y 1–10 imágenes (10 MiB máximo por original). Entradas JPEG/PNG/WebP y dos variantes WebP de hasta 1600 y 480 px, preservando proporción.
- Crear/editar/desactivar requiere propiedad del recurso; desactivación lógica, nunca borrado definitivo por esta acción.
- Mensaje WhatsApp incluye nombre del artículo y URL canónica.

## UC-IDENTITY-001 — Completar perfil
**Actor:** usuario con sesión Facebook válida.
**Entrada:** username, teléfono WhatsApp en formato internacional.
**Precondiciones:** identidad Facebook vinculada a usuario interno; username no atribuido a tercero.
**Postcondiciones:** perfil completo habilita publicación; validación de unicidad en base de datos con manejo de conflicto concurrente.
**Errores:** no autenticado, formato inválido, username ocupado, fallo de persistencia.
**Pruebas:** username vacío/2/31 caracteres, mayúsculas, espacios, Unicode, doble registro concurrente, teléfono inválido, sesión vencida.
**Aprobado:** no se admiten guiones iniciales, finales ni consecutivos. **Pendiente:** criterio E.164 estricto y normalización.

## UC-LISTING-001 — Crear publicación
**Actor:** vendedor autenticado con perfil completo.
**Entrada:** nombre, descripción, precio en BOB y referencias a 1–10 imágenes WebP procesadas del mismo usuario.
**Precondiciones:** sesión válida y galería segura; validar límites del original previo al procesamiento.
**Postcondiciones (aprobadas):** registro del usuario autenticado pasa a activo/visible como resultado final de la creación solo cuando todos los campos sean válidos y todas las imágenes hayan sido procesadas correctamente. Si falla cualquier imagen, no debe quedar una publicación activa ni parcialmente visible.
**Errores:** no autenticado, onboarding incompleto, validación, imágenes faltantes/no propias, almacenamiento fallido.
**Pruebas:** happy path; precio cero/negativo/decimal fuera de precisión; 0/11 fotos; exceso 10 MiB; ID de vendedor manipulado; publicación parcial.
**Pendiente:** longitudes de nombre/descripcion, formato exacto de precio, estado técnico transitorio de carga y concurrencia. No se aprobó un borrador editable como paso obligatorio.

## UC-LISTING-002 — Editar publicación
**Actor:** propietario autenticado.
**Entrada:** identificador de publicación y campos editables; operación de galería separada o coordinada por contrato.
**Precondiciones:** existe publicación propia en estado editable.
**Postcondiciones:** cambios aplicados sin pérdida de propiedad; conservar identidad/URL de producto.
**Errores:** no autenticado, no autorizado, inexistente, validación, conflicto de actualización.
**Pruebas:** editar propia, intentar editar ajena, precio inválido, pérdida de sesión, fallo de procesamiento.
**Pendiente:** si se permite editar publicaciones inactivas y política de versión optimista.

## UC-LISTING-003 — Desactivar publicación
**Actor:** propietario autenticado.
**Entrada:** identificador.
**Precondiciones:** propiedad verificada en servidor.
**Postcondiciones:** estado no público, sin borrar el registro; invalidación de catálogo, detalle, tienda y sitemap.
**Errores:** no autenticado, no autorizado, inexistente.
**Pruebas:** desactivar propia, ajena, repetir solicitud, verificar que desaparece de todo listado público.
**Pendiente:** respuesta exacta ante desactivación repetida; retención y posterior eliminación normativa.

## UC-CATALOG-001 — Listar artículos
**Actor:** visitante (sin sesión).
**Entrada:** paginación y, si se aprueba, orden.
**Salida:** campos públicos de publicaciones activas con imagen principal y precio BOB.
**Invariantes:** filtros de visibilidad en consulta de BD; no exponer WhatsApp o información privada innecesaria en tarjetas.
**Pruebas:** anónimo, vacíos, paginación, artículo desactivado, orden estable.
**Pendiente:** tamaño de página, estrategia cursor/offset.

## UC-CATALOG-002 — Detalle
**Actor:** visitante.
**Entrada:** ID/identificador público.
**Salida:** nombre, descripción, precio, galería ordenada, username y acción de WhatsApp para artículo activo.
**Errores:** no encontrado (incluyendo artículo no público).
**Pruebas:** anónimo, activo, inactivo, slug/ID inválido, foto faltante.

## UC-STORE-001 — Tienda pública
**Actor:** visitante.
**Entrada:** username.
**Salida:** título `Tienda de {username}` y artículos activos solo del vendedor correspondiente.
**Pruebas:** username existente/inexistente, cero artículos activos, dos perfiles diferentes, IDOR accidental.

## UC-CONTACT-001 — Contactar por WhatsApp
**Actor:** visitante.
**Entrada:** artículo activo y vendedor asociado.
**Salida:** URL HTTPS hacia `wa.me`, con número internacional sanitizado y `text` URL-encoded.
**Invariantes:** mensaje predefinido contiene nombre del artículo y URL canónica; no se dispara mensaje ni se considera compra efectuada desde servidor.
**Pruebas:** acentos, emojis, comillas, espacios, URL codificada, número internacional válido, artículo inactivo.
**Pendiente:** literal exacto del mensaje.

## Revisión obligatoria antes de implementación
[Permisos y estados](permissions-and-states.md), [datos](data-model.md), [parámetros pendientes](open-decisions.md), [pruebas](../testing/testing-strategy.md). Los contratos no autorizan al agente a decidir valores que aparecen como pendientes.
