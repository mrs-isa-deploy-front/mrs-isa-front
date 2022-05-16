import axios from 'axios';
import Config from "../config.json";

const SHIP_API_BASE_URL = Config.BASE_URL + '/ship/site';

class CottageServce{
    getShips(){
        return axios.get(SHIP_API_BASE_URL + "/all");
    }
    getShipsForHomePageView(){
        return axios.get(SHIP_API_BASE_URL + "/short");
    }
}

export default new CottageServce();