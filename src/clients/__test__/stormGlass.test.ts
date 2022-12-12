import {StormGlass} from '@src/clients/stormGlass';
import axios from 'axios';

//limpar os mocks de dependencias
jest.mock('axios');

describe('StormGlass client', ()=>{
    it('should return the normalized forecast from the StormGlass service', async ()=>{
        //Latitude e longitude
        const lat = -33.792726;
        const lng = 151.289824;

        axios.get = jest.fn().mockResolvedValue({});
        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fechPoints(lat, lng);
        expect(response).toEqual({1:1});
    });
})