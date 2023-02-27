import Api from './api.service';

class ClientService {
  static instance = null;

  #api = new Api("client");

  static builder = () => {
    if (!ClientService.instance) {
      ClientService.instance = new ClientService();
    }

    return ClientService.instance;
  };

  fetchAll = (page) => {
    return this.#api.fetchAll({ params: page });
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

  get api() {
    return this.#api;
  }
}

export default ClientService.builder;
