# Personalización del template

**Estado: propuesta; contratos exactos pendientes.**

Cada marketplace derivado es un despliegue independiente. La base no debe forzar una marca o vertical.

## Reglas
- Diferenciar configuración (branding, textos, enlaces, recursos) de módulos optativos (pagos, filtros avanzados).
- Preferir puntos de extensión tipados e inyección de adaptadores antes de copiar módulos.
- Personalización visual mediante tokens CSS, contenido y recursos propios.
- Secretos y credenciales por sitio. Base de datos/bucket OAuth y dominio independientes.
- Evitar lógica condicional por nombre de marketplace en el core.
- Toda extensión tiene compatibilidad y comportamiento por defecto documentado.
- Prueba de plantilla: crear dos proyectos con configuraciones diferentes y verificar independencia.

## Pendientes
Definir esquema de configuración, qué módulos son opcionales, mecanismo de activación, soporte de actualizaciones desde plantilla y estrategia de migraciones entre derivados.

## Integridad
No prometer sincronización automática entre repositorios derivados: GitHub Template genera copias iniciales, no garantiza actualización futura.
