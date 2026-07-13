# UV

**uv** es un gestor de paquetes y entornos para Python moderno. Se ha convertido en una de las alternativas más eficientes y rápidas frente a herramientas tradicionales como `pip` y `venv`, simplificando todo el flujo de trabajo del desarrollo.

En corto, **uv** crea y gestiona un entorno virtual (`.venv`) a partir de las dependencias declaradas en el `pyproject.toml`, garantizando que ese entorno sea idéntico entre máquinas y evitando el problema de "funciona en mi máquina".

Documentación oficial [aquí](https://docs.astral.sh/uv/)

Para instalarlo desde Windows:

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

## Por qué usar `uv`

- **Velocidad**: escrito en Rust, resuelve e instala dependencias considerablemente más rápido que `pip`.
- **Todo en uno**: reemplaza `pip`, `venv`, `pip-tools` y `virtualenv` con una sola herramienta.
- **Gestión de entornos automática**: crea y sincroniza el `.venv` sin pasos manuales.
- **Compatible con el ecosistema actual**: entiende `pyproject.toml`, `requirements.txt` y proyectos existentes sin fricción.

!!! tip "En corto"
    Si vienes de `pip` + `venv`, piensa en `uv` como ambos combinados, pero mucho más rápido y con menos pasos manuales.

## Workflow típico

### Setup inicial

Inicializar un proyecto

```shell
uv init
```
!!! tip
    Este comando es reemplazado por `init` de [`c2-cli`](c2-cli.md) para inicializar tu proyecto, pues ejecuta `uv init` por debajo y además agrega archivos adicionales.

### Gestión de dependencias

```shell
uv add [libreria]
```

### Ejecutar código

```shell
uv sync
uv run [path/a/tu/script.py]
```

!!! warning "Sincronización"
    Si has clonado o actualizado tu repo, recuerda correr `uv sync` para actualizar las dependencias instaladas.


## Hatchling

**Hatchling** es el motor que le permite a `uv` construir e instalar tu propio código como un paquete de Python. Al ejecutar `uv sync`, tu código se instalará como paquete dentro de tu `.venv`, y podrás importarlo fuera de la carpeta `src/`. 

Este bloque lo agrega automáticamente el comando `init` de **[`c2-cli`]**(c2-cli.md) a tu `pyproject.toml`:

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.build.targets.wheel]
packages = ["src/{package_name}"]
```