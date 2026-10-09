# Límites de módulos y estructura

**Estado: propuesta, no implementada.** Referencia: [arquitectura general](../03-arquitectura.md).

## Estructura objetivo
```text
src/
  app/                 # Next.js App Router; composición, rutas y handlers
  modules/
    catalog/
      domain/
      application/
      infrastructure/
      ui/
    identity/
    sellers/
  shared/              # Primitivas genuinamente transversales
  config/
db/                    # Esquema, migraciones y utilidades
tests/                 # Integración, E2E y contratos transversales
public/
doc/
AGENTS.md
```
No crear módulos vacíos por anticipación. La estructura real evolucionará por tareas.

## Dirección de dependencias
- `domain`: reglas puras; no importa React, Next.js, Drizzle ni proveedores.
- `application`: casos de uso y puertos/contratos; depende de dominio.
- `infrastructure`: adaptadores de base de datos y proveedores; implementa puertos.
- `ui`: presentación y composición; no contiene SQL ni reglas de autorización.
- `app`: entrada HTTP/routing y composición; delega lógica.
- `shared`: solo piezas compartidas por al menos dos módulos; no crear cajón de sastre.

Evitar importaciones profundas entre módulos: definir APIs públicas cuando existan consumidores. Evitar ciclos de dependencia. Operaciones sensibles se validan y autorizan en servidor.

## Template independiente
Cada derivado tendrá base de datos, variables de entorno, dominio, almacenamiento, OAuth y despliegue propios. No codificar marca, moneda, departamentos ni categorías como universales sin decisión explícita. Bolivia es el mercado inicial; formato monetario, ubicación y privacidad requieren especificación.

## Preparación de escalado
No guardar uploads en disco local; no depender de estado de sesión en memoria del proceso; no asumir una sola instancia para invalidación de caché, rate limiting o tareas de fondo.

## Revisión arquitectónica por tarea
1. Identificar módulo dueño.
2. Especificar contratos y datos.
3. Verificar dirección de dependencias.
4. Considerar seguridad, caché y migraciones.
5. Añadir pruebas de casos de uso y límites.
6. Registrar decisión cuando se altera el diseño.
