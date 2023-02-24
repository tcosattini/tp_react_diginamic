import Api from './api.service';

class ClientService {
  #api = Api('client');

  fetchAll = () => {
    return this.#api.fetchAll();
  };

  fetchOne = (id) => {
    return this.#api.fetchOne({ target: id });
  };

  create = (client) => {
    return this.#api.post({ body: client });
  };

  update = (client) => {
    return this.#api.update({ body: client });
  };

  delete = (id) => {
    return this.#api.delete({ target: id });
  };
}

let instance = null;

const builder = () => {
  if (!instance) {
    instance = new ClientService();
  }

  return instance;
};

export default builder;
