import Axios from 'axios';

const api = Axios.create({
    baseURL: "http://localhost:8080/kafka",
})

const chatAPI = {
    sendMessage: (username, text) => {
        let msg = {
            author: username,
            content: text,
        }

        return api.post(`/publish`,msg,{
            headers: { "Content-Type": "application/json" },
        })
    },
}

export default chatAPI