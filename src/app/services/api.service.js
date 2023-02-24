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

/**
 * This is a registry of Api instances.
 */
let registry = {};

/**
 * This is a factory function that returns an Api instance.
 * If the instance already exists, it returns it.
 *
 * @param {string} resource
 */
const register = (resource) => {
  if (!registry[resource]) {
    registry = { ...registry, [resource]: new Api(resource) };
  }

  return registry[resource];
};

export default register;
