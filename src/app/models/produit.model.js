class Produit {
  constructor({
    codobj, //id
    libobj,
    tailleobj,
    puobj,
    poidsobj,
    indispobj,
    o_imp,
    o_aff,
    o_cartp,
    idcondit, // foreign
    points,
    o_ordre_aff,
  } = {}) {
    this.codobj = codobj;
    this.libobj = libobj;
    this.tailleobj = tailleobj;
    this.puobj = puobj;
    this.poidsobj = poidsobj;
    this.indispobj = indispobj;
    this.o_imp = o_imp;
    this.o_aff = o_aff;
    this.o_cartp = o_cartp;
    this.idcondit = idcondit;
    this.points = points;
    this.o_ordre_aff = o_ordre_aff;
  }
}

export default Produit;
