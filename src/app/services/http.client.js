import config from '@config';
import axios from 'axios';

const HTTP = axios.create({
  baseURL: config.api.url,
});

HTTP.interceptors.request.use(sendJson);

HTTP.interceptors.response.use(unwrapResult);

export default HTTP;

function unwrapResult(response) {
  return response.data;
}

function sendJson(request) {
  request.headers = {
    ...request.headers,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return request;
}
