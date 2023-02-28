import axios from 'axios';
import config from '../config';

const HTTP = axios.create({
  baseURL: config.api.url,
});

HTTP.interceptors.request.use(sendJson, handleError);

HTTP.interceptors.response.use(unwrapResult, handleError);

export default HTTP;

function handleError(error) {
  // Add error handling here
  return Promise.reject(error);
}

/**
 * @param {import('axios').AxiosRequestConfig} request
 */
function sendJson(request) {
  request.headers = {
    ...request.headers,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return request;
}

/**
 * in seems that django is sending the response in a response key
 *
 * @param {import('axios').AxiosResponse} response
 */
function unwrapResult(response) {
  return response.data.response;
}
