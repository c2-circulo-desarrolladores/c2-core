# Owners

Los owners de un proyecto se deciden de antemano a través del círculo, y se formalizan mediante el archivo `.github/CODEOWNERS`.

## ¿Qué significa ser Owner de un repositorio?

Significa ser el principal punto de contacto del repo. Es quien revisar las contribuciones y define el roadmap.

El círculo puede co-mantener con el owner, proponer cambios de dirección o asumir responsabilidades si el owner lo necesita.

### Responsabilidades de los owners

- Aprobar o solicitar correcciones antes del merge de Pull Requests.
- Mantener la calidad y consistencia del código de su área.
- Seguir y hacer cumplir el workflow de colaboración en su repositorio:
  - No hacer push directo a `main`.
  - Seguir el [workflow de colaboración de Git](git_workflow.md)
  - Seguir el [workflow de Github](github_workflow.md)
  - Seguir [conventional commits](conventional_commits.md)
  
## CODEOWNERS

CODEOWNERS es una funcionalidad de GitHub que permite definir quiénes son los responsables de revisar cambios en determinadas partes del repositorio.

Estar en CODEOWNERS no implica "propiedad" del código, sino interés y responsabilidad de revisión sobre esa parte del proyecto.

Cuando un Pull Request modifica archivos incluidos en CODEOWNERS, GitHub solicita automáticamente revisión a los usuarios asignados.

El archivo se define en:

`.github/CODEOWNERS`

### Ejemplos

#### Ejemplo mínimo:

```CODEOWNERS
# Responsable de todo el repositorio
* @usuario1 @usuario2
```

#### Ejemplos reales:

En **[cpython](>https://github.com/python/cpython/blob/main/.github/CODEOWNERS)**— el intérprete oficial de Python — la responsabilidad se distribuye por módulo y entre varios colaboradores:

```CODEOWNERS
# GitHub & related scripts
.github/             @ezio-melotti @hugovk @AA-Turner @webknjaz

# Asyncio
Lib/asyncio/         @1st1 @asvetlov @kumaraditya303 @willingc

# Typing
Lib/typing.py            @JelleZijlstra @AlexWaygood
Lib/test/test_typing.py  @JelleZijlstra @AlexWaygood
```