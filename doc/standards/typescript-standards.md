# Estándares TypeScript

**Estado:** a aplicar cuando se inicialice `tsconfig.json`.

- `strict: true`; evaluar `noUncheckedIndexedAccess` y `exactOptionalPropertyTypes` antes de fijar configuración.
- No usar `any` salvo excepción documentada y localizada; preferir `unknown` y narrowing.
- No confiar en tipos estáticos para validar entradas externas: validar en runtime.
- Evitar assertions `as` para silenciar errores; documentar límites inevitables.
- Preferir uniones discriminadas para estados y resultados.
- Modelar identificadores, importes, fechas y estados de forma explícita; no mezclar unidades.
- No usar `number` flotante para cálculos monetarios sin estrategia definida (minor units o decimal).
- Mantener tipos del dominio independientes de DTO HTTP, tablas Drizzle y componentes UI.
- Preferir composición a jerarquías de clases profundas.
- Usar `readonly` en contratos inmutables cuando aporte seguridad.
- Promesas y errores deben manejarse explícitamente; evitar fire-and-forget sin infraestructura para observar fallos.
- No exponer campos sensibles en DTO de respuesta.

## Ejemplo orientativo
```ts
export type PublishListingInput = Readonly<{
  sellerId: string;
  title: string;
}>;

export type PublishListingResult =
  | { ok: true; listingId: string }
  | { ok: false; reason: "not-authorized" | "invalid-input" };
```

No implementar el ejemplo como contrato definitivo hasta definir el dominio.
