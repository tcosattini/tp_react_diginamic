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

  fetchOne = (id) => {
    return this.#api.fetchOne({ target: id });
  };

  create = (commande) => {
    return this.#api.post({ body: commande });
  };

  update = (commande) => {
    return this.#api.update({ body: commande });
  };

  delete = (id) => {
    return this.#api.delete({ target: id });
  };
}

export default CommandeService.builder;
