---
title: Importar biblioteca (Library Import)
description: Trae una colección que ya tienes a ABM con el Import Workbench.
---

Library Import escanea una carpeta de audiolibros, empareja cada carpeta con sus metadatos y añade los libros a tu biblioteca. **Library > Library Import** abre "Import audiobooks you already have", donde eliges una carpeta para escanear. En cuanto empieza el escaneo, ABM pasa a la página de emparejado, con el título **Match Audiobooks**, donde revisas las coincidencias y añades los libros.

## El proceso

1. Escanea una carpeta. Cada carpeta con audio se convierte en una fila.
2. Revisa las coincidencias. Corrige las que lo necesiten.
3. Marca las filas que quieras y luego añádelas a la biblioteca o bórralas.

Todas las opciones son sustituciones opcionales de un valor por defecto de Media Management.

## Cuándo se acepta una coincidencia

El escaneo acepta una coincidencia solo cuando los archivos la confirman:

- el ASIN de las etiquetas propias de los archivos encuentra el libro, o
- la duración del libro está a tres minutos o menos de la de los archivos, y su posición en la serie o su título coincide con ellos.

Un autor o una posición en la serie que contradice los archivos descarta un libro. Si los archivos encajan igual de bien con dos libros o grabaciones distintos, no se acepta ninguno.

La duración de los archivos solo cuenta cuando se pudo leer cada archivo del libro. Si uno no se puede medir, la fila no tiene duración: solo su ASIN puede confirmar una coincidencia y, si no, el libro espera en **Needs a look**.

Cuando un libro está en dos formatos, cada formato es su propia fila y se mide por separado. Un libro dividido en partes de distintos formatos es una sola fila cuando tiene su propia carpeta, y sus partes se suman.

Por duración solo se acepta una edición en inglés, o una cuya ficha no indica idioma. Una edición en otro idioma solo se acepta cuando la encuentra el propio ASIN de los archivos. Un libro respondido desde el [almacenamiento local](/es/settings/metadata/) en lugar de una consulta en vivo nunca se acepta sin ti.

Cuando falla una de las consultas de una fila, solo se acepta una coincidencia por ASIN. Un libro encontrado solo al buscar por el autor se ofrece solo cuando su duración encaja con la de los archivos, así que un libro sin ficha aparece como **Unmatched** en lugar de sugerir otro libro del autor.

Cualquier otra coincidencia se sigue ofreciendo como sugerencia, pero la fila cuenta en **Needs a look**, empieza sin marcar y **Select All** la deja fuera hasta que confirmes esa coincidencia o elijas otra. Una coincidencia aceptada con un libro que ya tienes en la biblioteca cuenta en **In library**. Una fila **Needs a look** cuya sugerencia es un libro de la biblioteca solo hace su pregunta sobre la biblioteca cuando confirmas esa coincidencia. Hasta entonces, si la marcas, bloquea Add como una fila que todavía necesita una decisión.

Un libro en varios archivos sueltos que comparten carpeta con otros libros, como una carpeta de autor o la carpeta que escaneas, es una sola fila con todas sus partes. Los archivos que se distinguen por un número de libro o de volumen siguen siendo filas separadas. Las partes se agrupan por formato: un archivo con el libro entero a su lado es una fila aparte, y una tasa de bits en el nombre de un archivo, como `128kbps`, no es un número de parte.

Dos formatos de un mismo libro, como `Book.mp3` y `Book.m4b`, son filas separadas, tanto si los archivos están sueltos en la carpeta que escaneas como si están en una carpeta propia del libro. Cada fila importa, quita y mide solo su propio archivo. Una portada, un cue u otro archivo que no es audio con el mismo nombre va con el archivo del libro cuando el libro está ahí en un formato, y se queda donde está cuando está en dos. Esto vale también cuando una copia se mueve a la biblioteca y la otra se quita en la misma importación.

Una etiqueta escrita como `Title: Series, Book 2` se lee como el título, la serie y su posición.

Una posición en la serie escrita como rango, como `1-3`, coincide con cualquier posición dentro de él. Dos números escritos de cualquier otra forma, como `1, 3`, cuentan como ninguna posición.

Se ignora una etiqueta de título, álbum, serie, parte de serie, artista, artista del álbum, compositor o narrador de más de 500 caracteres.

**Recent Import Sessions** en la página Library Import muestra en cada escaneo cuántas filas tienen coincidencia, contando los libros que ya están en la biblioteca, y cuántas están pendientes, contando las filas en las que aún tienes que elegir una coincidencia.

## Cómo leer la lista

- El resumen muestra cuántas carpetas se encontraron y cuántas están listas. La barra superior tiene **Sort** (Folder name, Status, Title, Author, Series, Files) y **Filter** (Ready, Needs a look, No audio, Unmatched, In library, Lookup failed, Needs a decision, Looking up, Deleted on add). Cada filtro muestra su número, y los números cuadran con el resumen. Una coincidencia que ya confirmaste se llama Ready. El orden y el filtro se recuerdan en este dispositivo. No se guardan en la dirección de la página, así que un enlace con `?sort=` o `?filter=` no los lleva consigo.
- Cada fila muestra la portada, el título, el autor y la serie, y lo segura que es la coincidencia en porcentaje, por ejemplo "95% match". Cada fila guarda todas las coincidencias que encuentran sus búsquedas por título, autor y serie. Los detalles de la carpeta tienen **Find a match** o **Change match** para buscar a mano. La búsqueda muestra primero las mejores coincidencias de Libex para lo que escribiste, y después los libros que encuentran las búsquedas por título, autor y serie, cada libro una sola vez, de 50 en 50. Se cargan más al desplazarte o con **Load more**, hasta que no quedan más.
- Cuando los archivos no tienen ASIN ni duración para confirmar la edición, los detalles de la carpeta lo indican.
- **Rescan** recoge las carpetas añadidas después del escaneo y conserva lo que ya elegiste.

Un ASIN encontrado en un comentario o una descripción es solo una pista. Solo cuenta como coincidencia cuando el título también concuerda con el nombre de la carpeta. Solo la etiqueta ASIN dedicada cuenta por sí sola.

## Unir, dividir y añadir

- Une las filas que son un mismo libro repartido en varias carpetas. Vuelve a dividirlas desde los detalles de la carpeta. La coincidencia de la fila unida es solo una sugerencia: cuenta en **Needs a look** y empieza sin marcar hasta que la confirmas o eliges otra. Su duración es el total de las partes solo cuando cada parte tiene una, y conserva un ASIN solo cuando todas las partes dan el mismo. Unir es solo para las partes de un mismo libro: deja dos formatos de un libro como filas separadas, porque al unirlas se suman las dos duraciones. Una consulta que termina después de que unas o dividas su fila también es solo una sugerencia.
- **Confirm match** en los detalles de una fila marca una fila **Needs a look**, y **Undo confirmation** quita esa marca.
- Si no se puede añadir, el motivo aparece encima del botón, por ejemplo "Select at least one folder" o "2 selected rows still need a decision". Añadir también se rechaza, sin tocar nada, cuando dos filas reclaman la misma carpeta o el mismo archivo. Cada fila se vuelve a comprobar al importarla: una fila cuya carpeta o archivo, o cualquier archivo unido a ella, está fuera de la carpeta que escaneó la sesión o sale de ella por un enlace falla con "Outside the folder this session scanned", y no se lee, mueve, copia, enlaza ni borra nada. Todas las filas fallan igual si su sesión de importación ya no existe.
- Todo lo que vaya a borrar o reemplazar archivos te pregunta antes.
- Si sales de la página, tus cambios pendientes se guardan.

## Copiar, mover o enlace duro

**Settings > Media Management > Importing** define el valor por defecto de Library Import: copiar (por defecto), mover o enlace duro (hardlink). Puedes elegir otro en cada importación.

Un libro con enlace duro no ocupa espacio extra en disco y el original se queda donde está. El enlace duro necesita que la carpeta raíz por defecto lo admita y que se haya comprobado antes. Si no, la opción aparece en gris con el motivo. Un archivo que no se puede enlazar, por ejemplo uno que está en otro disco, se copia y nunca se mueve. Al terminar, la importación dice cuántos se copiaron.

## Archivos extra

**Import Extra Files** (activado por defecto) trae también la portada, las notas y otros archivos que no son audio del libro. Se aplica igual a Library Import, a Manual Import y a las descargas completadas. Con **Show Advanced**, **Preferred Cover** elige la portada de Audible de la coincidencia (por defecto) o la de la propia carpeta.

## Valores largos

Un narrador, un título o una ruta recortados con puntos suspensivos se muestran completos al tocarlos o al hacer clic en ellos. Vuelve a tocar o a hacer clic para cerrarlo. Con ratón, al pasar el puntero por encima también se ve el valor entero. Con el teclado, ponle el foco y pulsa Enter o Espacio.

## Respuestas distintas de importar

A una fila también se le puede responder **keep library** (rechazar una copia de un libro que ya está en la biblioteca) o **remove empty** (rechazar una carpeta sin audio, que todavía tiene ilustraciones y archivos auxiliares). Estas opciones solo limpian lo que pertenece a la fila. **remove empty** rechaza todo lo que contenga audio. Los archivos van a la papelera de reciclaje si hay una configurada, y el registro de la tarea enumera cada ruta eliminada. Una decisión **keep library** vale solo para el libro de la biblioteca sobre el que era: si eliges una coincidencia que pregunta otra cosa o por otro libro de la biblioteca, la fila vuelve a preguntar. La importación lo comprueba otra vez al ejecutarse y no se quita nada si para entonces la copia de la biblioteca no tiene archivos ("Your library has no copy of this book to keep") o si la carpeta contiene archivos de un libro de tu biblioteca ("This folder holds files of a book in your library"). Las filas que quitan archivos en vez de importarlos se ejecutan solo cuando termina cada importación del mismo Añadir, y cada una se rechaza si en ese momento alguno de sus archivos pertenece a un libro de tu biblioteca. Así nunca quitan archivos de los que se acaba de añadir un libro en esa misma tanda.

## Portada y archivos extra por carpeta

El inspector muestra la portada propia de la carpeta junto a la de la edición emparejada, cada una con su tamaño en píxeles. Con un clic eliges la otra. Debajo, **Extra files** enumera todos los demás archivos bajo el nombre del interruptor de Media Management que siguen. Un punto marca una elección distinta de los ajustes, y **Apply this cover and these file choices to the N other selected** copia las elecciones de una carpeta al resto. Una fila que añade archivos a un libro que ya está en la biblioteca no tiene selector.

Consulta también [Traer una biblioteca](/es/guides/moving-a-library-in/) y [Media Management](/es/settings/media-management/).
