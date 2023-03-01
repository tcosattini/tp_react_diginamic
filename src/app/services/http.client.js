import axios from 'axios';
import config from '../config';

const HTTP = axios.create({
  baseURL: config.api.url,
});

HTTP.interceptors.request.use(sendJson, handleError);

HTTP.interceptors.response.use(unwrapResult, handleError);

export default HTTP;
/**
 * Handle error
 * @param   {Error}  
 * @returns {Promise} 
 */
function handleError(error) {
  // Add error handling here
  return Promise.reject(error);
}

/**
 * Add  Content-Type and Accepts headers to the request
 * @param   {Request}  
 * @returns {Request} 
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
 * @param   {Response}  
 * @returns {Response.data} 
 */
function unwrapResult(response) {
  return response.data;
}
