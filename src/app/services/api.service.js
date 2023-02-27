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

  fetchWithPath = ({ path, target, headers }) => {
    return HTTP.get(`${this.#url}/${path}/${target}`, { headers });
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

  get url() {
    return this.#url;
  }
}

export default Api;
