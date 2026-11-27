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
- Library Import guarda en el servidor las coincidencias de Libex de cada fila. Un guardado de la sesión (`PUT /api/library-import/session/{id}` o `PATCH /api/library-import/session/{id}/choices`) con una fila que envía `libex_matches` se rechaza con HTTP 422 que nombra el campo, así que déjalo fuera de las filas que vuelves a guardar. Un guardado, o un Añadir, cuyas filas nombran una carpeta o un archivo (también los `audio_files` de una fila) que el propio escaneo de la sesión no encontró se rechaza con HTTP 422 que nombra las rutas. La vista previa de los archivos extra de una fila (`POST /api/library-import/session/{id}/extras`), sus vistas previas de portada y `POST /api/library-import/session/{id}/file-tags` responden HTTP 422 "Outside the folder this session scanned" cuando la fila o un archivo sale de la carpeta escaneada por un enlace. `POST /api/library-import/retry-match` acepta un `session_id` opcional y guarda en esa sesión las coincidencias que encuentra.
- `GET /api/metadata/search` devuelve una página de hasta 50 resultados. `page` (de 0 a 9) elige la página, y la respuesta incluye `page` y `has_more`, que indica si una página posterior puede tener más. Una búsqueda por ASIN solo tiene la página 0. `search_type=phrase` devuelve las mejores coincidencias de Libex para la búsqueda, también solo en la página 0 y con `has_more` en false. Una página puede venir corta y aun así tener `has_more` en true, porque Libex deja fuera los libros que no puede leer, así que sigue pidiendo páginas hasta que `has_more` sea false. `limit` (de 1 a 50) recorta una página.
- `POST /api/manual-import/execute` y `/execute-to-book` comprueban cada fila de archivo con un esquema fijo. Una clave desconocida, un `source_path` relativo o una lista `files` vacía se rechaza con HTTP 422. Cada origen tiene que ser un archivo de audio que no esté en una carpeta del sistema, directamente en una carpeta de primer nivel como `/tmp` o `/mnt`, ni en una de las carpetas propias de ABM (configuración, base de datos, copias de seguridad, registros, portadas, papelera, carpeta temporal y las carpetas que guardan el certificado y la clave SSL), siguiendo los enlaces simbólicos. Un archivo rechazado devuelve HTTP 400 con su ruta (`Can't import <path>: the file <reason>.`) y no se pone nada en cola.
- `POST /api/manual-import/execute` y `/execute-to-book` nombran cada archivo según [Book Naming](/es/settings/media-management/#book-naming) cuando se ejecuta la importación, e ignoran cualquier `destination_filename` que traiga una fila de archivo.
- `POST /api/manual-import/check-conflicts` recibe un `book_id` y las `source_paths` que piensas importar, y responde en `destination_filenames` con el nombre que recibirá cada archivo, por ruta de origen. `clashed` lista los archivos de origen que toman un nombre del formato porque el suyo chocaría. `audio_conflicts` y `own_conflicts` listan los nombres que ya están en la carpeta del libro, sin distinguir mayúsculas y minúsculas.

## Caídas de metadatos

Una petición que necesita la fuente de metadatos y no obtiene respuesta falla con un `detail` que nombra la fuente y el motivo, nunca con un resultado vacío. Una búsqueda que esperas se rinde a los 10 segundos más o menos cuando Libex limita la tasa.

Si conoces Sonarr: la API no es compatible con la v3. Prowlarr puede sincronizar indexadores con ABM a través de su conexión de Prowlarr.
