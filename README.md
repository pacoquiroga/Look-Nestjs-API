<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Proyecto NestJS - Gestión de Productos

Este proyecto es una API RESTful desarrollada en NestJS que permite gestionar productos en un sistema. La API incluye funcionalidades para crear, leer, actualizar y eliminar productos, y está contenerizada utilizando Docker.

## Funcionalidades

La API de productos ofrece las siguientes operaciones:

- **Obtener todos los productos**: 
  - **Método**: `GET /products`
  - **Descripción**: Recupera una lista de todos los productos en el sistema.

- **Obtener un producto específico**: 
  - **Método**: `GET /products/:product_id`
  - **Descripción**: Recupera un producto específico utilizando su ID. Si el producto no se encuentra, lanza un error.

- **Crear un nuevo producto**: 
  - **Método**: `POST /products`
  - **Descripción**: Crea un nuevo producto en el sistema utilizando los datos proporcionados en el cuerpo de la solicitud.

- **Actualizar un producto existente**: 
  - **Método**: `PUT /products/:product_id`
  - **Descripción**: Actualiza la información de un producto específico utilizando su ID y los datos proporcionados en el cuerpo de la solicitud.

- **Eliminar un producto**: 
  - **Método**: `DELETE /products/:product_id`
  - **Descripción**: Elimina un producto específico utilizando su ID. Si el producto no existe, lanza un error.

## Requisitos

- Docker
- Docker Compose

## Instalación y Uso

1. **Clona el repositorio**:

    ```bash
    https://github.com/pacoquiroga/Look-Nestjs-API.git
    ```

2. **Construir y levantar los contenedores**:

    ```bash
    docker-compose up --build
    ```

3. **Accede a la API**:

   La API estará disponible en `http://localhost:5000/products`.

## Configuración de Docker

Este proyecto utiliza Docker Compose para facilitar la gestión de contenedores. A continuación se describe la configuración:

- **Servicios**:
  - `nestapp`: Este es el contenedor que ejecuta la aplicación NestJS. 
    - **Imagen**: `psqb/nestapp_products:1.0.0`
    - **Puertos**: expone el puerto `5000`.
    - **Variables de entorno**: Se configura la conexión a la base de datos PostgreSQL.
  - `db`: Contenedor para la base de datos PostgreSQL.
    - **Imagen**: `postgres:16.1`
    - **Puertos**: expone el puerto `5432`.
    - **Variables de entorno**: Configura las credenciales y el nombre de la base de datos.

- **Volúmenes**: Se utiliza un volumen persistente para almacenar los datos de la base de datos.

