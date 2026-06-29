# Versionamiento

El versionamiento es el sistema mediante el cual un proyecto comunica el alcance de sus cambios a quienes dependen de él. En lugar de publicar actualizaciones sin contexto, cada versión lleva un número que indica si algo se rompió, si se agregó funcionalidad nueva, o si simplemente se corrigió un error.

El estándar más extendido es [Semantic Versioning](https://semver.org/) (SemVer), que estructura las versiones como `MAJOR.MINOR.PATCH` (por ejemplo, `2.4.1`).

El versionamiento importa porque:

- **Documenta la evolución del proyecto.** El historial de versiones es, en la práctica, un registro de decisiones técnicas y su impacto.
- **Genera confianza.** Quienes usan una librería pueden decidir cuándo y cómo actualizar con información clara sobre el riesgo.
- **Reduce fricciones en equipos.** Un bump de versión bien etiquetado comunica intención sin necesidad de leer cada commit.

## Major

Una versión major introduce cambios que **rompen la compatibilidad** con versiones anteriores. Un proyecto que depende de `1.x.x` podría dejar de funcionar al actualizar a `2.0.0` sin hacer ajustes.

Commitizen considera major los commits marcados como breaking change; es decir, aquellos que incluyen un `!` en su tipo (por ejemplo, `feat!` o `refactor!`).

Algunos consensos:

- `0.x.x` indica que la librería aún no es estable y puede atravesar cambios estructurales importantes antes de llegar a `1.0.0`. Dicho esto, muchas librerías en esta etapa se usan en producción (FastAPI, varias del ecosistema de Rust).
- `1.x.x` en adelante indica que la API es relativamente estable y confiable para producción.
- Es poco común ver librerías superar la versión `10.x.x`. Hay que ser prudente al incrementar el major: cada bump es una señal fuerte para quienes dependen del proyecto.

## Minor

Una versión minor introduce funcionalidades nuevas que **no rompen la compatibilidad** con versiones anteriores. Un proyecto que depende de `1.2.0` debería seguir funcionando sin cambios al actualizar a `1.3.0`.

Commitizen considera minor los commits de tipo `feat`.

Algunos consensos:

- Agregar un nuevo endpoint, método o parámetro opcional cuenta como minor.
- Deprecar una funcionalidad (sin eliminarla) también es minor; la eliminación vendría en un major.
- Las versiones minor pueden acumularse con frecuencia en proyectos activos.

## Patch

Una versión patch corrige errores o introduce mejoras internas que **no cambian la interfaz pública** del proyecto. Actualizar de `1.2.0` a `1.2.1` no debería requerir ningún ajuste en el código que depende de la librería.

Commitizen considera patch los commits de tipo `fix`.

Algunos consensos:

- Corregir un bug, mejorar un mensaje de error o ajustar el comportamiento de un caso borde cuenta como patch.
- Cambios en documentación, tests o configuración interna también suelen ir como patch (o simplemente no generan una nueva versión, dependiendo del proyecto).
- Los patches son los bumps más frecuentes y los de menor riesgo; no hay razón para postergarlos.
