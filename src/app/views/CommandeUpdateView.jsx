import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { MainLayout } from '../components/layout';
import commandeService from '../services/commande.service';

const CommandeUpdateView = () => {
  const commande = useLoaderData();

  return (
    <MainLayout>
      <Form
        method="post"
        action={CommandeUpdateView.action}
        className="flex flex-col w-full commande-update-form "
      >
        {unbox(commande)}
        <button type="submit">Update</button>
      </Form>
    </MainLayout>
  );
};

CommandeUpdateView.loader = ({ params }) => {
  return commandeService().fetchOne(params.commande).then(unwrap);
};

function unbox(object) {
  return Object.entries(object).map(([key, value]) => (
    <label
      htmlFor={key}
      key={key}
      className="flex"
    >
      {key}
      <input
        className="ml-5 grow"
        type="input"
        name={key}
        defaultValue={value}
      />
    </label>
  ));
}

function unwrap(response) {
  return response.data;
}

export default CommandeUpdateView;
