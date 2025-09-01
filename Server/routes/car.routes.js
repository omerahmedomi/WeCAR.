import { Router } from 'express';
import { addCar, deleteCar, getAllCars, getSearchResults, updateCar } from '../controllers/car.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';
import { adminMiddleware } from '../middlewares/admin.middleware.js';

const carRouter = Router();

carRouter.get('/',getAllCars)
carRouter.get('/:id')
carRouter.put('/:id',updateCar)
carRouter.post('/',authMiddleware,adminMiddleware,addCar)
carRouter.delete('/:id',deleteCar)
carRouter.post('/search',getSearchResults)

export default carRouter
