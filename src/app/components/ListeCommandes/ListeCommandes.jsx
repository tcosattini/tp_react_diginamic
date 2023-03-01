import { useListeCommandes } from './hooks/useListeCommandes';
import { ListeCommandesElement } from './ListeCommandesElement';

const ListeCommandes = () => {
  const { data } = useListeCommandes();

  return (
    <div className="flex-wrap items-center justify-center w-full h-full list">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Code de la commande
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Nombre de colis
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Timbre de la commande
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Timbre du client
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.list?.map((commande) => (
              <ListeCommandesElement commande={commande} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeCommandes;
