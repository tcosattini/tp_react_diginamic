import Api from './api.service';



/**
 * Service singleton class for Commande
 * @returns {CommandeService} 
 */
class CommandeService {
  /** @type {CommandeService} */
  static instance = null;

  #api = new Api('commande');

  static builder = () => {
    if (!CommandeService.instance) {
      CommandeService.instance = new CommandeService();
    }

    return CommandeService.instance;
  };

  fetchAll = (page) => {
    return this.#api.fetchAll({ params: { page } });
  };

  create = (commande) => {
    return this.#api.post({ body: commande });
  };

  fetchOne = (codcde) => {
    return this.#api.fetchAt({ target: codcde });
  };

  fetchClient = (codcli) => {
    return this.#api.fetchAt({ target: `client/${codcli}` });
  };

  update = (codcde, commande) => {
    return this.#api.updateAt({
      target: codcde,
      body: commande,
    });
  };

  delete = (codcde) => {
    return this.#api.delete({ target: codcde });
  };

  fetchDetail = (page) => {
    return this.#api.fetchAll({ params: { page } });
  };

  createDetail = (detail) => {
    return this.#api.postAt({ target: 'detail', body: detail });
  };

  updateDetail = (id_dtl_command, detail) => {
    return this.#api.updateAt({
      target: `detail/${id_dtl_command}`,
      body: detail,
    });
  };

  deleteDetail = (id_dtl_command) => {
    return this.#api.deleteAt({ target: `detail/${id_dtl_command}` });
  };

  get api() {
    return this.#api;
  }
}

export default CommandeService.builder;
