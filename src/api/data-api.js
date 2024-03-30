import axios from "axios";
const BASE_URL = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json';

export class DataAPI{
    static async fetchAll(){
        return(await axios.get(`${BASE_URL}`)).data
    }
}