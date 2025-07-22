# MF-CharacterDetail

MF-CharacterDetail es un microfrontend desarrollado en React, diseñado para mostrar detalles de un personaje y ser integrado fácilmente en arquitecturas de microfrontends mediante Module Federation.

## Características

- Visualización de detalles de personajes.
- Componentización y reutilización.
- Integración sencilla con otros microfrontends o contenedores principales.
- Desacoplamiento y despliegue independiente.

## Instalación

```bash
npm install
```

## Ejecución en desarrollo

```bash
npm start
```

## Construcción para producción

```bash
npm run build
```

> **Nota:**
> Si vas a ejecutar este proyecto usando Docker, puedes omitir las instrucciones de instalación y ejecución local de este README y seguir únicamente la documentación y comandos indicados en el archivo `README.md` principal del proyecto o en la documentación de Docker.

## Integración como Microfrontend

MF-CharacterDetail puede ser consumido por un contenedor principal o por otros microfrontends utilizando Module Federation. Ejemplo de integración:

```js
remotes: {
  characterDetail: 'characterDetail@http://localhost:PORT/remoteEntry.js',
}
```

Luego, puedes importar el microfrontend en tu aplicación principal:

```js
const CharacterDetail = React.lazy(() => import('characterDetail/CharacterDetail'));
```

## Estructura del proyecto

- `src/` - Código fuente principal.
- `public/` - Archivos estáticos.
- `webpack.config.js` - Configuración de Module Federation y Webpack.

## Consideraciones

- Asegúrate de que las rutas y puertos coincidan entre el contenedor y el microfrontend.
- Personaliza la configuración según las necesidades de tu entorno de integración.
- MF-CharacterDetail puede evolucionar de forma independiente sin afectar a otros microfrontends.

## Requisitos

- Node.js y npm instalados.

