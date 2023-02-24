import HTTP from './http.client';

class Api {
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  post = ({ body, headers }) => {
    return HTTP.post(this.#url, body, { headers });
  };
  fetchOne = ({ target, headers }) => {
    return HTTP.get(`${this.#url}/${target}`, { headers });
  };
  fetchAll = ({ headers } = {}) => {
    return HTTP.get(this.#url, { headers });
  };
  update = ({ body, headers }) => {
    return HTTP.put(this.#url, body, { headers });
  };
  delete = ({ target, headers }) => {
    return HTTP.delete(`${this.#url}/${target}`, { headers });
  };
}

export default Api;