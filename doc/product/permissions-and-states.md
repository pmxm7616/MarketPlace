# Matriz de permisos y estados — propuesta

**Confirmado:** visitante puede leer públicos; usuario Facebook con username+WhatsApp publica; solo dueño edita/retira.

| Operación | Anónimo | Autenticado incompleto | Vendedor completo | Dueño de artículo | Otro vendedor |
| --- | --- | --- | --- | --- | --- |
| Ver artículos activos y tiendas | Sí | Sí | Sí | Sí | Sí |
| Login y onboarding | Login | Sí | N/A | N/A | N/A |
| Crear artículo | No | No | Sí | Sí | Sí, propio |
| Listar artículos propios incl. inactivos | No | No | Sí, propios | Sí | No |
| Editar artículo de otro | No | No | No | Solo propio | No |
| Retirar artículo de otro | No | No | No | Solo propio | No |
| Ver borradores/inactivos ajenos | No | No | No | Solo propios | No |

## Estados propuestos (a aprobar)
`DRAFT` → `ACTIVE` → `INACTIVE`; eventual `INACTIVE` → `ACTIVE` si reactivación aprobada; eventual `REMOVED` para eliminación definitiva. No asumir moderación automática.

## Invariantes
- Nunca consultar visibilidad por UI solamente.
- BD/servidor validan ownership en cada modificación.
- El alta solo se confirma con galería procesada.
- Solo ACTIVE aparece en catálogos, sitemap y tiendas públicas.
- Cambio de estado requiere invalidar caches públicas apropiadas.
- Cambios de username no deben secuestrar URLs de otras tiendas.

## Casos negativos de prueba
Autenticación ausente; perfil incompleto; propietario incorrecto; ID manipulado; artículo inactivo; publicación concurrente; doble solicitud; cambio de estado inválido.
