import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { List } from '../components';
import { MainLayout } from '../components/layout';
import { ClientService } from '../services';

const HomeView = () => {
  const clients = useLoaderData();

  return (
    <MainLayout>
      <div className="home-view">
        <List clients={clients} />
      </div>
    </MainLayout>
  );
};

// This function is used by the useLoaderData hook when accessing the component
HomeView.loader = () => {
  return ClientService().fetchAll(1);
};

export default HomeView;
