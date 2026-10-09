# Arquitectura de referencia

## Estilo
**Monolito modular full-stack:** React/Next.js renderiza UI y expone handlers/acciones de servidor; Node.js ejecuta lógica; PostgreSQL es la fuente de verdad. No hay backend Laravel/Python separado.

## Vista conceptual
```text
Navegador / bots
       |
Cloudflare (DNS, CDN, WAF, caché pública)
       |
Next.js / Node.js (uno o varios Droplets)
  |       |          |
  |       |          +--> Spaces (imágenes/objetos)
  |       +-------------> PostgreSQL administrado
  +---------------------> OAuth Facebook / enlaces WhatsApp
          |
  [opcional en el futuro] Redis/Valkey, colas y workers
```

## Módulos candidatos (no implementados)
- Identidad y autorización (login Facebook; roles y permisos).
- Vendedores y perfiles.
- Publicaciones y catálogo.
- Categorías, atributos, filtros y búsqueda.
- Imágenes y archivos.
- Moderación y reportes.
- Configuración del sitio, SEO y páginas públicas.
- Contacto por WhatsApp.
- Administración, auditoría y observabilidad.

Carrito, pagos, pedidos, reseñas y mensajería interna **no están aprobados como módulos obligatorios**; dependen del modelo de negocio.

## Organización sugerida (pendiente de validar)
```text
src/
  app/                  # Rutas, layouts, handlers y composición Next.js
  modules/
    catalog/
      domain/           # Reglas y tipos de dominio
      application/      # Casos de uso
      infrastructure/   # Repositorios, SQL y adaptadores
      ui/               # Componentes del módulo
    identity/
    sellers/
  shared/               # UI y utilidades genuinamente transversales
  config/               # Configuración validada
db/                     # Esquema y migraciones
public/                 # Activos públicos genéricos
tests/                  # Pruebas transversales
doc/                    # Decisiones y guías
```
Esta estructura es orientativa, no archivos creados.

## Reglas de dependencia
- UI no ejecuta SQL directamente.
- Dominio no importa Next.js ni SDKs externos.
- Infraestructura implementa contratos de aplicación/dominio.
- Autorización y validación en el servidor para toda operación sensible.
- Contratos y configuración permiten personalización sin bifurcar innecesariamente el núcleo.

## Preparación multi-instancia
- No depender de memoria local para sesiones, rate limiting global ni datos persistentes.
- No depender del disco del Droplet para uploads.
- Coordinación de caché e invalidación cuando existan varias instancias.
- Versiones, claves de Server Actions y despliegues coherentes entre instancias Next.js.
- Migraciones compatibles con despliegues progresivos y health checks.

## Decisiones aún abiertas
Modelado del catálogo, búsquedas, permisos, diseño de adaptadores, estrategia de caché de Next.js y flujo exacto de publicación.


## Alcance funcional confirmado (2026-10-09)
La descripción vigente del MVP es [`doc/product/functional-specification.md`](product/functional-specification.md); ver [plan maestro](development/master-plan.md). **Se confirma** Facebook login, WhatsApp obligatorio para publicar, username único, artículos con nombre/descripción/precio/galería, catálogo público, tienda, edición y baja del propietario, contacto por enlace WhatsApp. **No** hay carrito ni pagos dentro de la plataforma. Categorías, filtros avanzados, moderación administrativa y otros módulos antes «candidatos» no forman parte del alcance obligatorio inicial. Los ejemplos anteriores son opciones arquitectónicas, no autorización para implementarlos.
