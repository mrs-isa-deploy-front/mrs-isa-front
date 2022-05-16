import axios from 'axios';
import Config from "../config.json";
//import async from "async";

const COTTAGE_API_BASE_URL = Config.BASE_URL + '/cottage/site';

class CottageServce{
    getCottages(){
        return axios.get(COTTAGE_API_BASE_URL + "/all");
    }
    async getCottagesForHomePageView(){
        return axios.get(COTTAGE_API_BASE_URL + "/short");
    }
}

export default new CottageServce();