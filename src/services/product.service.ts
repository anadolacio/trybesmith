import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(
  product: Omit<Product, 'id'>,
): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  return { status: 'CREATED', data: newProduct.dataValues };
}

export default {
  createProduct,
};