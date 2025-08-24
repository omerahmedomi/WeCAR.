import { Router } from 'express';
import { addCar } from '../controllers/car.controller.js';

const carRouter = Router();

carRouter.get('/')
carRouter.get('/:id')
carRouter.put('/:id')
carRouter.post('/',addCar)
carRouter.delete('/:id')

export default carRouter
