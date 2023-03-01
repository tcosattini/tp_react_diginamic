import Api from './api.service';


/**
 * Service singleton class for Produit
 * @returns {ProduitService} 
 */
class ProduitService {
  /** @type {ProduitService} */
  static instance = null;

  #api = new Api('produit');

  static builder = () => {
    if (!ProduitService.instance) {
      ProduitService.instance = new ProduitService();
    }

    return ProduitService.instance;
  };

  fetchOne = (codobj) => {
    return this.#api.fetchAt({ target: codobj });
  };

  get api() {
    return this.#api;
  }
}

export default ProduitService.builder;
