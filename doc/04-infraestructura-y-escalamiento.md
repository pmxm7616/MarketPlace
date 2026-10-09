# Infraestructura y plan de escalamiento

## Premisa
Bolivia es el mercado inicial, pero el tamaño poblacional **no determina** el dimensionamiento. La carga depende de usuarios concurrentes, solicitudes por segundo, consultas, imágenes, tráfico de bots, escrituras y picos.

**100.000 usuarios registrados no son una garantía de capacidad de un solo Droplet.** Se debe medir con pruebas representativas.

## Etapa 1: lanzamiento
- Cloudflare delante del sitio, con políticas de caché cuidadosas.
- Un Droplet ejecutando contenedor(es) Next.js.
- PostgreSQL administrado separado de la aplicación.
- Spaces para objetos e imágenes.
- HTTPS, backups, logs, métricas, alertas y health checks.
- Caché de contenido estático y de respuestas públicas donde sea seguro.
- Límites de recursos, conexiones SQL y tamaño de uploads.

Tamaños de Droplet (p. ej. 2 vCPU/4 GB) son **ejemplos**, no recomendación validada.

## Etapa 2: optimización y escalado vertical
Ante latencia o saturación:
1. Diagnosticar CPU, RAM, red, latencia, base de datos y caché.
2. Corregir consultas N+1, índices, paginación y payloads.
3. Ajustar pool de conexiones y caché; evaluar PgBouncer.
4. Si la app es el cuello de botella, aumentar CPU/RAM del Droplet.
5. Planificar ventana de mantenimiento: el resize puede requerir apagado.

Si PostgreSQL es el cuello de botella, aumentar instancias web no lo corrige.

## Etapa 3: escalado horizontal
```text
Cloudflare
    |
DigitalOcean Load Balancer
    |
    +---- Droplet A: Next.js
    +---- Droplet B: Next.js
    +---- Droplet N: Next.js
                 |
     +-----------+------------+
     |           |            |
PostgreSQL   Spaces    Caché compartida (si necesaria)
```

Pasos:
1. Publicar una misma imagen/version de aplicación en instancias idénticas.
2. Compartir configuración, secretos y servicios externos.
3. Añadir Load Balancer con health checks.
4. Configurar coordinación de caché de Next.js e invalidaciones.
5. Usar almacén común para sesiones/contadores que requieran consistencia.
6. Ensayar despliegue, rollback y fallo de una instancia.
7. Medir el impacto en el pool de conexiones de PostgreSQL.

## Redis / Valkey: cuándo y para qué
**No obligatorio en la primera versión.** Son almacenes rápidos en memoria para caché compartida, rate limiting distribuido u otras necesidades coordinadas. No reemplazan PostgreSQL como fuente de verdad. Evaluar cuando haya evidencia de consultas repetidas costosas, varias instancias o necesidad de coordinación.

Caché no es automáticamente correcta: definir claves, TTL, invalidación, privacidad y manejo de datos obsoletos. Evitar caché pública de contenido autenticado y proteger precios/estado de publicaciones contra obsolescencia.

## Posibles etapas posteriores
Workers y colas para procesamiento de imágenes/notificaciones; motor de búsqueda dedicado cuando PostgreSQL deje de cumplir objetivos; réplicas de lectura y mejoras de alta disponibilidad según métricas.

## Indicadores y pruebas
- RPS, usuarios concurrentes, p50/p95/p99, tasa de errores.
- CPU, RAM, I/O, red, reinicios y saturación de pools.
- Consultas lentas, locks, conexiones, CPU/almacenamiento de PostgreSQL.
- Tasa de aciertos de caché, CDN hit ratio y tamaño de imágenes.
- Pruebas de carga de listado, búsqueda, detalle, login y publicación.
- Alertas tempranas sugeridas de CPU sostenida ~75–80 %, **no regla universal de escalado**.

## Objetivos pendientes
Definir SLO de disponibilidad, latencia p95, RPS pico, volumen de catálogo, presupuesto, RTO/RPO y región de alojamiento tras obtener métricas y requisitos reales.
