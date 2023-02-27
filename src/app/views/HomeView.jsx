import React from 'react';
import { MainLayout } from '../components/layout';
import { CommandeService } from '../services';

const HomeView = () => {
  const service = CommandeService();
  return <MainLayout></MainLayout>;
};

export default HomeView;
