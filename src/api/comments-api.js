import axios from "axios";
const BASE_URL = "http://localhost:3200/comments";

export class CommentsAPI{
    static async fetchAll(){
        return(await axios.get(`${BASE_URL}`)).data
    }
    static async create(comment) {
        return (await axios.post(`${BASE_URL}`, comment)).data;
    }
    
}