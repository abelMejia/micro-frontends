# MF-Characters

MF-Characters es un microfrontend desarrollado en React que permite visualizar y filtrar personajes de la serie Rick and Morty utilizando la [API pública de Rick and Morty](https://rickandmortyapi.com/).


### Integración

MF-Characters expone su componente principal (`CharacterList`) para ser utilizado en cualquier host compatible con React. La comunicación entre microfrontends se realiza mediante props y callbacks, permitiendo la interoperabilidad con otros módulos.

### Comunicación

- **Props**: El microfrontend recibe datos iniciales y funciones de callback para interactuar con el host o con otros microfrontends.
- **Eventos**: Al seleccionar un personaje, se ejecuta el callback proporcionado, permitiendo la comunicación hacia el contenedor o microfrontends hermanos.

### Reutilización

El componente es autónomo y desacoplado, lo que permite su reutilización en diferentes contextos o aplicaciones que requieran la funcionalidad de listado y filtrado de personajes.

## Características

- Búsqueda de personajes por nombre, estado y especie.
- Filtros dinámicos con opciones basadas en los datos iniciales.
- Consulta a la API con debounce para evitar llamadas innecesarias.
- Visualización de los personajes en tarjetas con información relevante.

## Instalación

1. Clona el repositorio o copia este microservicio en tu proyecto.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:

   ```bash
   npm start
   ```

> **Nota:**
> Si vas a ejecutar este proyecto usando Docker, puedes omitir las instrucciones de instalación y ejecución local de este README y seguir únicamente la documentación y comandos indicados en el archivo `README.md` principal del proyecto o en la documentación de Docker.

## Uso

El componente principal es `CharacterList`, que recibe dos props:

- `data`: Un arreglo inicial de personajes (puede estar vacío, solo se usa para los filtros).
- `callback`: Una función que se ejecuta al seleccionar un personaje.

Ejemplo de uso:

```tsx
import CharacterList from './src/CharacterList';

<CharacterList data={initialData} callback={handleCharacterClick} />
```

## API

Las búsquedas se realizan usando el endpoint:

```
https://rickandmortyapi.com/api/character/?name={name}&status={status}&species={species}
```
````
