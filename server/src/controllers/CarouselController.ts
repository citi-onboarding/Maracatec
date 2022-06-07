import { Request, Response } from 'express';
import { Carousel } from '@models/Carousel';
import { Citi, Crud } from '../global'
import { url } from 'inspector';

export default class UserController implements Crud {

    async create(request: Request, response: Response){
        const {image, description, date, url} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, description, date, url);
        if(isAnyUndefined) return response.status(400).send();

        const newCarousel = { image, description, date, url };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Carousel, newCarousel);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Carousel);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: carouselFound, message } = await Citi.findByID(Carousel, id); 
           
        if(!carouselFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Carousel, carouselFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {image, description, date, url } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(image, description, date, url, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = { image, description, date, url };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Carousel, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}