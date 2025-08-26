import { Router } from 'express';
import { addCar, deleteCar, getAllCars, updateCar } from '../controllers/car.controller.js';

const carRouter = Router();

carRouter.get('/',getAllCars)
carRouter.get('/:id')
carRouter.put('/:id',updateCar)
carRouter.post('/',addCar)
carRouter.delete('/:id',deleteCar)

export default carRouter
