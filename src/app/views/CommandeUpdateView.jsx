import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { MainLayout } from '../components/layout';

const CommandeUpdateView = () => {
  const commande = useLoaderData();

  return (
    <MainLayout>
      <Form
        method="post"
        action={CommandeUpdateView.action}
      >
        <input
          type="hidden"
          name="id"
          value={commande.id}
        />
        <input
          type="text"
          name="name"
          defaultValue={commande.name}
        />
        <button type="submit">Update</button>
      </Form>
    </MainLayout>
  );
};

CommandeUpdateView.loader = ({ params }) => {
  return params.commande;
};

CommandeUpdateView.action = ({ request }) => {
  return null;
};

export default CommandeUpdateView;
