import Api from './api.service';

class CommandeService {
  static instance = null;

  #api = new Api('commande');

  static builder = () => {
    if (!CommandeService.instance) {
      CommandeService.instance = new CommandeService();
    }

    return CommandeService.instance;
  };

  fetchAll = () => {
    return this.#api.fetchAll();
  };

  // path can be 'client' or 'detail' or 'client/detail/other'
  fetchWithPath = (path, id) => {
    return this.#api.fetchWithPath({ path, target: id });
  };

  create = (commande) => {
    return this.#api.post({ body: commande });
  };

  update = (commande) => {
    return this.#api.update({ body: commande });
  };

  get api() {
    return this.#api;
  }
}

export default CommandeService.builder;
