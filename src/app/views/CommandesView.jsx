import React from 'react';
import { ListeCommandes } from '../components';
import { MainLayout } from '../components/layout';

const CommandesView = () => {
  return (
    <MainLayout>
      <div className="home-view">
      <ListeCommandes />,
      </div>
    </MainLayout>
  );
};

export default CommandesView;
