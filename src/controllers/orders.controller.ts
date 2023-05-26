import { Request, Response } from 'express';
import orderService from '../services/orders.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

async function getAllOrders(req: Request, res: Response): Promise<Response> {
  const allOrders = await orderService.getAllOrders();

  return res.status(mapStatusHTTP(allOrders.status)).json(allOrders.data);
}

export default {
  getAllOrders,
};