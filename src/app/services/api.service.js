import HTTP from './http.client';

class Api {
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  fetchAll = ({ params, headers } = {}) => {
    return HTTP.get(this.#url, { params, headers });
  };

  post = ({ body, headers }) => {
    return HTTP.post(this.#url, body, { headers });
  };

  postAt = ({ target, body, headers }) => {
    return HTTP.post(`${this.#url}/${target}`, body, { headers });
  };

  fetchAt = ({ target, headers }) => {
    return HTTP.get(`${this.#url}/${target}`, { headers });
  };

  update = ({ body, headers }) => {
    return HTTP.put(this.#url, body, { headers });
  };

  updateAt = ({ target, body, headers }) => {
    return HTTP.put(`${this.#url}/${target}`, body, { headers });
  };

  delete = ({ target, headers }) => {
    return HTTP.delete(`${this.#url}/${target}`, { headers });
  };

  deleteAt = ({ target, headers }) => {
    return HTTP.delete(`${this.#url}/${target}`, { headers });
  };

  get url() {
    return this.#url;
  }
}

export default Api;
