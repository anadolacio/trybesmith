// import { Request, Response, NextFunction } from 'express';
// import mapStatusHttp from '../utils/mapStatusHttp';

// const nameValidation = (req: Request, res: Response, next: NextFunction) => {
//   const { name } = req.body;

//   if (!name) {
//     return res.status(mapStatusHttp('NOT_FOUND'))
//       .json({ message: '"name" is required' });
//   }

//   if (typeof name !== 'string') {
//     return res.status(mapStatusHttp('INCOMPLETE_DATA'))
//       .json({ message: '"name" must be a string' });
//   }

//   if (name.length <= 2) {
//     return res.status(mapStatusHttp('INCOMPLETE_DATA'))
//       .json({ message: '"name" length must be at least 3 characters long' });
//   }

//   next();
// };

// const priceValidation = (req: Request, res: Response, next: NextFunction) => {
//   const { price } = req.body;
//   console.log(price);

//   if (!price) {
//     return res.status(mapStatusHttp('NOT_FOUND'))
//       .json({ message: '"price" is required' });
//   }

//   if (typeof price !== 'string') {
//     return res.status(mapStatusHttp('INCOMPLETE_DATA'))
//       .json({ message: '"price" must be a string' });
//   }

//   if (price.length <= 2) {
//     return res.status(mapStatusHttp('INCOMPLETE_DATA'))
//       .json({ message: '"price" length must be at least 3 characters long' });
//   }

//   next();
// };

// export default {
//   nameValidation,
//   priceValidation,
// };
