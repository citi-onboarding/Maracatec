"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Carousel = require("../models/Carousel");

var _global = require("../global");

class UserController {
  async create(request, response) {
    const {
      image,
      description,
      date,
      url
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, description, date, url);

    if (isAnyUndefined) return response.status(400).send();
    const newCarousel = {
      image,
      description,
      date,
      url
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_Carousel.Carousel, newCarousel);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_Carousel.Carousel);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: carouselFound,
      message
    } = await _global.Citi.findByID(_Carousel.Carousel, id);
    if (!carouselFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_Carousel.Carousel, carouselFound);
    return response.status(httpStatus).send({
      messageFromDelete
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      image,
      description,
      date,
      url
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(image, description, date, url, id);

    if (isAnyUndefined) return response.status(400).send();
    const userWithUpdatedValues = {
      image,
      description,
      date,
      url
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_Carousel.Carousel, id, userWithUpdatedValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = UserController;