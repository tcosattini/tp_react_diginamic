import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MainLayout } from '../components/layout';
import { CommandeService } from '../services';

const CommandeUpdateView = () => {
  const commandes = useLoaderData();

  return <MainLayout></MainLayout>;
};

CommandeUpdateView.loader = ({ request }) => {
  const { params } = request;

  return CommandeService().fetchClient(params.id);
};

export default CommandeUpdateView;
