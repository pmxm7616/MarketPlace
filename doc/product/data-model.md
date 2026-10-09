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
`user_id` único, `username` único insensible a mayúsculas/minúsculas, `whatsapp_e164` obligatorio para habilitar publicación, `created_at`, `updated_at`. Normalización/longitud y edición por aprobar. No exponer teléfono por endpoints diferentes de los requeridos para contacto.

## Listing
`id`, `seller_id`, `name`, `description`, `price_minor`, `currency_code`, `status`, `created_at`, `updated_at`, `published_at`. Precio entero en unidades menores; evitar floating point. Índices propuestos: status + published_at + id; seller_id + status + published_at. Definir columnas reales después de contratos.

## ListingImage
`id`, `listing_id`, `storage_key`, `variant`, `width`, `height`, `bytes`, `mime_type`, `sort_order`, `created_at`. Las variantes pueden modelarse como tabla hija u objeto JSON controlado; decidir antes de migración. Claves no deben contener datos sensibles; almacén Spaces con permisos mínimos.

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

Nombres finales, constraints y estrategia de slug requieren aprobación al implementar.
