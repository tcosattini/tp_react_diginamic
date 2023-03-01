import React from 'react';
import { Form } from 'react-router-dom';
import { Commande } from '../../models/commande.model';
import { CommandeService } from '../../services';
import './FormCreateCommandClient.css';

const FormCreateCommandClient = () => {
  const argList = {
    names: [
      'datcde',
      'codcli_id',
      'timbrecli',
      'timbrecde',
      'nbcolis',
      'cheqcli',
      'idcondit',
      'cdecomt',
      'barchive',
      'bstock',
      'id_dtl_commande_id',
    ],
    type: [
      'text',
      'number',
      'number',
      'number',
      'number',
      'number',
      'number',
      'number',
      'number',
      'checkbox',
      'number',
    ],
  };

  return (
    <Form onSubmit={(event) => postCommandClient(argList.names, event)}>
      {argList.names.map((name, index) => (
        <div key={`${name}-div`}>
          <label
            htmlFor={name}
            key={`${name}-label`}
          >
            {name} :
          </label>
          <input
            type={argList.type[index]}
            name={name}
            key={name}
            placeholder={name}
          />
        </div>
      ))}
      <button
        type="submit"
        className="buttonCreate"
      >
        Create
      </button>
    </Form>
  );
};

const postCommandClient = (argListNames, event) => {
  const command = new Commande();
  for (const index in argListNames) {
    command[argListNames[index]] = event.target[index].value;
  }
  CommandeService().create(command);
};

export default FormCreateCommandClient;
