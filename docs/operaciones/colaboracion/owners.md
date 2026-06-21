# Owners

<!--Hablar de
- Responsabilidades de owners
- codeowners dentro de .github
- Permisos y reglas (no push a main a menos que el owner dé review)-->
- 
Los owners de un proyecto se deciden de antemano a través del círculo, y se formalizan mediante el archivo `.github/CODEOWNERS`.

## CODEOWNERS

CODEOWNERS es una funcionalidad de GitHub que permite definir quiénes son los responsables 
de revisar cambios en determinadas partes del repositorio.

Cuando un Pull Request modifica archivos incluidos en CODEOWNERS, GitHub solicita automáticamente revisión a los usuarios o equipos asignados.

### Responsabilidades de los owners

Los owners son responsables de:

- Revisar los cambios realizados en los archivos bajo su responsabilidad.
- Aprobar o solicitar correcciones antes del merge.
- Mantener la calidad y consistencia del código de su área.

### Ubicación

El archivo suele ubicarse en:

`.github/CODEOWNERS`

### Ejemplos

Ejemplo mínimo
```CODEOWNERS
# Responsable de todo el repositorio
* @luis-cieza-silva
```

De [polars](https://github.com/pola-rs/polars/blob/main/.github/CODEOWNERS): 

```CODEOWNERS
# Responsable de todo el repositorio
*  @ritchie46 @c-peters

# Responsables de partes del repositorio
/crates/  @ritchie46 @orlp @c-peters
/crates/polars-sql/  @ritchie46 @orlp @c-peters @alexander-beedie
/crates/polars-parquet/  @ritchie46 @orlp @c-peters @coastalwhite
/crates/polars-time/  @ritchie46 @orlp @c-peters @MarcoGorelli
/crates/polars-python/  @ritchie46 @c-peters @alexander-beedie @MarcoGorelli @reswqa
/crates/polars-python/src/lazyframe/visit.rs  @ritchie46 @c-peters @alexander-beedie @MarcoGorelli @reswqa @wence- @Matt711
/crates/polars-python/src/lazyframe/visitor/  @ritchie46 @c-peters @alexander-beedie @MarcoGorelli @reswqa @wence- @Matt711
/py-polars/  @ritchie46 @c-peters @alexander-beedie @MarcoGorelli @reswqa
```

