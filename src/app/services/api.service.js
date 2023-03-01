import HTTP from './http.client';

class Api {
  #resource = "";

  constructor(url) {
    this.#resource = url;
  }

  /**
   * Fetch all ressources
   * @param   {{params: params, headers: headers}}
   * @returns {Response}
   */
  fetchAll = ({ params, headers } = {}) => {
    return HTTP.get(this.#resource, { params, headers });
  };

  fetchAt = ({ target, params, headers } = {}) => {
    return HTTP.get(`${this.#resource}/${target}`, { params, headers });
  };

  post = ({ body, headers }) => {
    return HTTP.post(this.#resource, body, { headers });
  };

  postAt = ({ target, body, headers }) => {
    return HTTP.post(`${this.#resource}/${target}`, body, { headers });
  };

  update = ({ body, headers }) => {
    return HTTP.put(this.#resource, body, { headers });
  };

  updateAt = ({ target, body, headers }) => {
    return HTTP.put(`${this.#resource}/${target}`, body, { headers });
  };

  delete = ({ target, headers }) => {
    return HTTP.delete(`${this.#resource}/${target}`, { headers });
  };

  deleteAt = ({ target, headers }) => {
    return HTTP.delete(`${this.#resource}/${target}`, { headers });
  };

  get url() {
    return this.#resource;
  }
}

export default Api;
