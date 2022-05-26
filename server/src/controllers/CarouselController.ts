import { Request, Response } from 'express';
import { Carousel } from '@models/Carousel';
import { Citi, Crud } from '../global'

export default class CarouselController implements Crud {

    async create(request: Request, response: Response){
        const {image, description, date} = request.body;
        
        const isAnyUndefined = Citi.areValuesUndefined(image, description, date);
        if(isAnyUndefined) return response.status(400).send();

        const newCarousel = { image, description, date };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Carousel, newCarousel);
        
        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Carousel);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: carouselFound, message} = await Citi.findByID(Carousel, id);

        if(!carouselFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(Carousel, carouselFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { image, description, date } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, description, date, id);
        if(isAnyUndefined) return response.status(400).send();

        const carouselWithUpdatedValues = { image, description, date };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Carousel, id, carouselWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }
}