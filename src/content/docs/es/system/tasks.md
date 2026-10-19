---
title: Tareas
description: Trabajo en segundo plano, programaciones y registros.
---

**System > Tasks** muestra todo lo que ABM hace en segundo plano: escaneos de la biblioteca, actualizaciones, importaciones, búsquedas, descargas, sincronizaciones y copias de seguridad. Cada fila muestra su estado (en espera, en curso, completada, fallida), el progreso, el resultado y un botón de registro.

- Una tarea que terminó con entradas en su lista de errores aparece como **Partial**. Despliégala para ver cada elemento omitido y el motivo.
- Una tarea con un reintento pendiente sigue en espera hasta que se agotan los reintentos. Se muestra el número de intento.
- **Clear completed tasks older than 24 hours** limpia la lista. Las tareas antiguas también se limpian automáticamente (30 días por defecto).
- Las ejecuciones programadas que no hicieron nada aparecen aquí pero no en el [registro de actividad](/es/system/activity-log/).

## Detalles a tener en cuenta

- Las conversiones son una cola aparte. Consulta [Conversiones](/es/using/conversions/).
- Los barridos de descargas (reintento de descargas pendientes y comprobación de descargas completadas) solo se ponen en cola mientras haya al menos un cliente de descarga activado, para que la página no se llene de ejecuciones vacías.
