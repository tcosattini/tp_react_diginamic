import React from 'react';
import { ListeClient } from "../components";
import { MainLayout } from '../components/layout';

const HomeView = () => {
  return (
    <MainLayout>
      <div className="home-view">
        <ListeClient />
      </div>
    </MainLayout>
  );
};

export default HomeView;
