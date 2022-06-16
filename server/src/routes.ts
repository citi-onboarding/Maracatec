import express from 'express';

import BannerController from '@controllers/BannerController';
import ImagesController from '@controllers/ImagesController';
import TimerController from '@controllers/TimerController';
import CarouselController from '@controllers/CarouselController'
import { SendMail } from '@controllers/MailController';

const routes = express.Router();
const bannerController = new BannerController();
const timerController = new TimerController();
const imagesController = new ImagesController();
const carouselController = new CarouselController();

routes.post('/images', imagesController.create);
routes.get('/images', imagesController.get);
routes.delete('/images/:id', imagesController.delete);
routes.put('/images/:id', imagesController.update);

routes.post('/timer', timerController.create);
routes.get('/timer', timerController.get);
routes.delete('/timer/:id', timerController.delete);
routes.put('/timer/:id', timerController.update);

routes.post('/carousel', carouselController.create);
routes.get('/carousel', carouselController.get);
routes.delete('/carousel/:id', carouselController.delete);
routes.put('/carousel/:id', carouselController.update);

routes.post('/banner', bannerController.create);
routes.get('/banner', bannerController.get);
routes.delete('/banner/:id', bannerController.delete);
routes.put('/banner/:id', bannerController.update);

routes.post('/email', SendMail);

export default routes;