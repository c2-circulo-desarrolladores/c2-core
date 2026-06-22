# C2 - core

Repositorio de la página del Círculo de Desarrolladores Open Source - Perú (C2).  
La página web se puede acceder mediante [este enlace](https://c2-circulo-desarrolladores.github.io/c2-core/).

## Qué contiene

- `docs/` — Documentos en Markdown que componen el sitio web.
- `mkdocs.yml/` — Configuración de la página (metadata, navigation tree, etc)
- `docs/stylesheets/extra.css` — CSS de la pagína

## Cómo levantar la página localmente

Con uv:

```shell
uv sync
uv run mkdocs serve --livereload
```
