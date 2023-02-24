import Api from './api.service';

class ModelService {
  #api = new Api('client');

  fetchAll = () => {
    return this.#api.fetchAll();
  };

  fetchOne = (id) => {
    return this.#api.fetchOne({ target: id });
  };

  create = (model) => {
    return this.#api.post({ body: model });
  };

  update = (model) => {
    return this.#api.update({ body: model });
  };

  delete = (id) => {
    return this.#api.delete({ target: id });
  };
}

const instance = null;

const builder = () => {
  return !instance ? new ModelService() : instance;
};

export default builder;
