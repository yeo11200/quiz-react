import axios from 'axios';

const URL = (window.location.hostname == 'localhost') ? 'http://localhost:5000' : '//api.jinseop-api.click';

const DefaultApi = axios.create({
    baseURL:URL,
});

export default DefaultApi;