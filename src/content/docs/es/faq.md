---
title: Preguntas frecuentes
description: Respuestas cortas a lo primero que pregunta la gente.
---

## ¿ABM sustituye a Audiobookshelf?

No. Audiobookshelf es el reproductor y ABM es el bibliotecario. Apunta los dos a la misma carpeta de biblioteca y deja que cada uno haga lo suyo.

## ¿De dónde salen los metadatos?

De [Libex](https://libexdb.com), un servicio abierto de metadatos con datos de Audible. ABM los actualiza de forma programada, y una portada que hayas elegido tú se puede bloquear para que una actualización no la toque.

## ¿Necesito una base de datos aparte?

No. ABM lo guarda todo en un único archivo SQLite en `/config`. No hay nada más que ejecutar.

## ¿Puedo acceder desde fuera de mi red?

Sí, desde la 0.17.0. Por defecto, todo lo que venga de fuera de tu red local tiene que iniciar sesión, y si pones **Authentication Required** en **Enabled**, todo el mundo tiene que iniciar sesión, incluida tu propia LAN. Detrás de nginx, Traefik o Caddy, pon en `TRUSTED_PROXIES` la dirección del proxy. Las credenciales guardadas van cifradas. Consulta [Configuración](/es/configuration/#proxy-inverso).

## ¿Qué clientes de descarga funcionan?

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet y Blackhole.

## ¿Qué pasó con Readarr?

Readarr gestionaba libros y audiolibros a la vez, y ya está retirado. ABM es solo para audiolibros, construido sobre el diseño que inventaron las aplicaciones de Servarr.

## ¿Cómo lo instalo en Unraid, Windows o macOS?

Todavía no se puede. Por ahora la única forma es Docker. Consulta [Instalar ABM](/es/installation/).

## ¿Cuánto cuesta?

Nada. Es libre y de código abierto bajo GPL-3.0. Si te ahorra una tarde, hay un [Ko-fi](https://ko-fi.com/sunbrolynk).

## ¿Puedo editar el título, los autores o la descripción de un libro?

No. Esos datos vienen de la fuente de metadatos y ABM no los edita a mano. Lo que controlas tú es la portada (una portada que eliges queda bloqueada), cuándo se ejecutan las actualizaciones, qué archivos auxiliares y etiquetas de audio se escriben, las etiquetas y las etiquetas automáticas, la monitorización y el perfil de calidad. Consulta [Tus metadatos, bajo tu control](/es/metadata/control/).

## ¿ABM puede escribir capítulos, descripciones y etiquetas donde los lee Audiobookshelf?

Escribe `cover.jpg`, un `.opf`, `desc.txt` y `reader.txt`, y puede escribir etiquetas dentro del audio. La comparación de capítulos con la edición publicada y los archivos `.cue` llegan en la próxima versión. Consulta [Archivos auxiliares](/es/using/sidecars/).

## ¿Puedo convertir mis archivos?

Sí: convertir, unir, dividir y añadir capítulos, en una cola. Consulta [Conversiones](/es/using/conversions/).

## ¿Puedo importar la colección que ya tengo?

Sí, con [Library Import](/es/library-import/). Consulta también [Traer una biblioteca](/es/guides/moving-a-library-in/).

## ¿Hay una vista para móvil?

Sí, por debajo de 768 px de ancho. Consulta [Uso en el móvil](/es/phone/).

## ¿ABM puede usar más de una cuenta de Audible?

Sí. Cada cuenta tiene su propia biblioteca. Consulta [Audible](/es/audible/).
