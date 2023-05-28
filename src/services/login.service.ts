import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt';
import { ServiceResponse } from '../types/serviceResponse';
import UserModel from '../database/models/user.model';
import { Token } from '../types/Token';

const createLogin = async (username: string, password: string): Promise<ServiceResponse<Token>> => {
  let serviceResponse: ServiceResponse<Token>;
  if (!username || !password) {
    serviceResponse = {
      status: 'INVALID_DATA', data: { message: '"username" and "password" are required' },
    }; return serviceResponse;
  }
  const user = await UserModel.findOne({ where: { username } });
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    serviceResponse = {
      status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' },
    }; return serviceResponse;
  }
  const token = jwt.sign({ username: user?.dataValues.username,
    password: user?.dataValues.password });

  serviceResponse = {
    status: 'SUCCESS', data: { token },
  };

  return serviceResponse;
};

export default {
  createLogin,
};