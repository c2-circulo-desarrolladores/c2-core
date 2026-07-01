# Releases

Una release es la publicación oficial de una versión del proyecto. En la práctica, una release está asociada a un tag de Git (`v0.1.0`, `v1.2.3`, etc.) y sirve como un punto de referencia estable que puede ser descargado, instalado o utilizado por otras personas.

Las releases importan porque:

- **Identifican estados estables del proyecto.** Un tag apunta a un commit específico y permite volver exactamente a esa versión.
- **Documentan la evolución del proyecto.** Cada release agrupa los cambios introducidos desde la versión anterior.
- **Facilitan la distribución.** Gestores de paquetes, pipelines y despliegues suelen trabajar sobre versiones concretas, no sobre commits arbitrarios.
- **Mejoran la trazabilidad.** Si un problema ocurre en `v1.2.0`, es posible reproducir exactamente ese estado del proyecto.

## Primera release

Cuando el proyecto aún no tiene ninguna release, se debe crear un tag inicial:

```bash
git tag v0.1.0
git push origin v0.1.0
```

Se empieza con `v0.1.0` porque es la primera versión al ejecutar `uv init`. 

La convención `0.x.x` indica que el proyecto todavía no posee una API estable y puede atravesar cambios importantes antes de llegar a `1.0.0`.

## Releases posteriores

Una vez que existe al menos una release, el flujo de trabajo es diferente:

1. Crear una rama de trabajo.

```bash
git switch -c T101
```

2. Realizar cambios y crear commits utilizando Conventional Commits.

```bash
feat: add attendance tracking
fix: correct duplicate member validation
```

3. Publicar la rama y abrir un Pull Request hacia `main`.

```bash
git push -u origin T101
```

4. Revisar y aprobar el Pull Request.

5. Cambiar y actualizar la rama `main`.
   
```bash
git switch main
git pull origin main --rebase
```

6. Generar la siguiente versión desde `main`.

```bash
uv run cz bump
```

Commitizen determinará automáticamente si corresponde un bump patch, minor o major, actualizará la versión del proyecto y creará el tag correspondiente. Si deseas hardcodear, se puede hacer de la siguiente manera:

7. Publicar el commit de release y el nuevo tag.

```bash
git push --follow-tags
```

Al hacerse push del nuevo tag (`v0.2.0`, `v0.2.1`, `v1.0.0`, etc.), el workflow de GitHub Actions se ejecutará automáticamente.

## Workflow de release

La publicación de releases está completamente automatizada gracias a [este workflow de Github Actions](github_actions#releases).

Una vez activado:

1. Obtiene el historial completo del repositorio.
2. Instala las dependencias del proyecto.
3. Busca el tag anterior.
4. Genera un changelog con los cambios entre ambas versiones mediante Commitizen.
5. Crea la release en GitHub utilizando ese changelog como descripción.

El resultado es un proceso completamente automatizado: los commits determinan la versión, la versión genera un tag y el tag produce la release correspondiente en GitHub.