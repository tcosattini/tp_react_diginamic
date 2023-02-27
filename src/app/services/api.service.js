import HTTP from './http.client';

class Api {
  #url = "";

  constructor(url) {
    this.#url = url;
  }

  post = ({ body, headers }) => {
    return HTTP.post(this.#url, body, { headers });
  };
  fetchOne = ({ target, headers }) => {
    return HTTP.get(`${this.#url}/${target}`, { headers });
  };
  fetchAll = ({ headers, params }) => {
    return HTTP.get(this.#url, {
      headers,
      params: params,
    });
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
