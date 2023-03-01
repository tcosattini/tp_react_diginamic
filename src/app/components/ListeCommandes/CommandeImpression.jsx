import React from 'react';

class CommandeImpression extends React.Component {
  render() {
    const commande = this.props.commande;
    console.log(commande)
    return (
      <div className='print-source'>
        <h1 style={{ fontSize: 40 }}>Commande</h1>
        <br />
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
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {commande.codcde}
              </th>
              <td className="px-6 py-4">{commande.datcde}</td>
              <td className="px-6 py-4">{commande.nbcolis}</td>
              <td className="px-6 py-4">{commande.timbrecde}</td>
              <td className="px-6 py-4">{commande.timbrecli}</td>
            </tr>
          </tbody>
        </table>
        <br /><br />
        <h1 style={{ fontSize: 40 }}>Détails de la commande</h1>
        <br />
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Produit
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Poids
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Taille
              </th>
              <th
                scope="col"
                className="px-6 py-3"
              >
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            {commande.details?.map((produit) => (
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{produit.produit.libobj}</td>
                <td className="px-6 py-4">{produit.produit.poidsobj}</td>
                <td className="px-6 py-4">{produit.produit.tailleobj}</td>
                <td className="px-6 py-4">{produit.produit.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default CommandeImpression;