import { useListeCommandes } from "./hooks/useListeCommandes";
import { ListeCommandesElement } from "./ListeCommandesElement";

const ListeCommandes = () => {
  const { data } = useListeCommandes();

  return (
    <div className="flex-wrap items-center justify-center w-full list">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Nom du client
              </th>
              <th scope="col" class="px-6 py-3">
                Adresse
              </th>
              <th scope="col" class="px-6 py-3">
                E-mail
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.list?.map((client) => (
              <ListeCommandesElement client={client} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListeCommandes;
