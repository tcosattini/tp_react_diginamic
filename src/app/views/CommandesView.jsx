import React from 'react';
import { ListeCommandes } from '../components';
import { MainLayout } from '../components/layout';

const CommandesView = () => {
  return (
    <MainLayout>
      <ListeCommandes />
    </MainLayout>
  );
};

export default CommandesView;
