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

## Caídas de metadatos

Una búsqueda de libros que no recibe respuesta de Libex devuelve 502 con "Libex search failed". Una búsqueda de autores o series devuelve 503 con "Libex could not be reached; try again shortly". Algunas rutas de consulta siguen devolviendo un resultado vacío durante una caída.

Si conoces Sonarr: la API no es compatible con la v3. Prowlarr puede sincronizar indexadores con ABM a través de su conexión de Prowlarr.
