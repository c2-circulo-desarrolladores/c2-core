# Conventional Commits
https://www.conventionalcommits.org/en/v1.0.0/
https://github.com/conventional-changelog/commitlint

Seguimos Conventional Commits, 

La idea es marcar los mensajes de los commits con ciertas categorías convencionales para crear un historial de commits explícito y sencillo de leer, además de facilitar la integración con herramientas de versionado semántico y otras herramientas automatizadas, como changelogs.

## Tipos de commits

- feat
  Nueva funcionalidad o capacidad para el usuario o para otros desarrolladores que consumen la aplicación, biblioteca o API.

- fix
  Corrección de un error o comportamiento incorrecto existente.

- !
  Cambio incompatible (breaking change). Indica que la modificación rompe compatibilidad con versiones anteriores y puede requerir ajustes por parte de quienes usan el proyecto.
  Ejemplo:
    feat!: redesign authentication API
    fix!: rename configuration fields

- chore
  Tareas de mantenimiento que no afectan directamente la funcionalidad del sistema. Incluye cambios en dependencias, configuración, herramientas de desarrollo, scripts, CI/CD o limpieza del repositorio.

- refactor
  Reestructuración o mejora interna del código sin modificar su comportamiento observable. No agrega funcionalidades ni corrige errores.

- test
  Adición, modificación o eliminación de pruebas automatizadas. No cambia el comportamiento del producto.

- docs
  Cambios únicamente en documentación, comentarios, guías, README, manuales o material de referencia.



Para verificar commits con commitlint
// .github/workflows/commitlint.yml
name: Lint commits

on:
  pull_request:

jobs:
  commitlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: wagoid/commitlint-github-action@v6