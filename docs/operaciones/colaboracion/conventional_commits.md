# Conventional Commits
En C2 seguimos [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). 

Esta convención define ciertas categorías convencionales para los mensajes de commit. 

Tiene como fin de crear un historial de commits explícito y sencillo de leer, además de facilitar la integración con herramientas de versionado semántico y automatizar changelogs (bitácoras de cambios).

## Categorías para commits

| Categoría | Uso | Ejemplo |
|-----------|-----|----------|
| 🆕 **feat** | Nueva funcionalidad o capacidad para el usuario o para otros desarrolladores que consumen la aplicación, biblioteca o API. La más común. | `feat(auth): add login endpoint` |
| 🐛 **fix** | Corrección de un error o comportamiento incorrecto existente. | `fix(api): prevent null panic` |
| ⚠️ **!** | Cambio incompatible (breaking change). Indica que la modificación rompe compatibilidad con versiones anteriores y puede requerir ajustes por parte de quienes usan el proyecto. | `feat!: redesign authentication API` |
| 🧹 **chore** | Tareas de mantenimiento que no afectan directamente la funcionalidad del sistema. Incluye cambios en dependencias, configuración, herramientas de desarrollo, scripts, CI/CD o limpieza del repositorio. | `chore(ci): update GitHub Actions` |
| 🎨 **style** | Cambios relacionados con formato, estilo o presentación del código que no modifican su lógica ni comportamiento. Incluye ajustes de indentación, espacios, saltos de línea, ordenamiento de imports, formateo automático y convenciones de estilo. | `style(api): format code with ruff` |
| ♻️ **refactor** | Reestructuración o mejora interna del código sin modificar su comportamiento observable. No agrega funcionalidades ni corrige errores. | `refactor(parser): simplify validation logic` |
| 🧪 **test** | Adición, modificación o eliminación de pruebas automatizadas. No cambia el comportamiento del producto. | `test(auth): add login tests` |
| 📚 **docs** | Cambios únicamente en documentación, comentarios, guías, README, manuales o material de referencia. | `docs(readme): update installation guide` |

## Scopes

Opcionalmente, la categoría va acompañada del scope: un paréntesis que indica qué parte del proyecto fue afectada. Algunos ejemplos:

```
feat(api): add search endpoint
feat(ui): add dark mode
fix(db): correct migration script
docs(readme): update examples
test(auth): add login tests
```

Los scopes son opcionales, pero ayuda a dar mayor información sobre partes del código que fueron afectadas.

Para verificar commits con [commitlint](https://github.com/conventional-changelog/commitlint):
`.github/workflows/commitlint.yml`

```yml
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
```