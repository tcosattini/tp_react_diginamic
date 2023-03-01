import React from 'react';
import { Form, redirect } from 'react-router-dom';
import './CommandeUpdateForm.css';


const CommandeUpdateForm = ({ commande }) => {
  return (
    <div className="flex flex-col w-full h-full commande-update-form">
      {buildForm(commande)}
      {showDetails(commande.details)}
    </div>
  );
};

CommandeUpdateForm.action = ({ params, request }) => {
  request.formData().then((data) => {
    console.log(data);
  });

  redirect(`/client/${params.codcli_id}`);
};

export default CommandeUpdateForm;

function buildForm(commande) {
  return (
    <Form
      className="flex flex-col items-center justify-center w-4/5 mx-auto my-10"
      method="PUT"
      action={`/client/${commande.codcli_id}`}
    >
      {buildInputField(
        "datcde",
        "datetime-local",
        commande.datcde,
        "Date de commande"
      )}
      {buildInputField(
        "timbrecli",
        "text",
        commande.timbrecli,
        "Timbre client"
      )}
      {buildInputField(
        "timbrecde",
        "text",
        commande.timbrecde,
        "Timbre commande"
      )}
      {buildInputField("nbcolis", "text", commande.nbcolis, "Nombre de colis")}
      {buildInputField(
        "cdecomt",
        "text",
        commande.cdecomt,
        "Commande commentaire"
      )}
    </Form>
  );
}

/**
 *
 * @param {string} id
 * @param {string} type
 * @param {string} property
 * @param {string} label
 * @returns JSX.element
 */
function buildInputField(id, type, property, label) {
  return (
    <fieldset className="flex flex-col w-full nbcolis">
      <label htmlFor={id} className="w-full mt-4 mb-1">
        {label}
      </label>
      <input
        className="w-full p-1 bg-gray-800 border-2 border-white rounded-sm text-gray-50 dark:bg-gray-50 dark:text-gray-800"
        type={type}
        name={id}
        defaultValue={property}
      />
    </fieldset>
  );
}

function buildSubmitButton(value) {
  return (
    <button
      className="w-full p-2 mt-4 text-white bg-gray-800 rounded-sm"
      type="submit"
    >
      {value}
    </button>
  );
}


function showDetails(details) {
  return (
    <div className="flex flex-wrap items-center justify-center details grow">
      {details.map((detail) => (
        <div key={detail.id_dtl_commande}>DETAILS</div>
      ))}
    </div>
  );
}
