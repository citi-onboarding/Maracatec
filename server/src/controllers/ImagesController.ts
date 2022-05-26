import { Request, Response } from 'express';
import { Images } from '@models/Images';
import { Citi, Crud } from '../global'

export default class ImagesController implements Crud {

    async create(request: Request, response: Response){
        const {images} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(images);
        if(isAnyUndefined) return response.status(400).send();

        const newImages = { images };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Images, newImages);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Images);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: imagesFound, message } = await Citi.findByID(Images, id); 
           
        if(!imagesFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Images, imagesFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {images } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(images, id);
        if(isAnyUndefined) return response.status(400).send();

        const imagesWithUpdatedValues = { images };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Images, id, imagesWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}