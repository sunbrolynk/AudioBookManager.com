---
title: Traer una biblioteca
description: Mete una colección que ya tienes en ABM sin riesgos.
---

## Antes de empezar

1. Haz una copia de seguridad de la colección. Library Import copia por defecto, pero cuenta con que puede haber errores.
2. Configura una carpeta raíz y un perfil de calidad, y asegúrate de que se puede llegar a la fuente de metadatos.
3. Decide entre copiar, mover o enlace duro. Copiar es lo más seguro. El enlace duro ahorra espacio si la biblioteca está en el mismo sistema de archivos que el origen. Consulta [Media Management](/es/settings/media-management/).

## Los pasos

1. En **Library > Library Import**, escanea la carpeta.
2. Lee la lista. Las coincidencias muestran un porcentaje. Corrige las filas **Needs attention** y **Unmatched** con **Find a match**, o une las filas que son un mismo libro repartido en varias carpetas.
3. Revisa la portada y los archivos extra de cada carpeta solo si quieres cambiar los valores por defecto.
4. Selecciona las filas y añádelas. Si aceptas los valores por defecto, siguen siendo dos clics.
5. Sigue la tarea. El resumen dice cuántos archivos se copiaron en lugar de enlazarse y qué falló.

## Si quieres que ABM gestione la carpeta de origen

Añádela como carpeta raíz y deja que ABM la escanee. Así los archivos se quedan donde están y los libros toman su estado de lo que hay en el disco.

## Detalles a tener en cuenta

- Un libro que ya está en la biblioteca aparece como tal. Rechaza el duplicado con la respuesta keep library en lugar de importarlo dos veces.
- Rechazar una carpeta sin audio solo elimina lo que pertenece a esa fila, y va a la papelera de reciclaje si está activada.
- Un ASIN encontrado en una descripción es una pista, no una coincidencia, salvo que el título también concuerde.
- Después de importar, actualiza para traer los metadatos actuales, y activa la escritura de archivos auxiliares si quieres que Audiobookshelf vea lo que elegiste en ABM. Consulta [Archivos auxiliares](/es/using/sidecars/).
