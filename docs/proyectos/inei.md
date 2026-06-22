## Proyectos base
https://github.com/fiorellarmartins/inei-microdatos
https://github.com/elpapx/enahopy  
https://github.com/jbenitesg/ProyectosINEI  
https://github.com/TJhon/PyPeruStats  
https://github.com/MaykolMedrano/enahodata_py

## Qué hace cada proyecto base

Tecnologías utilizadas, etc (por ejemplo, si uno usa solicitudes http o selenium)

## Por implementar

### Rendimiento en descargas
- [ ] Evaluar sesión AJAX (aparentemente más rápido)
- [ ] Evaluar `httpx` con asincronía (más rápido que `requests`, más lento que AJAX)

### Organización de archivos
- [ ] Definir qué guardar: ¿solo data o también PDFs?
- [ ] Definir estructura: ¿carpetas por categoría o flat?

### API
- [ ] Reducir funciones a importar — la API actual requiere demasiadas importaciones

### Dependencias
- [ ] Si el scope es solo descargas, las únicas dependencias deberían ser `requests` y `tqdm` (eliminar `pandas`)

### Documentación
- [ ] Redactar documentación base

### Arquitectura
- [ ] Evaluar separar en librería base + librerías derivadas por fuente

## Público objetivo