import axios from 'axios';

const URL = (window.location.hostname == 'localhost') ? 'https://api.jinseop-api.click' : '//api.jinseop-api.click';

const DefaultApi = axios.create({
    baseURL:URL,
});

export default DefaultApi;