<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# README - Proyecto domusPay

Este es el repositorio para el proyecto **domusPay**, una aplicación backend desarrollada con Nest.js y MongoDB.

## Stack utilizado

- Nest.js
- MongoDB con Mongoose

## Pasos para comenza
Sigue estos pasos para clonar el repositorio, ejecutar el proyecto y configurar el entorno de desarrollo:

### 1. Clonar el repositorio

Abre tu terminal y ejecuta el siguiente comando para clonar este repositorio:

```bash
git clone <url_del_repositorio>
```

### 2. Instalar dependencias
Navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```
cd domusPay
npm install
```

### 3. Instalar Nest CLI
Asegúrate de tener instalado el Nest CLI globalmente. Si aún no lo has hecho, puedes instalarlo usando npm:

```
npm install -g @nestjs/cli
```
### 4. Levantar la base de datos en Docker
Para ejecutar MongoDB en un contenedor de Docker, asegúrate de tener Docker instalado en tu máquina. Luego, ejecuta el siguiente comando:

```
docker-compose up-d
```

### 5. Ejecutar el servidor
Finalmente, puedes ejecutar el servidor Nest.js con el siguiente comando

```
npm run start:dev
```

### 6. Probar el API
Una vez que el servidor esté en funcionamiento, puedes probar el API utilizando cualquier herramienta de postman. El host para acceder al API es http://localhost:3000/api. Asegúrate de usar las rutas correctas definidas en tu aplicación para interactuar con los endpoints correspondientes.