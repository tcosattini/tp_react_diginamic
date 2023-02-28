import React from 'react';
import { ListeCommandes } from '../components';
import { CommandesLayout } from '../components/layout';

const CommandesView = () => {
  return (
    <CommandesLayout>
      <div className="home-view">
        <ListeCommandes />
      </div>
    </CommandesLayout>
  );
};

export default CommandesView;
