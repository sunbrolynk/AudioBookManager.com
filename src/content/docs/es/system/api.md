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
- Library Import guarda en el servidor las coincidencias de Libex de cada fila. Un guardado de la sesión (`PUT /api/library-import/session/{id}` o `PATCH /api/library-import/session/{id}/choices`) con una fila que envía `libex_matches` se rechaza con HTTP 422 que nombra el campo, así que déjalo fuera de las filas que vuelves a guardar. `POST /api/library-import/retry-match` acepta un `session_id` opcional y guarda en esa sesión las coincidencias que encuentra.
- `GET /api/metadata/search` devuelve todos los resultados si omites `limit`. Con `limit` (de 1 a 50) devuelve como mucho esa cantidad.

## Caídas de metadatos

Una petición que necesita la fuente de metadatos y no obtiene respuesta falla con un `detail` que nombra la fuente y el motivo, nunca con un resultado vacío. Una búsqueda que esperas se rinde a los 10 segundos más o menos cuando Libex limita la tasa.

Si conoces Sonarr: la API no es compatible con la v3. Prowlarr puede sincronizar indexadores con ABM a través de su conexión de Prowlarr.
