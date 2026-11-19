---
title: API
description: Autenticación, páginas de documentación y límites.
---

ABM tiene una API REST bajo `/api`. La referencia interactiva está en `/api/docs` (Swagger) y `/api/redoc`, y el esquema en `/api/openapi.json`. Pon `DOCS_ENABLED=false` para quitar las tres. Las páginas de documentación cargan recursos desde una CDN, así que solo se ven completas con acceso a internet.

## Autenticación

- **Clave de API**: envía `X-Api-Key: <key>` o `?apikey=<key>`. La encuentras o la regeneras en **Settings > General > Security**. Consulta [Seguridad](/es/settings/security/).
- **Token Bearer** obtenido al iniciar sesión.
- Una credencial que presentas tiene prioridad sobre una exención, así que una petición con clave desde la LAN cuenta como petición a la API.

## Convenciones

- Los errores vuelven como `{"detail": ...}`.
- Los secretos nunca se devuelven. La respuesta dice si hay uno definido.
- Una petición del navegador que cambia el estado necesita un origen que coincida. Los scripts que usan una clave están exentos.
- El cuerpo de las peticiones está limitado a 10 MiB (`MAX_REQUEST_BODY_BYTES`). La restauración de copias de seguridad y la subida de portadas tienen límites mayores. Pasarse del límite da HTTP 413.
- Los errores de validación nunca repiten lo que enviaste.
- `POST /api/tasks` solo encola `backup_export`. Cualquier otro tipo de tarea recibe HTTP 403, y una configuración que no encaja con `backup_export` recibe HTTP 422. Las importaciones manuales van por los endpoints de `/api/manual-import/` y los escaneos de la biblioteca por `POST /api/library/scan`.
- `POST /api/manual-import/execute` y `/execute-to-book` comprueban cada fila de archivo con un esquema fijo. Una clave desconocida, un `source_path` relativo o una lista `files` vacía se rechaza con HTTP 422. Cada origen tiene que ser un archivo de audio que no esté en una carpeta del sistema, directamente en una carpeta de primer nivel como `/tmp` o `/mnt`, ni en una de las carpetas propias de ABM (configuración, base de datos, copias de seguridad, registros, portadas, papelera, carpeta temporal y las carpetas que guardan el certificado y la clave SSL), siguiendo los enlaces simbólicos. Un archivo rechazado devuelve HTTP 400 con su ruta (`Can't import <path>: the file <reason>.`) y no se pone nada en cola.

## Caídas de metadatos

Una petición que necesita la fuente de metadatos y no obtiene respuesta falla con un `detail` que nombra la fuente y el motivo, nunca con un resultado vacío. Una búsqueda que esperas se rinde a los 10 segundos más o menos cuando Libex limita la tasa.

Si conoces Sonarr: la API no es compatible con la v3. Prowlarr puede sincronizar indexadores con ABM a través de su conexión de Prowlarr.
