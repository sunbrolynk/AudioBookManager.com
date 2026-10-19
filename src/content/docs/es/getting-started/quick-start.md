---
title: Inicio rápido
description: De una instalación nueva a tu primer libro monitorizado.
---

Este es el camino más corto desde un contenedor en marcha hasta un libro que se está buscando. Primero instala ABM: consulta [Instalar ABM](/es/installation/).

## 1. Inicia sesión

La primera visita te guía para crear un usuario. Hasta que lo hagas, ABM rechaza las peticiones. Cómo funciona el inicio de sesión después se explica en [Seguridad e inicio de sesión](/es/settings/security/).

## 2. Elige cómo sale ABM a internet

En **Settings > General** hay una sección **Proxy & VPN**. Si piensas usar la fuente de metadatos integrada, primero tienes que elegir una conexión. Consulta [Elegir una fuente de metadatos](/es/metadata/choosing-a-source/).

## 3. Añade una carpeta raíz

Una carpeta raíz es donde ABM guarda los libros. Añádela en **Settings > Media Management**, en la sección **Root Folders**. Debería ser la misma carpeta que lee tu reproductor (Audiobookshelf, por ejemplo).

## 4. Añade un indexador y un cliente de descarga

- **Settings > Indexers**: Newznab, Torznab, MyAnonamouse o Prowlarr. Consulta [Indexadores](/es/settings/indexers/).
- **Settings > Download Clients**: Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet o Blackhole. Consulta [Clientes de descarga](/es/settings/download-clients/).

Si el cliente va en otro contenedor, comprueba que él y ABM ven la carpeta de descargas en la misma ruta, o añade un mapeo de rutas remotas.

## 5. Define un perfil de calidad

**Settings > Profiles** contiene la escala de calidades que ABM usa para decidir qué descargar y qué cuenta como mejora. Un perfil es el predeterminado. Empieza con ese y ajústalo más adelante. Consulta [Perfiles](/es/settings/profiles/).

## 6. Trae o añade libros

- ¿Ya tienes una colección? Usa [Library Import](/es/library-import/).
- ¿Empiezas de cero? Usa **Library > Add New** y busca por título, autor o serie. Consulta [Añadir libros](/es/using/add-new/).

Un libro que añades queda como buscado (wanted) hasta que se importa un archivo suyo. Los libros buscados aparecen en **Wanted > Missing** y se buscan automáticamente.

## 7. Míralo funcionar

**Activity > Queue** muestra lo que se está descargando. **Activity > History** muestra lo que se descargó y se importó. Cuando algo sale mal, [Solución de problemas](/es/troubleshooting/) y la página [Tareas](/es/system/tasks/) son los sitios donde mirar.
