---
title: Etiquetas
description: Etiquetas y reglas de etiquetado automático.
---

**Settings > Tags** gestiona las etiquetas y el **Auto Tagging**.

## Etiquetas

Una etiqueta es una sola palabra: en minúsculas, sin espacios, sin comas, de hasta 100 caracteres. Si escribes `Sci-Fi`, se convierte en `sci-fi`. Las etiquetas se ponen en libros, autores y series, y las tienen en cuenta los indexadores, los perfiles de retraso y de lanzamiento, las listas de importación, los agentes de Connect y el feed del calendario.

Si conoces Sonarr: las etiquetas funcionan igual. Un perfil con una etiqueta solo se aplica a lo que la lleva.

## Etiquetas automáticas

Una etiqueta automática es una regla que pone etiquetas a los libros que la cumplen.

| Campo | Efecto |
|---|---|
| Name | Nombre |
| Enable | Activada o desactivada |
| Remove Tags Automatically | Cuando un libro deja de cumplirla, le quita las etiquetas |
| Tags | Qué poner |
| Conditions | Lo que tiene que cumplir un libro. Cada condición se puede negar o hacer obligatoria |

Tipos de condición: Genre, Monitored, Language, Root Folder, Status, Tag, Year (rango), Series Type, Author (contiene), Narrator (contiene), Runtime en minutos (rango) y Rating (rango).

**Apply** ejecuta ahora las reglas seleccionadas. Las reglas también se ejecutan cuando cambian los libros.

## Detalles a tener en cuenta

- Una regla que hace referencia a una etiqueta o carpeta raíz borrada se salta por completo, en los dos sentidos, para que una regla rota nunca etiquete mal ni quite etiquetas.
- Remove Tags Automatically solo quita las etiquetas que esa regla pondría.
