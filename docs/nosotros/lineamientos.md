# Lineamientos para desarrollar proyectos

Este documento es el punto de entrada para el desarrollo de nuevos proyectos en C2, siguiendo los estándares y convenciones del equipo. 

Un **proyecto** es cualquier repositorio desarrollado dentro de [la organización C2](https://github.com/c2-circulo-desarrolladores), ccomo una librería, una aplicación, una API, un CLI u otro tipo de software.

El flujo de desarrollo completo se describe en el apartado de [Operaciones](../operaciones/index.md). Aquí se presenta una guía rápida de los lineamientos y herramientas necesarios para iniciar un proyecto.

## Herramientas antes de empezar a trabajar
- Es necesario tener conocimientos de [git](../operaciones/colaboracion/git_workflow.md) para empezar a colaborar.
- Usamos [c2-cli](../operaciones/codigo/c2-cli.md) para inicializar proyectos y crear lanzamientos (releases).
- Usamos [uv](../operaciones/codigo/uv.md) como gestor de dependencias.
- Seguimos [conventional-commits](../operaciones/colaboracion/conventional_commits.md) para nuestros mensajes de commit y generar el [CHANGELOG.md](../operaciones/mantenimiento/changelogs.md).

## Inicializar un nuevo proyecto

1. Creas un nuevo repositorio en la organización con un README vacío.
2. Ejecutar `c2 init` para inicializar el repositorio con los archivos necesarios y hacer el commit inicial.
3. Dentro del README, colocar el [siguiente template](../proyectos/template.md) y rellenar los campos.

## Configuración del proyecto

Hay un par de configuraciones necesarias que se deben aplicar luego de incializar el proyecto.

- Escribir el archivo [CODEOWNERS](../operaciones/colaboracion/owners.md)
- Licencia MIT (discutir)
- Crear [Proyectos](../operaciones/colaboracion/github_projects.md)
- Aplicar protección a la rama main (solo los owners deberían mergear a main).

## Ramas
- No es necesario trabajar sobre ramas en la fase temprana del proyecto, pero sí una vez que se empiece a poblar la carpeta `src/`.
- Antes de crear una rama, debe existir un issue sobre la tarea que se va a trabajar (creado por cuenta propia o asignado) 
- Se debe crear la rama utilizando la siguiente sintaxis: c-#issue (por ejemplo: c-11)
- Eliminar la rama después de mergearla

## Documentación
- En español, opcionalmente en inglés (si se puede con Mkdocs)

Ejemplo: https://github.com/c2-circulo-desarrolladores/BCRP

### Dependencias

#### Datos

