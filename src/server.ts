import './utils/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ForecastCpontroller } from './controllers/forecast';
import { Application } from 'express';


export class SetupServer extends Server{
    constructor(private port = 3000){
        super();
    }

    public int(): void {
        this.setupExpress();
        this.setupControllers();
    }

    private setupExpress(): void{
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void{
        const forecastController = new ForecastCpontroller();
        this.addControllers([forecastController]); 
    }

    public getApp(): Application{
        return this.app;
    }
}