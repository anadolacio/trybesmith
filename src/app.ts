import express from 'express';
import productController from './controllers/product.controller';
import ordersController from './controllers/orders.controller';

const app = express();

app.use(express.json());

app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);

app.get('/orders', ordersController.getAllOrders);

export default app;
