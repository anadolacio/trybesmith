// src/controllers/transactions.controller.ts

import { Request, Response } from 'express';
import productService from 'src/services/product.service';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { name, price, orderId } = req.body;
  const newProduct = await productService.createProduct({ name, price, orderId });
  return res.status(201).json(newProduct);
}

export default {
  createProduct,
};