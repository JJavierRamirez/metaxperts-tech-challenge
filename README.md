
# Tech challenge

Este repo contiente información sobre el tech challenge. Se utilizo Node.js con Express. La base de datos es MySQL/RDS.

El servidor Node esta montado en un EC2 de AWS.


## Authors

- [@JJavierRamirez](https://github.com/JJavierRamirez)


## API Reference

#### Obtener articulos

```http
  GET /api/products
```
#### Obtener articulo

```http
  GET /api/product/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del articulo |

#### Actualizar articulo

```http
  PATCH /api/product/${id}
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