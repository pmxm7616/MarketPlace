# Reglas para agentes de IA

Punto de entrada automático: [AGENTS.md](../../AGENTS.md). Este documento amplía el proceso, no reemplaza las instrucciones raíz.

## Comportamiento
- Investigar el código y los documentos relevantes **solo para la tarea**; no leer toda la documentación por defecto.
- Distinguir hechos verificados, propuestas y supuestos.
- Antes de cambios grandes, elaborar plan con alcance, archivos, riesgos y verificación.
- No ampliar alcance, cambiar stack, añadir dependencias o alterar contratos sin justificar y solicitar aprobación cuando afecte decisiones.
- No generar archivos de relleno ni abstracciones especulativas.
- No inventar resultados de tests ni enlaces a archivos inexistentes.
- Mantener documentación sincronizada con decisiones efectivas.
- Registrar problemas encontrados fuera del alcance sin arreglos colaterales no autorizados.

## Revisión cruzada
Comparar tarea contra especificación, límites arquitectónicos, estándares, pruebas, seguridad y diff. Una segunda revisión (humana o agente separado) es recomendada para cambios sensibles, pero no reemplaza CI ni pruebas.

## Contexto mínimo
Consultar [índice](../README.md), [protocolo](task-protocol.md), [checklist](review-checklist.md) y únicamente estándares aplicables.
