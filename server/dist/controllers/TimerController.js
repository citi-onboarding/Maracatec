"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Timer = require("../models/Timer");

var _global = require("../global");

class TimerController {
  async create(request, response) {
    const {
      EventDay
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(EventDay);

    if (isAnyUndefined) return response.status(400).send();
    const newTimer = {
      EventDay
    };
    const {
      httpStatus,
      message
    } = await _global.Citi.insertIntoDatabase(_Timer.Timer, newTimer);
    return response.status(httpStatus).send({
      message
    });
  }

  async get(request, response) {
    const {
      httpStatus,
      values
    } = await _global.Citi.getAll(_Timer.Timer);
    return response.status(httpStatus).send(values);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const {
      value: timerFound,
      message
    } = await _global.Citi.findByID(_Timer.Timer, id);
    if (!timerFound) return response.status(400).send({
      message
    });
    const {
      httpStatus,
      messageFromDelete
    } = await _global.Citi.deleteValue(_Timer.Timer, timerFound);
    return response.status(httpStatus).send({
      messageFromDelete
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      EventDay
    } = request.body;

    const isAnyUndefined = _global.Citi.areValuesUndefined(EventDay, id);

    if (isAnyUndefined) return response.status(400).send();
    const timerWithUpdatedValues = {
      EventDay
    };
    const {
      httpStatus,
      messageFromUpdate
    } = await _global.Citi.updateValue(_Timer.Timer, id, timerWithUpdatedValues);
    return response.status(httpStatus).send({
      messageFromUpdate
    });
  }

}

exports.default = TimerController;