import { Router } from "express";
import { getProduct, getProducts, updateProduct } from "../controllers/products.controller.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - id_articulo
 *       properties:
 *         id_articulo:
 *           type: integer
 *           description: key of the product
 *         nombre:
 *           type: string
 *           description: The name of the product
 *         descripcion:
 *           type: string
 *           description: The description of the product
 *         precio:
 *           type: string
 *           description: The price of the product
 *         modelo:
 *           type: string
 *           description: The model of the product
 *       example:
 *         id: 1
 *         name: Laptop
 *         description: Laptop with 16gb RAM and 256GB SDD
 *         precio: 599.99
 *         modelo: PH2109
 */

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Products API
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: The list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/products', (req, res) => getProducts(req, res));

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Returns an specific product given it's id
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     responses:
 *       200:
 *         description: Returns product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.get('/product/:id', getProduct);

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductUpdate:
 *       type: object
 *       properties:
 *         descripcion:
 *           type: string
 *           description: The description of the product
 *         modelo:
 *           type: string
 *           description: The model of the product
 *       example:
 *         description: Laptop with 16gb RAM and 256GB SDD
 *         modelo: PH2109
 */

/**
 * @swagger
 * /api/product/{id}:
 *   patch:
 *     summary: Update a product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The product id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductUpdate'
 *     responses:
 *       200:
 *         description: The product was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       500:
 *         description: Some server error
 */
router.patch('/product/:id', updateProduct);

// router.post('/products', createProduct);
// router.delete('/products/:id', deleteProduct);

export default router; 