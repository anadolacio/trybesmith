import express from 'express';
import productController from './controllers/product.controller';
import ordersController from './controllers/orders.controller';
// import productValidation from './middleware/productValidation';
import loginController from './controllers/login.controller';

const app = express();

app.use(express.json());

app.post(
  '/products', 
  //   productValidation.nameValidation,
  //   productValidation.priceValidation,
  productController.createProduct,
);
app.get('/products', productController.getAllProducts);

app.get('/orders', ordersController.getAllOrders);

app.post(
  '/login', 
  loginController.createLogin,
);

export default app;
