# Modelo lógico de datos — propuesta MVP

**Estado: PROPOSED;** no migrar esquema hasta aprobación y tests de invariantes.

## Entidades
```text
User (1) -------- (*) Listing (1) -------- (*) ListingImage
 |                    |
 (1) SellerProfile    Listing lifecycle
 |
 (0..*) OAuthAccount/Session
```

## User
`id` (identificador interno), `created_at`, `updated_at`, `status`. Nunca usar email o Facebook ID como clave primaria.

## OAuthAccount / Session
Identificador único del proveedor Facebook ligado a usuario interno, información mínima necesaria de proveedor, sesiones almacenadas con política segura. El email puede faltar; no usar email como identidad obligatoria.

## SellerProfile
`user_id` único, `username` único (3–30 caracteres: minúsculas, dígitos y guion; fijo inicialmente), `whatsapp_e164` obligatorio en formato internacional para habilitar publicación, `created_at`, `updated_at`. La restricción de guiones de borde y normalización exacta está pendiente; el username se debe proteger con UNIQUE en BD además de validación en aplicación. WhatsApp sin SMS en MVP. No exponer teléfono por endpoints diferentes de los requeridos para contacto.

## Listing
`id`, `seller_id`, `name`, `description`, `price_minor`, `currency_code`, `status`, `created_at`, `updated_at`, `published_at`. **Aprobado:** currency_code BOB, precio > 0 y guardado como número entero de centavos (CHECK > 0); evitar floating point. Desactivar sin eliminar el registro. La reactivación es futura, no obligación del MVP. Índices propuestos: status + published_at + id; seller_id + status + published_at. Definir columnas reales después de contratos.

## ListingImage
`id`, `listing_id`, `storage_key`, `variant`, `width`, `height`, `bytes`, `mime_type`, `sort_order`, `created_at`. **Aprobado:** de 1 a 10 imágenes asociadas a cada artículo activo, originales de máximo 10 MiB y resultados WebP optimizados. Las variantes pueden modelarse como tabla hija u objeto JSON controlado; decidir antes de migración. Claves no deben contener datos sensibles; almacén Spaces con permisos mínimos.

## Integridad
- FK Listing.seller_id → User/SellerProfile según decisión de clave.
- FK ListingImage.listing_id → Listing.
- Unique username normalizado y Facebook provider+account ID.
- No publicar sin perfil completo ni galería procesada (invariantes en aplicación/BD donde aplique).
- Escrituras con transacción para publicar/listar imágenes; objetos Spaces requieren compensación porque no participan en transacciones SQL.
- Baja de producto oculta en consultas públicas; política de retención/borrado por confirmar.
- Evitar cascadas destructivas accidentales; migraciones reversibles cuando sea viable.

## Consultas iniciales previstas
- Listado público paginado de activos.
- Detalle por ID solo si activo.
- Tienda por username + lista paginada de activos.
- Listado propietario con activos/inactivos.
- Validación de autoría en mutaciones.

Nombres finales, detalles de constraints y estrategia de slug requieren aprobación al implementar; los límites de username, precio, galería y WhatsApp anteriores **ya están aprobados**.
