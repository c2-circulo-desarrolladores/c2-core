# Consulta Amigable (Mef)

## Descripción


## Diagnóstico
La página de [consulta amigable](https://apps5.mineco.gob.pe/transparencia/Navegador/default.aspx) es utilizada por 
cientos de miles (fuente) de usuarios al día.
Para e  (SERVIR, etc), es frecuente la extracción de datos de gasto para diferentes niveles (gobiernos regionales, municipalidades, etc) para diferentes años.
Sin embargo, la interfaz (point and click) es bastante tediosa para extraer datos de múltiples años y tiene bastante
potencial de automatización.

Asimismo, gran parte del análisis de gasto se realiza con software estadístico (R, Stata), por lo que muchos usuarios se beneficiarían de un ETL

## Impacto

## Ejecución
### Proyectos base
#### [PyPeruStats](https://github.com/TJhon/PyPeruStats)
Ventajas:
- API intuitiva y familiar.
- 

Desventajas:
- Bundled con librerías para otras páginas, la hace pesada
- Evaluar uso de httpx 

#### [Web-Scraping-Consulta-Amigable-MEF](https://github.com/AlexEvanan/Web-Scraping-Consulta-Amigable-MEF)
- Uso de Selenium/Playwright para abrir un navegador, grabar los clicks del usuario (como una macro) y generar un .yml con datos de la ruta que se pueden replicar para otros años.
Ventajas:
- Low-code: código ya escrito, el usuario solo tendría que grabar la macro y 
Desventajas:
- Dependencias pesadas que no se pueden bundle fácilmente a PyPi.
- Playwright scrapea de manera inconsistente (a veces hace click antes de cargar la página)

#### En R
https://github.com/rnicolasmr1998/Web_Scraping_Consulta_Amigable_MEF/tree/main/02_Script
https://github.com/calderonsamuel/consulta_amigable_universidades

### Discusión
Diseño de la API:
Cuando alguien dice MEF, piensa en muchas cosas. Cuando alguien dice Consulta Amigable, solo piensa en la página del gasto.
Pensar en cómo traducir esto en nuestra librería

¿Qué tanto valor habría en hacer una herramienta zero-code? Un .exe que grabe los clicks del usuario, .yml o código o una manera de persistir la ruta, y una interfaz en tkinter para que el usuario ponga los años para los cuales repetir la ruta.
Si hubiera valor, sería a largo plazo: comenzar con la librería PyPeruStats.

Bindings a R también.

