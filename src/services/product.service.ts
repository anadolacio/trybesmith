import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(
  product: ProductInputtableTypes,
): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  return { status: 'SUCCESSFUL', data: newProduct.dataValues };
}

export default {
  createProduct,
};