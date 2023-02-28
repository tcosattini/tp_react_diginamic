import Api from './api.service';

class ModelService {
  /** @type {ModelService} */
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

  get api() {
    return this.#api;
  }
}

export default ModelService.builder;
