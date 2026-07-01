# Issues

Los issues (en español 'tiquetes') son una parte fundamental de la colaboración en el open source: abrir un issue reporta un problema, propone una mejora, inicia una conversación o permite visibilizar el trabajo pendiente.

Es importante enfatizar que **cualquier persona puede abrir un issue**, sea owner, colaborador o un usuario de Github no relacionado al proyecto. Abre uno tan pronto identifiques algo que merezca atención: una feature, un fix, un bug, un cambio de estilo, una propuesta de refactorización, etc.

Un issue abierto es una invitación a colaborar, no una crítica. Los issues más costosos son los que nunca se abren.

## Componentes importantes

### Etiquetas

Las etiquetas clasifican issues por scope y prioridad, además de definir áreas de responsabilidad. Aunque los issues pueden abrirse sin etiquetas, estas le dan valor agregado.

Github ya viene con algunas etiquetas predeterminadas (`bug`, `documentation`, etc), pero es responsabilidad de los owners crear etiquetas de scope específicas para su proyecto (por ejemplo: `frontend`, `backend`, `docs`).

### Type

- `Bug`
- `Feature`
- `Task`
- `Low`

### Prioridad

- `Urgent`
- `High`
- `Medium`
- `Low`

### Milestones

Los milestones agrupan los issues (y pull requests) necesarios para alcanzar un objetivo concreto. 

Se suelen crear con los nombres de las versiones futuras: si la versión actual de la librería es 1.0.0, un milestone de 2.0.0 contiene todo lo que debe completarse antes de ese lanzamiento, respondiendo a la pregunta ¿qué falta para la siguiente versión? con issues concretos.

Intenta asignarles una fecha límite tentativa, aunque sea aproximada.

## Recomendaciones

- Un issue no debería tomar más de 2 horas en resolver. Si toma más tiempo, idealmente debería dividirse en issues más pequeños.
- Los commits o las PRs pueden cerrar issues automáticamente al incluir la palabra reservada *closes* acompañada del número del issue (ejemplo: fix: arregla gráfico (closes #20))