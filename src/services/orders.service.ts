import { ServiceResponse } from 'src/types/serviceResponse';
import OrderModel, { OrderSequelizeModel } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';

async function getAllOrders(): Promise<ServiceResponse<Order[]>> {
  const allOrders: OrderSequelizeModel[] = await OrderModel.findAll();
  const orderList = allOrders.map(
    async (order) => {
      const products = await ProductModel.findAll({ where: { orderId: order.dataValues.id } });
      const productList = products.map(
        (product): number => product.dataValues.id,
      );
      return { ...order.dataValues, productIds: productList };
    },
  );
  const result = await Promise.all(orderList);

  return { status: 'SUCCESS', data: result };
}

export default {
  getAllOrders,
};