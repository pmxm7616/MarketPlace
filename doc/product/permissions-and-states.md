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

## Baja lógica aprobada y estados técnicos propuestos
**APROBADO:** el vendedor puede dar de baja sin borrar definitivamente; el artículo desactivado deja de ser público. **NO aprobado para el MVP:** reactivación (solo futura posibilidad). Los identificadores técnicos `DRAFT`, `ACTIVE`, `INACTIVE` se proponen para implementación, aún pendientes de contrato; eliminación definitiva y moderación también pendientes.

## Invariantes
- Nunca consultar visibilidad por UI solamente.
- BD/servidor validan ownership en cada modificación.
- El alta solo se confirma con una galería procesada de 1 a 10 imágenes (máximo 10 MiB por original, salida WebP optimizada).
- Solo artículos activos aparecen en catálogos, sitemap y tiendas públicas; la baja no destruye el registro.
- Cambio de estado requiere invalidar caches públicas apropiadas.
- Cambios de username no deben secuestrar URLs de otras tiendas.

## Casos negativos de prueba
Autenticación ausente; perfil incompleto; propietario incorrecto; ID manipulado; artículo inactivo; publicación concurrente; doble solicitud; cambio de estado inválido.
