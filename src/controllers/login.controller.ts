import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHttp';

async function createLogin(req: Request, res: Response): Promise<Response> {
  const serviceResponse = await loginService.createLogin(req.body.username, req.body.password);

  if (serviceResponse.status !== 'SUCCESS') {
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);  
  }
  
  return res.status(200).json(serviceResponse.data);
}

export default {
  createLogin,
};