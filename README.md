
# Tech challenge Javier Ramirez

Este repo contiente información sobre el tech challenge. Se utilizo Node.js con Express. La base de datos se ubica en un RDS de AWS con una VPC por defecto, solo se añadio regla para permitir conexion a MySQL.
El servidor Node esta montado en un EC2 de AWS, asignandole una IP estatica para evitar cambios cada que se refresque la instancia. Tambien se incluyo un reverse proxy en Nginx con el fin de redireccionar al puerto especifico, corriendo bajo el manejador de procesos PM2 para garantizar su disponibilidad.

El script SQL se encuentra dentro del archivo BD/database.sql

## Authors

- [@JJavierRamirez](https://github.com/JJavierRamirez)


## API Reference


[Swagger definition](http://54.163.6.64/api-docs/)

#### Obtener articulos

```http
  GET /api/products
```
```code
curl --location 'http://54.163.6.64/api/products'
```
#### Obtener articulo

```http
  GET /api/product/${id}
```
```code
curl --location 'http://54.163.6.64/api/product/A123456789'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del articulo |

#### Actualizar articulo

```http
  PATCH /api/product/${id}
```
```code
curl --location --request PATCH 'http://54.163.6.64/api/product/A123456789' \
--header 'Content-Type: application/json' \
--data '{
    "description": "Laptop con 16GB de RAM y 256GB SSD",
    "model": "LP12367"
}'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del articulo |

##### Request body:

```JSON
{
    "description": "Laptop con 16GB de RAM y 256GB SSD",
    "model": "LP1236"
}
```
## Run Locally

Ejecutar el script SQL ubicado en carpeta BD en el manejador de bases de datos SQL local. Una vez hecho, asegurarse de crear un archivo .env con las variables correspondientes:

```bash
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=[yourLocalUser]
DB_PASSWORD=[yourLocalPassword]
DB_NAME=companydb
```

Clonar el proyecto

```bash
  git clone https://github.com/JJavierRamirez/metaxperts-tech-challenge.git
```

Ir al directorio

```bash
  cd nodejs-mysql-restapi-metaXperts
```

Instalar dependencias

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots

[Google Drive](https://drive.google.com/drive/folders/16wCDlmzzHMCAwnPpRZb3ekR2BHYzhSQy)
