CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE productos (
    id_articulo VARCHAR(10) PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,     
    descripcion VARCHAR(200),
    precio DECIMAL(10, 2) NOT NULL,
    modelo VARCHAR(10)
);

INSERT INTO productos (id_articulo, nombre, descripcion, precio, modelo) 
VALUES 
('A123456789', 'Laptop', 'Laptop con 16GB de RAM y 512GB SSD', 999.99, 'LP2023'),
('B987654321', 'Smartphone', 'Smartphone con pantalla OLED de 6 pulgadas', 499.99, 'SPX2023'),
('C456123789', 'Auriculares', 'Auriculares inalámbricos con cancelación de ruido', 199.99, 'HD2023'),
('D789321456', 'Tablet', 'Tablet de 10 pulgadas con 64GB de almacenamiento', 299.99, 'TB2023'),
('E321654987', 'Smartwatch', 'Reloj inteligente con monitor de actividad', 149.99, 'SW2023');
