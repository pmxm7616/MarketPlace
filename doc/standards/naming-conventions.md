# Nombres, archivos y sintaxis

## Archivos y carpetas
- Directorios y archivos de dominio: `kebab-case` (ej. `product-repository.ts`).
- Componentes React: `PascalCase.tsx` (ej. `ProductCard.tsx`).
- Pruebas: `*.test.ts` / `*.test.tsx` próximas al módulo; integración/E2E transversal en `tests/`.
- Next.js: respetar nombres reservados `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx`, `not-found.tsx`.
- No archivos `utils.ts` gigantes ni directorios genéricos sin dueño claro.

## Identificadores
- Variables, parámetros, funciones y métodos: `camelCase`.
- Tipos, interfaces, clases, componentes: `PascalCase`.
- Constantes globales realmente inmutables: `UPPER_SNAKE_CASE`; constantes locales: `camelCase`.
- Booleanos: `is...`, `has...`, `can...`, `should...`.
- Funciones: verbo + objeto (`findProductById`, `publishListing`).
- Evitar abreviaturas ambiguas, prefijos de tipo húngaros y nombres como `data`, `info`, `manager` sin contexto.

## Funciones y parámetros
- Preferir funciones puras y pequeñas con una responsabilidad.
- Para más de dos parámetros del mismo tipo o parámetros opcionales, preferir objeto tipado.
- Parámetros explícitos y tipos de retorno en APIs exportadas.
- No aceptar `boolean` posicional cuando un enum/union expresa mejor la intención.
- Evitar argumentos por defecto que cambien seguridad o autorización implícitamente.
- No introducir clases sin necesidad de estado, polimorfismo o contrato explícito.

## Imports y exports
- Preferir exports nombrados, salvo requisitos de Next.js.
- No introducir dependencias circulares.
- Evitar barrels que escondan dependencias entre capas.
- Imports consistentes con alias cuando se configure; no asumir alias existente.

## Comentarios
Explicar invariantes, decisiones y riesgos; no narrar líneas obvias. TODO debe vincular a issue o decisión pendiente cuando exista seguimiento.
