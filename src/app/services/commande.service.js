import Api from './api.service';

class CommandeService {
  #api = Api('commande');

  fetchAll = () => {
    return this.#api.fetchAll();
  };

  fetchOne = (id) => {
    return this.#api.fetchOne({ target: id });
  };

  create = (CommandeService) => {
    return this.#api.post({ body: CommandeService });
  };

  update = (CommandeService) => {
    return this.#api.update({ body: CommandeService });
  };

  delete = (id) => {
    return this.#api.delete({ target: id });
  };
}

let instance = null;

const builder = () => {
  if (!instance) {
    instance = new CommandeService();
  }

  return instance;
};

export default builder;
