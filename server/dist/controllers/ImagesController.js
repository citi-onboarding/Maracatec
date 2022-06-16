"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Images = require("../models/Images");

var _global = require("../global");

class ImagesController {
  async create(request, response) {
    const {
      images
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(images);

    if (isAnyUndefined) return response.status(400).send();
    const newImages = {
      images
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_Images.Images, newImages);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_Images.Images);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: imagesFound,
      message
    } = await _global.Citi.findByID(_Images.Images, id);
    if (!imagesFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_Images.Images, imagesFound);
    return response.status(httpStatus).send({
      messageFromDelete
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      images
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(images, id);

    if (isAnyUndefined) return response.status(400).send();
    const imagesWithUpdatedValues = {
      images
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_Images.Images, id, imagesWithUpdatedValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = ImagesController;