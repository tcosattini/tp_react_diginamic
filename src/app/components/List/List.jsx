const List = ({ clients }) => {
  // const { data, getList } = useList(1);
  // const [list, setList] = useState();

  // doit etre dans la fonction du render pour beneficier du hook du router

  // console.log(data);

  return (
    <div className="flex flex-wrap items-center justify-center w-full list">
      {display(clients)}
    </div>
  );
};

/**
 *
 * @param {import('../../models').Client[]} clients
 * @returns
 */
const display = (clients) => {
  return clients.map((client) => {
    return (
      <div
        key={client.codcli}
        className="w-200px h-300px"
      >
        <p key={client.codcli}>{client.codcli}</p>
        <p key={client.genrecli}>{client.genrecli}</p>
        <p key={client.nomcli}>{client.nomcli}</p>
        <p key={client.prenomcli}>{client.prenomcli}</p>
        <p key={client.adresse1cli}>{client.adresse1cli}</p>
        <p key={client.adresse2cli}>{client.adresse2cli}</p>
        <p key={client.adresse3cli}>{client.adresse3cli}</p>
        <p key={client.villecli}>{client.villecli}</p>
        <p key={client.emailcli}>{client.emailcli}</p>
        <p key={client.portcli}>{client.portcli}</p>
        <p key={client.newsletter}>{client.newsletter}</p>
        <p key={client.id_commune_id}>{client.id_commune_id}</p>
      </div>
    );
  });
};

export default List;
