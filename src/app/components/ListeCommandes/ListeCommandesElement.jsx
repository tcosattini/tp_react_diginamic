import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

import CommandeImpression from './CommandeImpression';

export const ListeCommandesElement = ({ commande }) => {
  const { codcde, datcde, timbrecli, timbrecde, nbcolis } = commande;

  const url = `/commande/${codcde}/update`;

  const componentRef = useRef();

  const navigate = useNavigate();

  return (
    <>
      <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {codcde}
        </th>
        <td className="px-6 py-4">{datcde}</td>
        <td className="px-6 py-4">{nbcolis}</td>
        <td className="px-6 py-4">{timbrecde}</td>
        <td className="px-6 py-4">{timbrecli}</td>
        <td className="px-6 py-4">
          <a
            href="."
            onClick={(e) => {
              // mea culpa j'ai change la pcq
              // a chaque fois que je cliquais
              // la page blanche me brulait les yeux T^T
              e.preventDefault();
              navigate(url);
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Modifier
          </a>
        </td>
        <td className="px-6 py-4">
          <div>
            <ReactToPrint
              trigger={() => <button>Imprimer</button>} //NOSONAR
              content={() => componentRef.current}
            />
            <CommandeImpression
              commande={commande}
              ref={componentRef}
            />
          </div>
        </td>
      </tr>
    </>
  );
};
