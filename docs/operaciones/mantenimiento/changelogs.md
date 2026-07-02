# Changelogs

Un **changelog** es un registro cronológico de los cambios realizados en un proyecto entre una versión y otra. Su objetivo es documentar de forma clara qué funcionalidades se añadieron, qué errores se corrigieron y qué otras modificaciones importantes se realizaron, facilitando el seguimiento de la evolución del software.

Se observa en el archivo `CHANGELOG.md`, que se encuentra en el root del repositorio. También se suele incluir en la documentación del proyecto.

## Con git-cliff

En este proyecto, el changelog se genera automáticamente mediante **git-cliff**, una herramienta que analiza el historial de commits del repositorio y los organiza según las reglas definidas en `cliff.toml`. 

!!! note
    git-cliff se añade como dependencia al ejecutar `c2 init`. Más información [aquí](../../codigo/c2-cli.md).

Gracias al uso de **Conventional Commits**, git-cliff clasifica automáticamente los cambios en categorías como **Features**, **Bug Fixes**, **Documentation**, **Refactor** y otras, generando un `CHANGELOG.md` consistente y fácil de mantener.

El changelog se actualiza automáticamente durante el proceso de release mediante los *post bump hooks* de Commitizen, por lo que no es necesario editarlo manualmente.