import { AxiosStatic } from "axios";

export class StormGlass {
    constructor(protected request: AxiosStatic){}

    public async fechPoints(lat: number, lng: number): Promise<{}>{
        return this.request.get(`https://api.stormglass.io/v2/weather/point?params=swellDirection,swellMeight,swellPeriod,waveDirection,waveHeight,windDirection&source=noaa&end=1592113882&lat=${lat}&lng=${lng}`);
        //return Promise.resolve({1:1});
    }
}