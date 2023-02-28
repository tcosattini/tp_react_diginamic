export const ListeCommandesElement = ({ commande }) => {
  const { codcde, datcde, timbrecli, timbrecde, nbcolis } = commande;
  return (
    <>
      <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {codcde}
        </th>
        <td class="px-6 py-4">{datcde}</td>
        <td class="px-6 py-4">{nbcolis}</td>
        <td class="px-6 py-4">{timbrecde}</td>
        <td class="px-6 py-4">{timbrecli}</td>
        <td class="px-6 py-4">
          <a
            href="#"
            class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Modifier
          </a>
        </td>
      </tr>
    </>
  );
};
