import axios from 'axios'
import { SEND_MESSAGE } from './types'


const api = axios.create({
    baseURL: "http://localhost:8080/kafka"
})


export function sendMessage(msg){
    
    const request = api.post(`/publish`,msg,{
        headers: { "Content-Type": "application/json" },})
            .then(response => 
                response.message
            )
    return{
        type: SEND_MESSAGE,
        payload: request
    }

}