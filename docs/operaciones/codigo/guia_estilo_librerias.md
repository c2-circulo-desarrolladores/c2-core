# Guía para diseñar y publicar librerías Python

## Diseño

Pensar en los siguientes puntos.

### ¿Cómo quiero que se importe mi librería? 

Tres paradigmas:

#### Importar toda la librería con un diminutivo.

Se importan todas las funciones y objetos en el `__init__.py`.  
Tu IDE muestra sugerencias al escribir el punto.

```py
import pandas as pd

df = pd.read_excel("ruta_a_mi_excel.xlsx")
df = pd.DataFrame(mi_objeto)
```

#### Importar funciones u objetos específicos
Permitir que el usuario importe lo que necesite. Conveniente
si no hay muchas funciones o clases por memorizar.

```py
from sqlalchemy import Column, String, Integer, create_engine

class Usuario(Base):
    id = Column(Integer, primary_key=True)
    nombre = Column(String)
```

#### Importar un objeto/clase global principal

Un objeto que contenga todos los métodos necesarios para la librería.

```py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"msg": "hola"}
```

!!! warning
    **Evita este patrón si tu librería es pequeña:**  
    Importar desde submódulos específicos, como `from sklearn.cluster import KMeans`, obliga al usuario a memorizar en qué submódulo vive cada cosa — algo justificado en librerías enormes, pero innecesario y complejo si la tuya es pequeña. Expón todo desde el `__init__.py` y permite simplemente `from mi_libreria import KMeans`.

## Estructura moderna de paquete Python

### Árbol
```
mi_libreria/
├── src/
│   └── mi_libreria/                        
│       ├── __init__.py
│       ├── carpeta/
│       │   ├── __init__.py
│       │   ├── script.py  
│       └── otra_carpeta/
│           ├── __init__.py
│           └── otro_script.py          
│
├── resources/      * Archivos de data (.json, etc) que quieres empaquetar con tu librería 
│
├── tests/
│   ├── __init__.py
│   │── conftest.py
│   ├── test_funcion.py
│   └── test_otra_funcion.py
│
├── pyproject.toml                         
├── uv.lock                                
├── .python-version                        
├── .gitignore
└── README.md
```

---
## Archivos
### `pyproject.toml`

Contiene la metadata necesaria para la configuración de tu librería.
Generado al correr `uv init`.

```toml
[project]
name = "mi_libreria"
version = "0.1.0"
description = "Librería para navegar, scrapear y serializar datos de cierta página web"
readme = "README.md"
requires-python = ">=3.11"
license = { text = "MIT" }
authors = [
  { name = "Tu Nombre", email = "tucorreo@example.com" }
]

dependencies = [
  "selenium>=4.0",
  "beautifulsoup4>=4.12",
  "requests>=2.31",
]


[project.optional-dependencies]
dev = [
  "pytest>=8.0",
  "pytest-cov>=5.0",
  "ruff>=0.4",
]

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[tool.hatch.build.targets.wheel]
packages = ["src/mi_libreria"]

[tool.hatch.build.targets.wheel.force-include]
"src/mi_libreria/resources" = "mi_libreria/resources"



[tool.ruff]
line-length = 88
src = ["src"]

[tool.ruff.lint]
select = ["E", "F", "I"]   # pycodestyle + pyflakes + isort


[tool.pytest.ini_options]
testpaths = ["tests"]
addopts   = "--cov=mi_libreria --cov-report=term-missing"
```

### README.md

### .gitignore

### justfile

---