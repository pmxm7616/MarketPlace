# Alcance funcional del núcleo — especificación de decisión

**Estado: PENDIENTE de aprobación funcional.** Este documento NO autoriza implementar módulos. Regla: una IA no debe decidir implícitamente el modelo comercial.

## Propósito
Definir el mínimo compartido entre marketplaces independientes, sin acoplarlo a un sector o marca.

## Capacidades candidatas, NO aprobadas
| Código | Capacidad | Estado | Dependencias |
| --- | --- | --- | --- |
| CAP-001 | Identidad, sesión y permisos | Candidata | Política OAuth, roles |
| CAP-002 | Perfiles de vendedores | Candidata | Identidad |
| CAP-003 | Publicaciones y ciclo de vida | Candidata | Vendedores, moderación |
| CAP-004 | Taxonomía y atributos configurables | Candidata | Modelo de catálogo |
| CAP-005 | Búsqueda y filtros | Candidata | Catálogo |
| CAP-006 | Imágenes y archivos | Candidata | Spaces y seguridad |
| CAP-007 | Contacto por WhatsApp | Previsto, detalles pendientes | Privacidad y publicación |
| CAP-008 | Administración, reportes y moderación | Candidata | Roles |
| CAP-009 | SEO y configuración por proyecto | Candidata | Plantilla |
| CAP-010 | Carrito, pedidos y pagos | **NO decidido** | Modelo comercial |

## Preguntas bloqueantes (no elegir por suposición)
- PROD-001: ¿El MVP es anuncios con contacto externo, tienda con checkout, o ambos como módulos opcionales?
- PROD-002: ¿Quién crea publicaciones: usuarios, solo vendedores validados o administradores?
- PROD-003: ¿Qué roles concretos existen y cómo se adquieren?
- PROD-004: ¿Qué estados y transiciones tendrá una publicación?
- PROD-005: ¿Hay verificación/moderación previa a publicación y cómo se reporta contenido?
- PROD-006: ¿Cómo modelamos productos, servicios y categorías variables sin acoplamiento?
- PROD-007: ¿Datos públicos/privados de vendedor y política de contacto?
- PROD-008: ¿Búsqueda geográfica y niveles de ubicación?
- PROD-009: ¿Se admiten publicaciones gratuitas, destacadas o comisiones?
- PROD-010: ¿Qué funcionalidades cambian entre sitios derivados?

## Criterios para declarar una capacidad APPROVED
Cada CAP aprobada debe tener: propietario de módulo, historias/escenarios, permisos por operación, esquema de datos, estados y transiciones, errores, criterios REQ verificables, pruebas negativas y documentación de configurabilidad.

## Política de bloqueo
Se puede crear tooling genérico y esqueleto sin presuponer PROD-001..010; no se implementan flujos de publicación/autenticación definitiva hasta resolver sus decisiones correspondientes.
