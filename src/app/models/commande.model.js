class CommandeDto {
  constructor({
    codcde,
    datcde,
    codcli_id,
    timbrecli,
    timbrecde,
    nbcolis,
    cheqcli,
    idcondit,
    cdecomt,
    barchive,
    bstock,
    id_dtl_commande_id,
  } = {}) {
    this.codcde = codcde;
    this.datcde = datcde;
    this.codcli_id = codcli_id;
    this.timbrecli = timbrecli;
    this.timbrecde = timbrecde;
    this.nbcolis = nbcolis;
    this.cheqcli = cheqcli;
    this.idcondit = idcondit;
    this.cdecomt = cdecomt;
    this.barchive = barchive;
    this.bstock = bstock;
    this.id_dtl_commande_id = id_dtl_commande_id;
  }
}

class Commande {
  constructor({
    codcde,
    datcde,
    codcli_id,
    timbrecli,
    timbrecde,
    nbcolis,
    cheqcli,
    idcondit,
    cdecomt,
    barchive,
    bstock,
    id_dtl_commande_id,
    details,
  } = {}) {
    this.codcde = codcde;
    this.datcde = datcde;
    this.codcli_id = codcli_id;
    this.timbrecli = timbrecli;
    this.timbrecde = timbrecde;
    this.nbcolis = nbcolis;
    this.cheqcli = cheqcli;
    this.idcondit = idcondit;
    this.cdecomt = cdecomt;
    this.barchive = barchive;
    this.bstock = bstock;
    this.id_dtl_commande_id = id_dtl_commande_id;

    this.details = details;
  }
}

class Detail {
  constructor({ qte, colis, commentaire, produit, id_dtl_commande } = {}) {
    this.id_dtl_commande = id_dtl_commande;
    this.qte = qte;
    this.colis = colis;
    this.commentaire = commentaire;
    this.produit = produit;
  }
}

export { Commande, CommandeDto, Detail };
