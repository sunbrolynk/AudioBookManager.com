---
title: Clientes de descarga
description: Clientes compatibles, gestión de descargas completadas y mapeos de rutas remotas.
---

**Settings > Download Clients** conecta el programa que se encarga de descargar.

## Clientes compatibles

Deluge, qBittorrent, Transmission, rTorrent, SABnzbd, NZBGet y Blackhole (una carpeta vigilada). Esa es la lista completa.

## Campos

Los campos que aparecen dependen del cliente.

| Campo | Efecto |
|---|---|
| Name | Nombre |
| Host, Port, URL Base | Dónde escucha el cliente |
| Use SSL, Verify TLS certificate | HTTPS y si se comprueba el certificado |
| Username, Password, API Key | Credenciales. Un secreto guardado nunca se muestra |
| Category | La categoría o etiqueta que ABM pone a sus descargas, por ejemplo `audiobooks` |
| Watch Folder, Directory | Blackhole: dónde dejar los archivos y dónde aparecen los terminados |
| Client Priority | Qué cliente gana cuando encajan varios |
| Remove from Client, Also Delete Files, Remove Failed | Qué quita ABM del cliente después de importar o de un fallo |
| Queue Page Remove Action | Qué hace quitar una fila en la página Queue: descartarla solo en ABM, quitarla del cliente y conservar los archivos, o quitarla y borrar los archivos |

**Test** comprueba la conexión. Un cliente desactivado no es un cliente con problemas. Un cliente que falla se reintenta con esperas crecientes.

## Gestión de descargas completadas

| Ajuste | Por defecto | Efecto |
|---|---|---|
| Enable | activado | Importa automáticamente las descargas terminadas |
| Redownload Failed | activado | Bloquea un lanzamiento fallido y vuelve a buscar |
| Redownload Failed from Interactive Search | activado | Lo mismo, para los lanzamientos que elegiste a mano |

Si las importaciones usan enlace duro o copia lo decide **Use Hardlinks instead of Copy** en [Media Management](/es/settings/media-management/). Si la carpeta del cliente no está en la misma ruta que ve ABM, añade un mapeo de rutas remotas.

## Mapeos de rutas remotas

Cuando el cliente indica `/downloads/audiobooks` y ABM la ve como `/data/audiobooks`, añade un mapeo.

| Campo | Efecto |
|---|---|
| Host | El host del cliente al que se aplica el mapeo |
| Remote Path | La ruta tal como la indica el cliente |
| Local Path | La misma carpeta tal como la ve ABM |

## Detalles a tener en cuenta

- Una subcarpeta que no se puede leer en una descarga terminada detiene por completo la importación de esa descarga. No se quita nada del cliente, y se reintenta más tarde.
- Docker: siempre que puedas, monta la carpeta de descargas en la misma ruta en los dos contenedores. Los mapeos son el plan B.
