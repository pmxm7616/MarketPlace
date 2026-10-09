# Política de cobertura

La cobertura de líneas o ramas es un **indicador**, no prueba de corrección. Antes de fijar umbrales, medir baseline y riesgo por módulo.

## Obligatorio
- Identificar comportamientos críticos y sus casos negativos.
- Matriz de requisitos con pruebas asociadas.
- Pruebas de permisos, validación y manejo de errores en flujos sensibles.
- Evitar tests tautológicos que copien la implementación.
- Revisar mutaciones de pruebas cuando el comportamiento cambia.

## Propuesto
Establecer thresholds progresivos por módulo en CI una vez exista código, con excepciones justificadas y fecha de revisión. No bloquear documentación por falta de cobertura de código inexistente.
