import { useListeClient } from './hooks/useListeClient';
import { ListClientElement } from './ListClientElement';
import { Paginate } from './Paginate';

const ListeClient = () => {
  const { data, selectedPage, setSelectedPage } = useListeClient();

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
                Nom du client
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Adresse
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                E-mail
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
            {data.list?.map((client, key) => (
              <ListClientElement
                client={client}
                key={client.codcli}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end w-full mt-1 list">
        <Paginate
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      <br />
      <div className="flex items-center justify-end w-full mt-1 list">
        <a
          href={'/commande/create'}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled"
        >
          Ajouter une commande
        </a>
      </div>
    </div>
  );
};

export default ListeClient;
