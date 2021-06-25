import axios from "axios";

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Djaysson/api-DstoreShoes',
});

export default api;