# Testing

## Motivación para crear tests

A medida que una librería crece, es común reorganizar módulos, optimizar algoritmos o modificar implementaciones internas. Una suite de pruebas bien construida permite realizar estos cambios con confianza: si los tests siguen pasando, sabemos que el comportamiento público de la librería permanece intacto.

Para proyectos open source, los tests se consideran una parte tan importante como el propio código fuente.  

En Python, la herramienta más utilizada para testear código es **pytest**.

## Introducción a Pytest

**Nunca agregues pytest como dependencia directa de tu librería**. Agrégala como parte de las
dependencias dev.

```bash
uv add --dev pytest
```

Comienza creando una carpeta `test/` en el root de tu repositorio (al mismo nivel del README.md). Dentro, crea archivos llamados `test_*.py` y define funciones de prueba.  

Este código iría dentro de `test/test_calculadora.py`:

```python
from calculadora import sumar

def test_sumar():
    assert sumar(2, 3) == 5
```

Para ejecutar todas las pruebas del proyecto:

```bash
pytest
```

También podemos ejecutar un archivo específico:

```bash
pytest tests/test_calculadora.py
```

o una prueba individual:

```bash
pytest tests/test_calculadora.py::test_sumar
```

## Fixtures: reutilizando setup

Uno de los conceptos más útiles de pytest son las **fixtures**, que permiten reutilizar código de preparación entre múltiples pruebas.

Sin fixtures:

```python
def test_usuario():
    usuario = Usuario("Michael")
    assert usuario.nombre == "Michael"

def test_saludo():
    usuario = Usuario("Michael")
    assert usuario.saludar() == "Hola Michael"
```

Con fixtures:

```python
import pytest

@pytest.fixture
def usuario():
    return Usuario("Michael")

def test_usuario(usuario):
    assert usuario.nombre == "Michael"

def test_saludo(usuario):
    assert usuario.saludar() == "Hola Michael"
```

Pytest inyecta automáticamente la fixture en las pruebas que la solicitan como parámetro. Esto reduce duplicación y centraliza la lógica de creación de objetos, conexiones o datos de prueba.

## Recursos
- [Pytest fixtures](https://www.youtube.com/watch?v=ScEQRKwUePI)