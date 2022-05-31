import express from 'express';
import ImagesController from '@controllers/ImagesController';
import TimerController from '@controllers/TimerController';

const routes = express.Router();
const timerController = new TimerController();
const imagesController = new ImagesController();
 
routes.post('/images', imagesController.create);
routes.get('/images', imagesController.get);
routes.delete('/images/:id', imagesController.delete);
routes.put('/images/:id', imagesController.update);

routes.post('/timer', timerController.create);
routes.get('/timer', timerController.get);
routes.delete('/timer/:id', timerController.delete);
routes.put('/timer/:id', timerController.update);

export default routes;