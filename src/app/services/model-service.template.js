import Api from './api.service';

class ModelService {
  static instance = null;

  #api = new Api('model');

  static builder = () => {
    if (!ModelService.instance) {
      ModelService.instance = new ModelService();
    }

    return ModelService.instance;
  };

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

export default ModelService.builder;
