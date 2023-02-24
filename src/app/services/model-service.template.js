import Api from './api.service';

class ModelService {
  #api = Api('model');

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

let instance = null;

const builder = () => {
  if (!instance) {
    instance = new ModelService();
  }

  return instance;
};

export default builder;
