---
title: Añadir libros (Add New)
description: Busca un libro y añádelo como buscado.
---

**Library > Add New** busca libros en Libex y añade los que eliges. La búsqueda encuentra por título, autor, serie o ASIN.

## Qué hace añadir

Un libro añadido pasa a **Wanted** en la carpeta raíz y el perfil de calidad que elegiste, y ABM empieza a buscarlo según el ajuste de monitorización. Que un libro ya está en la biblioteca se detecta solo por el ASIN. Otra edición del mismo título es otro ASIN.

## Búsqueda de autores y series

:::caution[Llega en la próxima versión]
Los modos de búsqueda de autores y series todavía no están en ninguna versión publicada.
:::

La búsqueda gana dos modos que encuentran los propios autores y series. Los modos de libros que ya existían pasan a llamarse "Books by author" y "Books in series". Al añadir un autor o una serie se crea su catálogo y se añaden sus libros como buscados según **Monitor**:

| Monitor | Qué añade |
|---|---|
| All | Todos los libros, incluidos los que aún no han salido |
| Future | Solo los libros que salgan a partir de ahora |
| Missing (por defecto) | Los libros que no tienes |
| None | Solo el catálogo |

También eliges la carpeta raíz, el perfil de calidad y si los libros que aparezcan más adelante se añaden también. Eso viene activado por defecto para una serie y desactivado para un autor. Un autor o una serie que ya está en tu biblioteca muestra "In Library" con una acción **Add missing books**.

El añadido se ejecuta como tarea en segundo plano con un aviso de progreso.

## Si la búsqueda no devuelve nada

Una búsqueda que no recibe respuesta de la fuente de metadatos falla con un error en lugar de dar una lista vacía. Consulta [Solución de problemas](/es/troubleshooting/#la-fuente-de-metadatos-no-está-disponible).
