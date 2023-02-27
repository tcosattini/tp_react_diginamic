import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MainLayout } from '../components/layout';
import { ClientService } from '../services';

const HomeView = () => {
  const clients = useLoaderData();

  return (
    <MainLayout>
      <div className="home-view">{displayClients(clients)}</div>
    </MainLayout>
  );
};

HomeView.loader = () => {
  return ClientService().fetchAll(1);
};

const displayClients = (clients) => {
  return clients.map((client) => {
    return (
      <div
        key={client.id}
        className="client"
      >
        <h3>{client.nom}</h3>
        <p>{client.prenom}</p>
      </div>
    );
  });
};

export default HomeView;
