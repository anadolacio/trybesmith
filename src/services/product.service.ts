import ProductModel, { ProductInputtableTypes } from 'src/database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(
  product: ProductInputtableTypes,
): Promise<Product> {
  const newProduct = await ProductModel.create(product);
  
  return newProduct;
}

export default {
  createProduct,
};