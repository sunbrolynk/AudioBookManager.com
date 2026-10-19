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

**Settings > Profiles** contiene la escala de calidades que ABM usa para decidir qué descargar y qué cuenta como mejora. Una instalación nueva no trae ninguno, así que crea uno. El primer perfil que crees pasa a ser el predeterminado, y puedes ajustarlo más adelante. Consulta [Perfiles](/es/settings/profiles/).

## 6. Conecta Audible (opcional)

Si tienes libros de Audible, conecta tu cuenta en **Settings > Audible**. Elige tu **Marketplace**, pulsa **Connect Audible Account** y luego **I Understand, Open Amazon Login**. Inicia sesión en Amazon en la pestaña nueva. Es normal que acabes en una página en blanco o de "Page not found". Copia la dirección completa de la barra de direcciones en **Redirect URL**, añade un **Display Name** si quieres y pulsa **Complete Login**. Tu contraseña nunca se guarda, y la primera sincronización de la biblioteca empieza enseguida. Consulta [Audible](/es/audible/).

## 7. Trae o añade libros

- ¿Ya tienes una colección? Usa [Library Import](/es/library-import/).
- ¿Empiezas de cero? Usa **Library > Add New** y busca por título, autor o serie. Consulta [Añadir libros](/es/using/add-new/).

Un libro que añades queda como buscado (wanted) hasta que se importa un archivo suyo. Los libros buscados aparecen en **Wanted > Missing** y se buscan automáticamente.

## 8. Míralo funcionar

**Activity > Queue** muestra lo que se está descargando. **Activity > History** muestra lo que se descargó y se importó. Cuando algo sale mal, [Solución de problemas](/es/troubleshooting/) y la página [Tareas](/es/system/tasks/) son los sitios donde mirar.
