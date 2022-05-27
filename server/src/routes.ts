import express from 'express';
import UserController from '@controllers/UserController'
import TimerController from '@controllers/TimerController';

const routes = express.Router();
const userController = new UserController();
const timerController = new TimerController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/timer', timerController.create);
routes.get('/timer', timerController.get);
routes.delete('/timer/:id', timerController.delete);
routes.put('/timer/:id', timerController.update);

export default routes;