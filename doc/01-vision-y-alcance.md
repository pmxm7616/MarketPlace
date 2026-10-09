# Visión y alcance

## Objetivo
Crear una **base común** para desarrollar muchos sitios web tipo marketplace en Bolivia, con posibilidad de adaptar cada proyecto a otras necesidades. Al estabilizar la base, convertir este repositorio en un **GitHub Template Repository**.

## Modelo de reutilización
Cada nuevo sitio se genera desde la plantilla y tiene:
- Su propio repositorio, configuración, dominio, despliegue y base de datos.
- Identidad visual, categorías, reglas comerciales y módulos configurables.
- Ciclo de versiones y recursos independientes.

**No es multi-tenant por defecto**: múltiples sitios no compartirán necesariamente aplicación, base de datos ni infraestructura.

## Principios
1. Núcleo genérico sin nombres de marca ni categorías codificadas.
2. Monolito modular, separación entre dominio, infraestructura e interfaz.
3. Configuración explícita por proyecto; secretos fuera del repositorio.
4. SEO, accesibilidad, seguridad y rendimiento desde el inicio.
5. No agregar infraestructura compleja sin evidencia de necesidad.
6. Preparación para crecer sin prometer cifras de capacidad no medidas.

## Alcance inicial
Documentación, estructura base, configuración, convenciones, herramientas de calidad y mecanismos de observabilidad/caché que se definirán antes de implementarse.

## Fuera de alcance por ahora
Marketplace concreto, diseño de marca, pasarela de pagos, integración productiva de Facebook, infraestructura ya aprovisionada, multi-tenancy, microservicios, Kubernetes y conversión inmediata del repositorio en template.

## Preguntas abiertas
- ¿Publicaciones con contacto por WhatsApp o compras/carrito/pagos dentro del sitio? WhatsApp está previsto como canal de contacto, pero **no define por sí solo** todo el modelo comercial.
- ¿Qué módulos son comunes y cuáles opcionales (moderación, mensajería, promociones, reseñas, geolocalización)?
- ¿Qué campos de productos, categorías y filtros serán configurables?
- ¿Qué obligaciones legales y de privacidad aplicarán a cada marketplace en Bolivia?
