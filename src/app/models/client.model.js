class Client {
  constructor({
    codcli,
    genrecli,
    nomcli,
    prenomcli,
    adresse1cli,
    adresse2cli,
    adresse3cli,
    villecli,
    emailcli,
    portcli,
    newsletter,
    id_commune_id,
  } = {}) {
    this.codcli = codcli;
    this.genrecli = genrecli;
    this.nomcli = nomcli;
    this.prenomcli = prenomcli;
    this.adresse1cli = adresse1cli;
    this.adresse2cli = adresse2cli;
    this.adresse3cli = adresse3cli;
    this.villecli = villecli;
    this.emailcli = emailcli;
    this.portcli = portcli;
    this.newsletter = newsletter;
    this.id_commune_id = id_commune_id;
  }
}

export default Client;
