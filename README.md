# Proyecto React con Docker

Este proyecto utiliza Docker para facilitar el desarrollo y despliegue.

## Requisitos

- [Docker](https://www.docker.com/) instalado en tu máquina.
- [Docker Compose](https://docs.docker.com/compose/) instalado (`docker compose` o `docker-compose`).

## Desarrollo con Docker Compose

Antes de levantar los contenedores, copia el archivo de variables de entorno de ejemplo al root de MF-Shell:

```bash
cp MF-Shell/.env.example MF-Shell/.env.local
```

Luego ejecuta:

```bash
docker-compose up --build
```

## Comandos útiles

- Parar los contenedores:

  ```bash
  docker-compose down
  ```

- Ver logs:

  ```bash
  docker-compose logs
  ```

## Notas

- Asegúrate de que el puerto 3000 esté libre.
- Una vez levantados los contenedores, la aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

