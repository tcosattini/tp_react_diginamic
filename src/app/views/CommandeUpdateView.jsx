import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CommandeUpdateForm } from '../components';
import { MainLayout } from '../layout';
import commandeService from '../services/commande.service';

const CommandeUpdateView = () => {
  const commande = useLoaderData();

  console.log(commande);

  return (
    <MainLayout>
      <CommandeUpdateForm commande={commande} />
    </MainLayout>
  );
};

CommandeUpdateView.loader = ({ params }) => {
  return commandeService().fetchOne(params.commande).then(unwrap);
};

function unwrap(data) {
  return data.response;
}

export default CommandeUpdateView;
