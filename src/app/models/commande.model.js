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

class CommandeDetail {
  constructor({ codcde, codobj_id, qte, colis, commentaire } = {}) {
    this.codcde = codcde;
    this.codobj_id = codobj_id;
    this.qte = qte;
    this.colis = colis;
    this.commentaire = commentaire;
  }
}

export { Commande, CommandeDetail };
