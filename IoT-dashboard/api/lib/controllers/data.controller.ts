import Controller from "interfaces/controller.interface";
import { Request, Response, NextFunction, Router } from 'express'
<<<<<<< Updated upstream
=======
import {checkIdParam} from "../middlewares/deviceIdParam.middleware";
import DataService from "../modules/services/data.service";
import Joi from "joi";
>>>>>>> Stashed changes

let testArr = [4, 5, 6, 3, 5, 3, 7, 5, 13, 5, 6, 4, 3, 6, 3, 6];

class DataController implements Controller {
    public path = '/api/data';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/latest`, this.getLatestReadingFromAllDevices);
        this.router.post(`${this.path}/:id`, this.addData);

        this.router.get(`${this.path}/:id`, this.getDataID);
        this.router.get(`${this.path}/:id/latest`, this. getLatestID);
        this.router.get(`${this.path}/:id/:num`, this. getRangeID);
        this.router.delete(`${this.path}/all`, this. deleteAll);
        this.router.delete(`${this.path}/:id`, this. deleteAllByID);
    }

    private getLatestReadingFromAllDevices = async (request: Request, response: Response, next: NextFunction) => {
        const id = Number(request.params.id);
        const data = testArr;

        response.status(200).json(data[id]);
    }

    private addData = async (request: Request, response: Response, next: NextFunction) => {
    const { elem } = request.body;
    const id = Number(request.params.id);

<<<<<<< Updated upstream
    let data = testArr;
    data[id] = elem;

    response.status(200).json(data);
=======
        const schema = Joi.object({
            air: Joi.array()
                .items(
                    Joi.object({
                        id: Joi.number().integer().positive().required(),
                        value: Joi.number().positive().required()
                    })
                )
                .unique((a, b) => a.id === b.id),
            deviceId: Joi.number().integer().positive().valid(parseInt(id, 10)).required()
        });

        try {
            await this.dataService.createData(data);
            response.status(200).json(data);
        } catch (error: any) {
            console.error(`Validation Error: ${error.message}`);
            response.status(400).json({ error: 'Invalid input data.' });
        }
    }

    private getAllDeviceData = async (request: Request, response: Response, next: NextFunction) => {
        const { id } = request.params;
        const data = await this.dataService.query(id);
        response.status(200).json(data);
>>>>>>> Stashed changes
    };


    private getDataID = async (request: Request, response: Response, next: NextFunction) => {
        const id = Number(request.params.id);
        const data = testArr;

        response.status(200).json(data[id]);
    };

    private getLatestID = async (request: Request, response: Response, next: NextFunction) => {
        const id = Number(request.params.id);
        const data = Math.max(...testArr.filter((_, index) => index === id));
        
        response.status(200).json(data);
    };

    private getRangeID = async (request: Request, response: Response, next: NextFunction) => {
        const id = Number(request.params.id);
        const number = Number(request.params.num);
    
        const rangeStart = id;
        const rangeEnd = id + number; 
    
        const data = testArr.slice(rangeStart, rangeEnd);
    
        response.status(200).json(data);
    };

    private deleteAll = async (request: Request, response: Response, next: NextFunction) => {
        testArr.splice(0, testArr.length);
        response.status(200).json({message: 'All items in testArr have been removed!'});
    };

    private deleteAllByID = async (request: Request, response: Response, next: NextFunction) => {
        const id = Number(request.params.id);
        const data = testArr.filter(item => item != id);

        response.status(200).json(data); 
    };


}

export default DataController;


