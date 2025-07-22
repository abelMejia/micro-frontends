# Microfrontend Shell (MF-Shell)

Este proyecto es un ejemplo de arquitectura basada en microfrontends utilizando React, TypeScript y Vite. El objetivo es permitir el desarrollo independiente y la integración dinámica de múltiples aplicaciones frontend (remotos) dentro de un contenedor principal (shell).

## Estructura del Proyecto

- **MF-Shell**: Contenedor principal que orquesta y muestra los microfrontends.
- **Remotos**: Aplicaciones independientes que se cargan dinámicamente en el shell.

## Tecnologías

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Module Federation](https://webpack.js.org/concepts/module-federation/) (o plugins equivalentes para Vite)

## Instalación

1. Clona este repositorio y los remotos asociados.
2. Instala las dependencias en cada proyecto:

   ```bash
   npm install
   ```

3. Inicia primero los remotos y luego el shell:

   ```bash
   # En cada remoto
   npm run dev

   # En el shell
   npm run dev
   ```

4. Accede al shell en `http://localhost:3000` (o el puerto configurado).

> **Nota:**
> Si vas a ejecutar este proyecto usando Docker, puedes omitir las instrucciones de instalación y ejecución local de este README y seguir únicamente la documentación y comandos indicados en el archivo `README.md` principal del proyecto o en la documentación de Docker.

## Pruebas unitarias

Para ejecutar las pruebas unitarias en este proyecto, utiliza:

```bash
npm test
```

Esto ejecutará todos los tests definidos en el proyecto usando Jest y Testing Library.

## Expansión y configuración

Puedes agregar nuevos microfrontends siguiendo la misma estructura y registrándolos en el shell mediante la configuración de Module Federation.

## Recursos útiles

- [Documentación oficial de Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Vite Plugin Federation](https://github.com/originjs/vite-plugin-federation)

