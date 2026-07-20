# Changelogs

Un **changelog** es un registro cronológico de los cambios realizados en un proyecto entre una versión y otra. Su objetivo es documentar de forma clara qué funcionalidades se añadieron, qué errores se corrigieron y qué otras modificaciones importantes se realizaron, facilitando el seguimiento de la evolución del software.

Se encuentra en el archivo `CHANGELOG.md`, ubicado en la raíz del repositorio, y también suele incluirse en la documentación del proyecto.

Gracias al uso de **Conventional Commits**, herramientas como `git-cliff` clasifican automáticamente los commits en categorías como **Features**, **Bug Fixes**, **Documentation**, **Refactor**, entre otras — generando un `CHANGELOG.md` consistente y fácil de mantener, sin necesidad de escribirlo a mano.

## Cómo generar Changelogs

Con [c2-cli](../codigo/c2-cli.md), el `CHANGELOG.md` se actualiza automáticamente al ejecutar `c2 release`: cada nueva versión suma sus commits al archivo sin intervención manual.

Por debajo, `c2 release` usa **git-cliff**, una herramienta que analiza el historial de commits del repositorio y los organiza según las reglas definidas en `cliff.toml`.

Si el changelog de versiones anteriores quedó desactualizado o roto (por ejemplo, tras modificar `cliff.toml`), puedes regenerarlo por completo con:

```shell
git cliff -o CHANGELOG.md
```

Esto reprocesa **todo el historial de commits** desde cero, aplicando las reglas actuales de `cliff.toml` a cada release existente — no solo a la más reciente.