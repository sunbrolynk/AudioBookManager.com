---
title: Importar biblioteca (Library Import)
description: Trae una colección que ya tienes a ABM con el Import Workbench.
---

Library Import escanea una carpeta de audiolibros, empareja cada carpeta con sus metadatos y añade los libros a tu biblioteca. La página se llama **Match Audiobooks**.

## El proceso

1. Escanea una carpeta. Cada carpeta con audio se convierte en una fila.
2. Revisa las coincidencias. Corrige las que lo necesiten.
3. Selecciona las filas y añádelas a la biblioteca.

Todas las opciones son sustituciones opcionales de un valor por defecto de Media Management. Un escaneo normal seguido de añadir nunca necesita más de dos clics.

## Cómo leer la lista

- El resumen muestra cuántas carpetas se encontraron y cuántas coinciden. Filtra la lista por All, Matched, Needs attention, Unmatched, In library o Failed lookup. El filtro se guarda en la dirección de la página.
- Cada fila muestra la portada, el título, el autor y la serie, y lo segura que es la coincidencia en porcentaje, por ejemplo "95% match". Los detalles de la carpeta tienen **Find a match** o **Change match** para buscar a mano.
- Cuando los archivos no tienen ASIN ni duración para confirmar la edición, los detalles de la carpeta lo indican.
- **Rescan** recoge las carpetas añadidas después del escaneo y conserva lo que ya elegiste.

Un ASIN encontrado en un comentario o una descripción es solo una pista. Solo cuenta como coincidencia cuando el título también concuerda con el nombre de la carpeta. Solo la etiqueta ASIN dedicada cuenta por sí sola.

## Unir, dividir y añadir

- Une las filas que son un mismo libro repartido en varias carpetas. Vuelve a dividirlas desde los detalles de la carpeta.
- Si no se puede añadir, el motivo aparece encima del botón, por ejemplo "Select at least one folder" o "2 selected rows still need a decision".
- Todo lo que vaya a borrar o reemplazar archivos te pregunta antes.
- Si sales de la página, tus cambios pendientes se guardan.

## Copiar, mover o enlace duro

**Settings > Media Management > Importing** define el valor por defecto de Library Import: copiar (por defecto), mover o enlace duro (hardlink). Puedes elegir otro en cada importación.

Un libro con enlace duro no ocupa espacio extra en disco y el original se queda donde está. El enlace duro necesita que la carpeta raíz por defecto lo admita y que se haya comprobado antes. Si no, la opción aparece en gris con el motivo. Un archivo que no se puede enlazar, por ejemplo uno que está en otro disco, se copia y nunca se mueve. Al terminar, la importación dice cuántos se copiaron.

## Archivos extra

**Import Extra Files** (activado por defecto) trae también la portada, las notas y otros archivos que no son audio del libro. Se aplica igual a Library Import, a Manual Import y a las descargas completadas. Con **Show Advanced**, **Preferred Cover** elige la portada de Audible de la coincidencia (por defecto) o la de la propia carpeta.

## Valores largos

Un narrador, un título o una ruta recortados con puntos suspensivos se muestran completos al tocarlos o al pulsar Enter o Espacio. Vuelve a tocar para cerrarlo.

## Respuestas distintas de importar

A una fila también se le puede responder **keep library** (rechazar una copia de un libro que ya está en la biblioteca) o **remove empty** (rechazar una carpeta sin audio, que todavía tiene ilustraciones y archivos auxiliares). Estas opciones solo limpian lo que pertenece a la fila. Todo lo que contenga audio se rechaza. Los archivos van a la papelera de reciclaje si hay una configurada, y el registro de la tarea enumera cada ruta eliminada.

## Portada y archivos extra por carpeta

El inspector muestra la portada propia de la carpeta junto a la de la edición emparejada, cada una con su tamaño en píxeles. Con un clic eliges la otra. Debajo, **Extra files** enumera todos los demás archivos bajo el nombre del interruptor de Media Management que siguen. Un punto marca una elección distinta de los ajustes, y **Apply this cover and these file choices to the N other selected** copia las elecciones de una carpeta al resto. Una fila que añade archivos a un libro que ya está en la biblioteca no tiene selector.

Consulta también [Traer una biblioteca](/es/guides/moving-a-library-in/) y [Media Management](/es/settings/media-management/).
