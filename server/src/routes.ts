import express from 'express';
import UserController from '@controllers/UserController'
import ImagesController from '@controllers/ImagesController';

const routes = express.Router();
const userController = new UserController();
const imagesController = new ImagesController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/images', imagesController.create);
routes.get('/images', imagesController.get);
routes.delete('/images/:id', imagesController.delete);
routes.put('/images/:id', imagesController.update);


export default routes;