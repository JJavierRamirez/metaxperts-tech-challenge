import express from 'express';
import morgan from 'morgan';
import {PORT} from './config.js';
import productsRoutes from "./routes/products.routes.js";
import indexRoutes from "./routes/index.routes.js";
import swaggerUI from "swagger-ui-express";
import specs from '../swagger/swagger.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Routes
app.use(indexRoutes);
app.use('/api',productsRoutes);

// Default route
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

app.listen(PORT);
console.log(`Server runing on port ${PORT}`);