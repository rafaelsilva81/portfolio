import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfolioapi-rafaelsilva81.herokuapp.com/api/',
});

export default api;
