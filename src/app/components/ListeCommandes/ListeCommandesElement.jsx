export const ListeCommandesElement = ({ client }) => {
  const { prenomcli, nomcli, villecli, cpcli, emailcli } = client;
  return (
    <>
      <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {prenomcli + " " + nomcli}
        </th>
        <td class="px-6 py-4">{villecli + " " + cpcli}</td>
        <td class="px-6 py-4">{emailcli}</td>
        <td class="px-6 py-4">
          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Commandes
          </a>
        </td>
      </tr>
    </>
  );
};
