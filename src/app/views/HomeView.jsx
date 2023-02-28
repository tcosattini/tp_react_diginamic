import React from 'react';
import { List } from '../components';
import { MainLayout } from '../components/layout';

const HomeView = () => {
  return (
    <MainLayout>
      <div className="home-view">
        <List />
      </div>
    </MainLayout>
  );
};

export default HomeView;
