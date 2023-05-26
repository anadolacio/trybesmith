import { ServiceResponse } from 'src/types/serviceResponse';
import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

async function createProduct(
  product: Omit<Product, 'id'>,
): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  return { status: 'CREATED', data: newProduct.dataValues };
}
async function getAllProducts(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const allProducts = await ProductModel.findAll();

  return { status: 'SUCCESS', data: allProducts };
}

export default {
  createProduct,
  getAllProducts,
};