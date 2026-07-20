# TimeGrid

TimeGrid es una aplicación web para organizar actividades dentro de una agenda semanal genérica. Su objetivo es permitir que el usuario cargue tareas o eventos y los visualice en una grilla similar a un horario escolar.

El proyecto se desarrollará de forma progresiva, empezando por una versión mínima y comprensible, y agregando nuevas funcionalidades en etapas posteriores.

## Objetivo

La versión inicial busca construir una agenda semanal manual utilizando tecnologías web básicas:

- HTML
- CSS
- JavaScript Vanilla

La prioridad del proyecto es mantener un código:

- claro;
- modular;
- fácil de leer;
- fácil de revisar en grupo;
- sencillo de ampliar en futuras versiones.

## Convenciones

- La interfaz visible estará en español.
- Los nombres de variables, funciones, archivos, carpetas, clases e identificadores estarán en inglés.
- Se utilizarán nombres descriptivos.
- Se evitarán abreviaciones como `obj`, `arr`, `btn`, `acc`, `tmp`, `num` o `el`.
- Cuando un identificador contenga un número, el número se escribirá con palabras.
- El código se dividirá en módulos con responsabilidades claras.
- No se utilizarán frameworks ni librerías externas durante las primeras versiones.

## Roadmap

### Versión 1 — Agenda manual básica

Primera versión mínima y completamente entendible.

Funcionalidades:

- grilla semanal de lunes a domingo;
- horario de `00:00` a `24:00`;
- intervalos de 30 minutos;
- formulario para crear actividades;
- campo de título;
- selección del día;
- selección de hora de inicio;
- selección de hora de finalización;
- representación visual de las actividades en la grilla;
- validación de horarios;
- impedir que una actividad termine antes de comenzar;
- impedir actividades de menos de 30 minutos;
- impedir solapamientos;
- permitir actividades consecutivas;
- interfaz de escritorio;
- uso de HTML, CSS y JavaScript Vanilla.

Fuera de alcance:

- `localStorage`;
- vista móvil;
- edición;
- eliminación;
- categorías;
- colores personalizados;
- descripciones;
- modales;
- toasts;
- datos de ejemplo.

Las actividades se perderán al recargar la página.

### Versión 2 — Vista móvil

Se mantiene toda la funcionalidad de la versión 1 y se agrega:

- diseño responsive;
- visualización de un solo día en pantallas pequeñas;
- botones para avanzar y retroceder entre días;
- navegación circular entre domingo y lunes;
- visualización inicial del día actual;
- adaptación del formulario a pantallas móviles.

Todavía no se utilizará `localStorage`.

### Versión 3 — Agenda manual completa

Esta versión completa la primera etapa funcional de la aplicación.

Se agregan:

- persistencia mediante `localStorage`;
- edición de actividades;
- eliminación de actividades;
- confirmación antes de eliminar;
- modal para crear y editar actividades;
- modal de detalles;
- descripciones largas;
- indicador visual cuando una actividad tiene descripción;
- categorías predefinidas:
  - Trabajo;
  - Estudio;
  - Salud;
  - Ocio;
  - Personal;
  - Otros;
- color sugerido según categoría;
- posibilidad de modificar el color individual de una actividad;
- mensajes toast;
- botón para cargar una agenda de ejemplo;
- servicio de almacenamiento separado del resto de la aplicación;
- propiedad `parentActivityId` incluida en el modelo con valor `null`;
- accesibilidad básica;
- etiquetas asociadas a los campos;
- foco visible;
- cierre de modales con `Escape`;
- navegación mediante teclado.

A partir de esta versión, la agenda manual estará completa.

### Versión 4 — Seguimiento y personalización

- marcar actividades como completadas;
- reinicio semanal del estado de completado;
- tema claro y oscuro;
- creación de categorías personalizadas;
- configuración de colores por categoría.

### Versión 5 — Organización automática

- actividades sin horario definido;
- duración estimada;
- días preferidos;
- horarios preferidos;
- prioridades;
- algoritmo automático de organización;
- detección de actividades que no pudieron ubicarse;
- posibilidad de regenerar la propuesta de horario.

### Versión 6 — Notificaciones

- alarmas;
- recordatorios;
- notificaciones push;
- activación o desactivación por actividad;
- configuración por categoría;
- selección del tiempo de aviso previo.

### Versión 7 — Backend y base de datos

- backend con Node.js;
- API REST;
- persistencia con PostgreSQL;
- almacenamiento de actividades;
- almacenamiento de categorías;
- reemplazo de `localStorage` mediante un servicio de datos.

Esta versión todavía no incluirá usuarios.

### Versión 8 — React

- migración progresiva del frontend a React;
- componentes reutilizables;
- manejo de estado;
- mantenimiento de la API existente;
- conservación de la lógica de negocio siempre que sea posible.

### Versión 9 — Usuarios

- registro;
- inicio de sesión;
- cierre de sesión;
- autenticación;
- autorización;
- agenda independiente para cada usuario.

### Versión 10 — TypeScript

- migración progresiva desde JavaScript;
- tipos para actividades;
- tipos para categorías;
- tipos para respuestas de la API;
- tipos para formularios;
- tipos para el estado de la aplicación.

### Versión 11 — Internacionalización

La internacionalización suele abreviarse como `i18n`.

Idiomas previstos:

- español;
- valenciano;
- catalán;
- gallego;
- euskera;
- inglés;
- japonés.

### Versión 12 — Dockerización

- contenedor para frontend;
- contenedor para backend;
- contenedor para PostgreSQL;
- Docker Compose;
- variables de entorno;
- entorno reproducible para todo el equipo.

### Versión 13 — Fechas y configuración temporal avanzada

- fechas reales;
- navegación entre semanas;
- actividades asociadas a una fecha concreta;
- actividades que atraviesan la medianoche;
- intervalos configurables;
- intervalos mínimos de 15 o 30 minutos.

### Versión 14 — Jerarquía de actividades

- actividades padre e hijas;
- niveles de profundidad indefinidos;
- subtareas;
- actividades hijas que puedan superponerse con su bloque padre;
- herencia de colores;
- herencia de configuración de notificaciones;
- reglas de edición y eliminación de jerarquías.

## Estado actual

El proyecto se encuentra en la fase de definición y preparación de la versión 1.

El primer objetivo es construir una agenda manual básica sin persistencia y sin vista móvil. La intención es que todo el grupo pueda comprender el flujo completo antes de incorporar nuevas capas de complejidad.

## Filosofía de desarrollo

Cada versión debe ser funcional antes de comenzar la siguiente.

El equipo priorizará:

- cambios pequeños;
- ramas separadas;
- Pull Requests;
- revisión entre compañeros;
- integración frecuente;
- código comprensible antes que arquitectura avanzada;
- aprendizaje antes que velocidad.
