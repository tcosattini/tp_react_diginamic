import React from 'react';
import { ListeCommandes } from '../components';
import { MainLayout } from '../layout';

const CommandesView = () => {
  return (
    <MainLayout>
      <ListeCommandes />
    </MainLayout>
  );
};

export default CommandesView;
