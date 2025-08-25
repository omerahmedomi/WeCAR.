import { Router } from 'express';
import { addCar, getAllCars } from '../controllers/car.controller.js';

const carRouter = Router();

carRouter.get('/',getAllCars)
carRouter.get('/:id')
carRouter.put('/:id')
carRouter.post('/',addCar)
carRouter.delete('/:id')

export default carRouter
