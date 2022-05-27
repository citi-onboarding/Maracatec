import express from 'express';
import TimerController from '@controllers/TimerController';

const routes = express.Router();
const timerController = new TimerController();

routes.post('/timer', timerController.create);
routes.get('/timer', timerController.get);
routes.delete('/timer/:id', timerController.delete);
routes.put('/timer/:id', timerController.update);

export default routes;