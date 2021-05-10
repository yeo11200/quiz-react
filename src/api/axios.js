import axios from 'axios';

const URL = (window.location.hostname === 'localhost') ? 'https://api.jinseop-api.click' : '//api.jinseop-api.click';

const DefaultApi = axios.create({
  baseURL: URL,
});

/**
 * 2.5안에 API 호출이 되지않으면 error를 발생
 */
DefaultApi.defaults.timeout = 2500;

export default DefaultApi;
