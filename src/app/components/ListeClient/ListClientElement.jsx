import { useNavigate } from "react-router-dom";

export const ListClientElement = ({ client }) => {
  const { codcli, prenomcli, nomcli, villecli, cpcli, emailcli } = client;

  const navigate = useNavigate();

  const NAVIGATION_URL = "/client/";

  return (
    <>
      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {prenomcli + ' ' + nomcli}
        </th>
        <td className="px-6 py-4">{villecli + ' ' + cpcli}</td>
        <td className="px-6 py-4">{emailcli}</td>
        <td className="px-6 py-4">
          <button
            onClick={() => navigate(NAVIGATION_URL + codcli)}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Commandes
          </button>
        </td>
      </tr>
    </>
  );
};
