# Decisiones restantes antes del código de negocio

**Estado:** pendientes de aprobación; 2026-10-09. No volver a solicitar la aprobación de los parámetros D-014 a D-021.

## Prioridad A — afecta esquema o contratos centrales
| ID | Decisión necesaria | Propuesta para discutir | Bloquea |
| --- | --- | --- | --- |
| P0-A01 | Longitudes de nombre y descripción | Nombre 3–120 caracteres; descripción 10–5000; recortar espacios, no HTML | Validación y schema Listing |
| P0-A02 | Regla de precio máximo y entrada | Permitir dos decimales exactos, sin importe negociable en MVP; definir máximo por límites SQL/UI | Schema y formulario |
| P0-A03 | Estado técnico e inactivos | Estados internos ACTIVE/INACTIVE; crear atómicamente ACTIVE al terminar; permitir edición solo si se acuerda | Persistencia/casos de uso |
| P0-A04 | WhatsApp internacional | Aceptar E.164 con prefijo + en formulario; guardar normalizado; decidir actualización posterior | Onboarding y contacto |
| P0-A05 | Diseño físico de imágenes | 2 variantes por imagen; esquema de claves, orden, transacción/compensación, limpieza de archivos huérfanos | Migraciones y uploads |
| P0-A06 | Identidad/sesiones Facebook | Seleccionar biblioteca, estrategia de sesiones, qué ocurre si Facebook no facilita email, logout | Auth schema y OAuth |
| P0-A07 | Identidad pública y URL de producto | ID estable para detalle; username en /tienda/; decidir URL final y colisiones | SEO y routing |
| P0-A08 | Política de moderación mínima | Publicación inmediata aprobada, pero falta decidir reportes, contenido prohibido y facultad de retirada | Apertura pública segura |

## Prioridad B — puede cerrarse en la tarea correspondiente
| ID | Decisión necesaria | Propuesta para discutir | Afecta |
| --- | --- | --- | --- |
| P0-B01 | Paginación | 20 por página, orden de más nuevos, cursor estable | Catálogo |
| P0-B02 | Calidad WebP | Medir Sharp con fotos de prueba; valores sugeridos 80/75; limitar megapíxeles | Pipeline |
| P0-B03 | Texto WhatsApp | Plantilla editable con nombre y URL (ambos obligatorios) | UX |
| P0-B04 | Edición de galería | Agregar/eliminar/reordenar, conservar 1–10 fotos tras cada operación | Dashboard |
| P0-B05 | Teléfono WhatsApp público | Solo exponer mediante enlace de contacto; reconocer que el número del enlace es visible | Privacidad |
| P0-B06 | Eliminación de cuenta y retención | Definir obligaciones y plazo antes de producción | Privacidad |
| P0-B07 | Branding del template | Configuración de nombre, logo, colores, dominio y texto WhatsApp sin tocar núcleo | Instancias derivadas |
| P0-B08 | Recuperación ante fallo | Limpieza idempotente de objetos huérfanos, límites de procesamiento, reintentos | Operación |
| P0-B09 | Listado de inactivos | Mostrar solo al propietario, sin indexar; decidir edición de inactivos | Dashboard |

## Decisiones que no bloquean scaffold
No es necesario elegir ahora compresión final, mensaje literal, herramientas de SAST, estrategia Redis o una cifra de usuarios simultáneos. Documentar una elección antes de implementar su función.

## Antes del lanzamiento real
Política de privacidad, contenido permitido, eliminación de cuenta, backups restaurables, pruebas de autorización, observabilidad, rate limiting, entorno Facebook de producción, abuso y costos.

## Reglas
Cada aprobación debe registrarse en `doc/README.md`, actualizar [open-decisions.md](open-decisions.md), contratos y plan; las decisiones pendientes no pueden quedar formuladas como aprobadas.
