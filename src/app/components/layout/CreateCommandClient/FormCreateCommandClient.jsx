import React from 'react';
import { Form } from 'react-router-dom';
import './FormCreateCommandClient.css';
import axios from 'axios';
import { Commande } from '../../../models/commande.model';
import { CommandeService } from '../../../services'

const FormCreateCommandClient = () => {

  const argList = {
    names : ["datcde", "codcli_id", "timbrecli", "timbrecde", "nbcolis", "cheqcli", "idcondit", "cdecomt", "barchive", "bstock", "id_dtl_commande_id"],
    type : ["text", "number", "number", "number", "number", "number", "number", "number", "number", "checkbox", "number"]
  };

  return (
    <Form onSubmit={(event) =>postCommandClient(argList.names, event)}>
      {argList.names.map((name, index) =>
        <div key={`${name}-div`}>
          <label htmlFor={name} key={`${name}-label`} >{name} :</label>
          <input type={argList.type[index]} name={name} key={name} placeholder={name} />
        </div>
      )}
        <button type="submit" className='buttonCreate'>Create</button>
    </Form>
  );
};

const postCommandClient = (argListNames, event) => {
  // console.log(event.target[0].value);
  console.log(argListNames.names);
  const command = new Commande();
  // for (let i = 0; i < event.target.length-1; i++) {
  //   const element = event.target[i].value;
  //   console.log(element)
  // }
  for (const index in argListNames) {
    command[argListNames[index]] = event.target[index].value;
  }
  console.log(command);
  CommandeService().create(command);
}

export default FormCreateCommandClient;
