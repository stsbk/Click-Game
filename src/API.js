import axios from 'axios';

const baseURL = 'https://starnavi-frontend-test-task.herokuapp.com';

const API = axios.create({
    baseURL,
    responseType: 'json',
});

export default API;
