# GitHub Actions

**GitHub Actions** es el sistema de CI/CD (integración y entrega continua) integrado en GitHub. Permite automatizar tareas del repositorio, como correr tests, chequear formato de código, generar releases o publicar documentación.

Los actions se configuran mediante *workflows* definidos en archivos YAML dentro de `.github/workflows/`. Cada workflow se dispara por un evento (un `push`, un `pull_request`, la creación de un tag, etc.) y ejecuta una serie de *jobs* en máquinas virtuales provistas por GitHub, sin necesidad de infraestructura propia.

!!! note
    Muchos de los workflows de esta página se agregan automáticamente al ejecutar `c2 init`. No hace falta copiarlos a mano.

## Workflows incluidos en C2

- [PR Template/Welcome](https://github.com/c2-circulo-desarrolladores/c2-cli/blob/main/src/folders/init/.github/pull_request_template.md)
- [Tests](https://github.com/c2-circulo-desarrolladores/c2-cli/blob/main/src/folders/init/.github/workflows/test.yml)
- [Release](https://github.com/c2-circulo-desarrolladores/c2-cli/blob/main/src/folders/init/.github/workflows/release.yml)

## Otros workflows
- [Update docs](https://github.com/pydantic/pydantic/blob/main/.github/workflows/docs-update.yml)
- [Deploy to Github Pages](https://github.com/c2-circulo-desarrolladores/c2-core/blob/main/.github/workflows/deploy.yaml)

No pasa nada, no hace falta traer el contenido exacto — te armo la sección con la estructura reorganizada, más una entrada de Issue Templates basada en el patrón que usa Polars (ellos usan issue forms en YAML, con plantillas separadas para bug reports y feature requests).
markdown# GitHub Actions

**GitHub Actions** es el sistema de CI/CD (integración y entrega continua) integrado en GitHub. Permite automatizar tareas del repositorio, como correr tests, chequear formato de código, generar releases o publicar documentación.

Los actions se configuran mediante *workflows* definidos en archivos YAML dentro de `.github/workflows/`. Cada workflow se dispara por un evento (un `push`, un `pull_request`, la creación de un tag, etc.) y ejecuta una serie de *jobs* en máquinas virtuales provistas por GitHub, sin necesidad de infraestructura propia.

!!! note
    Muchos de los workflows de esta página se agregan automáticamente al ejecutar `c2 init`. No hace falta copiarlos a mano.

## Workflows incluidos en C2
- [Tests](https://github.com/c2-circulo-desarrolladores/c2-cli/blob/main/src/folders/init/.github/workflows/test.yml)
- [Release](https://github.com/c2-circulo-desarrolladores/c2-cli/blob/main/src/folders/init/.github/workflows/release.yml)

## Otros workflows
- [PR Welcome](https://github.com/matplotlib/matplotlib/blob/main/.github/workflows/pr_welcome.yml)
- [Update docs](https://github.com/pydantic/pydantic/blob/main/.github/workflows/docs-update.yml)
- [Deploy to Github Pages](https://github.com/c2-circulo-desarrolladores/c2-core/blob/main/.github/workflows/deploy.yaml)

## Issue Templates

Un **Issue Template** define una estructura predefinida que se le muestra al usuario cuando abre un issue nuevo, en vez de una caja de texto en blanco. Se guardan en `.github/ISSUE_TEMPLATE/`, y GitHub permite tener varios (bug report, feature request, etc.), mostrando un selector al momento de crear el issue.

Pueden escribirse como Markdown simple (`.md`) o como **issue forms** en YAML (`.yml`), que agregan campos estructurados con validaciones (checkboxes obligatorios, dropdowns, campos de texto requeridos). Polars usa este segundo enfoque:

- [bug_report.yml](https://github.com/pola-rs/polars/tree/main/.github/ISSUE_TEMPLATE)
- [feature_request.yml](https://github.com/pola-rs/polars/tree/main/.github/ISSUE_TEMPLATE)

También suele incluirse un `config.yml` dentro de la misma carpeta, que controla si se permite abrir issues en blanco (`blank_issues_enabled`) y puede agregar links externos (por ejemplo, a Discussions o a un canal de soporte) como opciones adicionales del selector.

## Pull Request Templates

Un **PR Template** (`.github/PULL_REQUEST_TEMPLATE.md`) es un archivo Markdown que se autocompleta cada vez que alguien abre un Pull Request, precargando una estructura estándar (descripción del cambio, tipo de cambio, checklist, issues relacionados, etc.) en vez de dejar la descripción en blanco.

A diferencia de los Issue Templates, solo existe un PR Template por repositorio.

- [PR Template de C2](https://github.com/c2-circulo-desarrolladores/c2-cli/blob/main/src/folders/init/.github/pull_request_template.md)
- [PR Template de Pydantic](https://github.com/pydantic/pydantic/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
