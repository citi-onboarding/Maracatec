"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _BannerController = _interopRequireDefault(require("./controllers/BannerController"));

var _ImagesController = _interopRequireDefault(require("./controllers/ImagesController"));

var _TimerController = _interopRequireDefault(require("./controllers/TimerController"));

var _CarouselController = _interopRequireDefault(require("./controllers/CarouselController"));

var _MailController = require("./controllers/MailController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = _express.default.Router();

const bannerController = new _BannerController.default();
const timerController = new _TimerController.default();
const imagesController = new _ImagesController.default();
const carouselController = new _CarouselController.default();
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
routes.post('/email', _MailController.SendMail);
var _default = routes;
exports.default = _default;