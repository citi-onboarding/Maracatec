import { Request, Response } from 'express';
import { Timer } from '@models/Timer';
import { Citi, Crud } from '../global'

export default class TimerController implements Crud {

    async create(request: Request, response: Response){
        const {EventDay} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(EventDay);
        if(isAnyUndefined) return response.status(400).send();

        const newTimer = { EventDay };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Timer, newTimer);

        return response.status(httpStatus).send({ message });
    }
    
    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Timer);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: timerFound, message } = await Citi.findByID(Timer, id); 
           
        if(!timerFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Timer, timerFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {EventDay } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(EventDay, id);
        if(isAnyUndefined) return response.status(400).send();

        const timerWithUpdatedValues = { EventDay };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Timer, id, timerWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

}