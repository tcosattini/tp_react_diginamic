import Api from './api.service';

class ClientService {
  static instance = null;

  #api = new Api('client');

  static builder = () => {
    if (!ClientService.instance) {
      ClientService.instance = new ClientService();
    }

    return ClientService.instance;
  };

  fetchAll = () => {
    return this.#api.fetchAll();
  };

  create = (client) => {
    return this.#api.post({ body: client });
  };

  update = (codcli, client) => {
    return this.#api.updateAt({ target: codcli, body: client });
  };

  delete = (codcli) => {
    return this.#api.delete({ target: codcli });
  };

  get api() {
    return this.#api;
  }
}

export default ClientService.builder;
