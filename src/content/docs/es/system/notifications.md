---
title: Notificaciones
description: La campana de la cabecera y el panel que se abre debajo.
---

La campana de la cabecera de escritorio es donde ABM te cuenta lo que ha pasado y lo que te necesita. Haz clic para abrir el panel de notificaciones. En el móvil todavía no hay campana.

## La campana

- El número de la campana es la cantidad de notificaciones sin leer. Pasado 99 muestra 99+. Si alguna sin leer es un error, el número se pone rojo.
- Un anillo alrededor de la campana es trabajo en curso. Cuando ABM sabe cuánto lleva, el anillo se llena hasta el promedio de los elementos en marcha. Cuando no lo sabe, el anillo solo gira.
- Una notificación nueva hace parpadear brevemente la campana con el color de su nivel. Si tienes activado el movimiento reducido en tu sistema, ese parpadeo se omite.
- Si el navegador pierde la conexión en vivo con ABM durante más de 10 segundos, la campana se convierte en una campana tachada con un anillo discontinuo. Vuelve cuando regresa la conexión.

El nombre accesible de la campana lee lo mismo: el número de sin leer, cuántos elementos están en marcha y su porcentaje, y si está sin conexión.

## El panel

De arriba abajo:

- **Needs attention** solo aparece cuando hay algo abierto. Son cosas que se quedan hasta que se resuelven, como un libro cuya descarga falló o una versión nueva de ABM. Cada una tiene un botón: **Search again** pone en cola una búsqueda de ese libro y **What's new** abre la página Updates. Otras abren la página a la que se refieren, o la tarea si se puede reanudar. La **x** de una fila la descarta.
- **Running** lista el trabajo en curso ahora mismo: tareas, descargas y conversiones, con el progreso y el tiempo restante cuando se conocen. Haz clic en una fila para ir a ella.
- **Recent** muestra primero las notificaciones más nuevas, con el número de sin leer. Al hacer clic se abre aquello a lo que se refiere y se marca como leída. Una fila también tiene botones para marcarla como leída o sin leer y para borrarla.
- **Load older** muestra más historial. Cuando no hay nada más antiguo, el panel lo dice.

Cuando las tres están vacías, el panel dice que estás al día.

El pie tiene **Mark all read** y un enlace al [registro de actividad](/es/system/activity-log/). El menú junto al título del panel tiene **Clear all**, que pregunta antes. Quita todas las notificaciones salvo las que aún necesitan atención. Esas se quedan hasta que las resuelvas o las descartes.

## Lo que no se registra

Una notificación puede venir de una tarea en segundo plano, una descarga o una conversión, o de algo que hiciste en el navegador y falló. Los controles del propio panel son la excepción. Si falla marcar como leída, borrar, descartar, vaciar o cargar más antiguas, el panel muestra el error junto a ese control y no añade ninguna notificación al respecto. Si no, una bandeja rota llenaría la bandeja.

## Resultados en el control

Las acciones en Library, Book Detail, Calendar, Authors y Series y las acciones de portada muestran su resultado como una línea corta en el control que usaste. Una línea de éxito simple se borra sola al cabo de un par de segundos. Un fallo o un aviso se queda hasta tu siguiente acción en ese control. Los fallos también se registran en Notificaciones, así que puedes encontrarlos cuando la línea ya no esté.

Un libro, autor o serie que se guarda pero cuyo catalog fill no arranca registra el aviso «Catalog fill not started». Un add all en el que fallan algunos libros registra «Some books were not added» con los motivos.

## Retención

Las notificaciones antiguas las quita la limpieza diaria de logs, por defecto a los **30 días**. Se ajusta con **Notifications Retention** en la página [General](/es/settings/general/), o con `inbox_retention_days` en la [API](/es/system/api/). 0 las conserva para siempre. Las notificaciones que aún necesitan atención no se quitan hasta que las resuelvas. La limpieza se ejecuta una vez al día a la hora de limpieza (03:00 por defecto) y no hace nada cuando **Automatic Cleanup** está desactivado. La nota al pie del panel muestra el número de días actual y se oculta cuando la retención es 0.

## En qué se diferencia del registro de actividad

Las notificaciones son lo que se te cuenta, y puedes borrarlas. El [registro de actividad](/es/system/activity-log/) es el registro permanente de lo que ha pasado, y vaciar Notificaciones no lo toca.
