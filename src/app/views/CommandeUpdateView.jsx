import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CommandeUpdateForm } from '../components';
import { MainLayout } from '../components/layout';
import commandeService from '../services/commande.service';

const CommandeUpdateView = () => {
  const commande = useLoaderData();

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
