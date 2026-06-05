# Guía para escribir código Python

## Introduccion

Basado en el [Zen de Python](https://en.wikipedia.org/wiki/Zen_of_Python)

## Nomenclatura

### Nombres de archivos
#### General
- No caracteres especiales (tildes, ñ, $%&/=?¡!*)
- No mayúscula
- No espacios
- Nombre descriptivos, 
- Nombres cortos, no más de 2-3 palabras
#### Python
En Python no es posible importar archivos (módulos) si tienen lo siguiente:
- Guiones medios
- Números al principio 

```py
from mi-modulo import main # <- No funciona
from 1modulo import main # <- Tampoco
from mi_modulo import main # <- Este sí
```

#### Otros
- Archivos .md por convención van en mayúscula

### Nombres de variables
#### Variables generales
- Sustantivos
- Énfasis en poner nombres cortos y descriptivos (no x)
- No sobreescribir palabras reservadas (from, import, as, def, class, return, try, except, yield...).

```python
x = limpiar_caracteres() # -> Qué es x?
correo_limpio = limpiar_caracteres() # -> Más intuitivo
import = limpiar_caracteres() # -> Palabra reservada
```

#### Funciones
- Minúscula y guiones medios
- Verbos o acciones

```python
def limpiar_caracteres() # -> Bien
    ...
def limpiador_de_caracteres() # -> Por favor no
    ...
```
#### Clases
- Van en PascalCase
- Sustantivos (no verbos!)

```python
class MiObjeto
class MiSerializador
class Serializar # Por favor no
```

## Sintaxis
Copia la siguiente configuración y agrégala a *Preferences: Open User Settings (JSON)* para que Ruff sea tu linter y formateador de código por defecto.
Necesitas tener instalada la extensión de Ruff.

```json
"[python]": {
        "editor.defaultFormatter": "charliermarsh.ruff",
        "editor.formatOnSave": true
    },
```

Con esta configuración, al guardar un archivo, Ruff "formateará el código" de la siguiente forma:

- Quitará el espacio de los argumentos de funciones.
- Limitará tu código a una longitud de 80 líneas, y aplicará espacios de ser necesario
- Reemplazará TABs por espacios.
- Quitará espacios innecesarios
- Entre otros.


### Type hints

**Type hints son obligatorios para librerías de calidad.**

Python 3.5 introdujo los [type hints](https://peps.python.org/pep-0484/) (PEP 484),
una forma de anotar el tipo esperado de variables, argumentos de funciones y valores
de retorno. Aunque Python sigue siendo un lenguaje de tipado dinámico y los type hints
son *completamente opcionales*, ofrecen varias ventajas:

1. **Mejor autocompletado**: Muchos IDEs pueden ofrecer sugerencias más precisas al 
    conocer los tipos de datos. Sin type hints, los
    argumentos de funciones se interpretan como tipo "Any", lo que limita las
    sugerencias de métodos y atributos específicos del tipo anotado.

```python
# El IDE reconoce que 'nombre' es un str, y mostrará todos los métodos de str al escribir
def saludar(nombre: str):
    return f"Hola, {nombre.capitalize()}" 

# El IDE apuntará 'nombre' como Any, y no sabe qué métodos puede tener (eso se verá en runtime)
def saludar(nombre):
    return f"Hola, {nombre.capitalize()}" 
```

2. **Detección temprana de errores**: Herramientas como `mypy`, `pyright` o `ruff`
   pueden analizar tu código y detectar errores de inconsistencia de tipos antes de 
   ejecutarlo, especialmente cuando se configuran con opciones de tipado más estricto.

```python
# El IDE reconoce que un 'str' no tiene el método 'append' y mostrará error
def saludar(nombre: str) -> str:
    return f"Hola, {nombre.append('!')}" 
```

3. **Documentación implícita**: Los type hints hacen el código más legible al dejar
   claro qué tipos se esperan sin necesidad de documentación adicional.

```python

def sumar_valores(resultado): # <- ¿Qué es resultado? ¿Qué obtengo de él?
    ...

def sumar_valores(resultado: dict[str, int]) -> int:
    ...  # Ok, ya veo qué le debo pasar y qué voy a obtener
```

**Uso con linters y verificadores de tipos:**

Para acostumbrarse al uso de type hints, se recomienda cambiar el type checking mode de tu IDE.

- Preferences: Open Settings (UI) -> Type Checking (cambiar de básico a standard)

Para más información sobre type hints, consulta el [PEP 484](https://peps.python.org/pep-0484/)
y el módulo [`typing`](https://docs.python.org/3/library/typing.html) de la documentación
oficial de Python.


## Organización

### Comentarios

Usa comentarios en tu código a discreción. 
**Los comentarios deben explicar el por qué, y no el qué.**

No debe haber más líneas de comentarios que de código, pero tampoco el código debe quedar exento de ellos.

