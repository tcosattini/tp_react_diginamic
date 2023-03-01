import React from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';
import { CommandeDto } from '../../models';
import { CommandeService } from '../../services';
import './CommandeUpdateForm.css';

const CommandeUpdateForm = ({ commande }) => {
  const navigate = useNavigate();

  const handleCancel = () => navigate(`/client/${commande.codcli_id}`);

  return (
    <div className="flex flex-col w-full h-full commande-update-form">
      <Form
        className="flex flex-col items-center justify-center w-4/5 mx-auto my-10"
        method="PUT"
        action={`/client/${commande.codcli_id}`}
      >
        {buildInput(
          'datcde',
          'Date de commande',
          commande.datcde,
          'datetime-local'
        )}
        {buildInput('timbrecli', 'Timbre client', commande.timbrecli)}
        {buildInput('timbrecde', 'Timbre commande', commande.timbrecde)}
        {buildInput('nbcolis', 'Nombre de colis', commande.nbcolis)}
        {buildTextArea('cdecomt', 'Commande commentaire', commande.cdecomt)}
        {buildHiddenInputs(commande)}
        <div className="flex justify-end w-full m-1 buttons ">
          {buildButton('Modifier', 'mr-3')}
          {buildButton('Annuler', 'mr-1', 'reset', handleCancel)}
        </div>
      </Form>
      <div className="flex flex-wrap items-center justify-center details grow">
        {commande.details.map((detail) => (
          <div key={detail.id_dtl_commande}></div>
        ))}
      </div>
    </div>
  );
};

CommandeUpdateForm.action = ({ params, request }) => {
  request.formData().then((entries) => {
    const commande = new CommandeDto(Object.fromEntries(entries));
    console.log(commande);
    CommandeService().update(commande.codcde, Object.fromEntries(entries));
  });

  return redirect(`/client/${params.client}`);
};

export default CommandeUpdateForm;

/**
 *
 * @param {string} id
 * @param {string} type
 * @param {string} property
 * @param {string} label
 * @returns JSX.element
 */
function buildInput(
  property,
  label,
  value = '',
  type = 'text',
  hidden = false
) {
  return (
    <fieldset
      className={`flex flex-col w-full none ${property} ${hidden && 'hidden'}`}
    >
      <label
        htmlFor={property}
        className="w-full mt-4 mb-1"
      >
        {label}
      </label>
      <input
        className="w-full p-1 bg-gray-800 border-2 border-white rounded-sm dark:bg-gray-100 text-gray-50 dark:text-gray-800"
        type={type}
        name={property}
        defaultValue={value}
      />
    </fieldset>
  );
}

function buildButton(value, classes = '', type = 'submit', onClick = null) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:border-1 hover:border-gray-700 dark:hover:border-gray-50 ${classes}`}
      type={type}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

function buildTextArea(property, label, value = '') {
  return (
    <fieldset className={`flex flex-col w-full ${property}`}>
      <label
        htmlFor={property}
        className="w-full mt-4 mb-1"
      >
        {label}
      </label>
      <textarea
        className="w-full p-1 bg-gray-800 border-2 border-white rounded-sm dark:bg-gray-100 text-gray-50 dark:text-gray-800"
        name={property}
        defaultValue={value}
      />
    </fieldset>
  );
}

function buildHiddenInputs(commande) {
  return (
    <>
      {buildInput(
        'codcde',
        'Code de la commande',
        commande.codcde,
        'text',
        true
      )}
      {buildInput(
        'id_dtl_commande_id',
        'Code du detail de la commande',
        commande.id_dtl_commande_id,
        'text',
        true
      )}

      {buildInput(
        'codcli_id',
        'Code du client de la commande',
        commande.codcli_id,
        'text',
        true
      )}

      {buildInput(
        'idcondit',
        'Code du conditionnement de la commande',
        commande.details[0].produit.idcondit,
        'text',
        true
      )}

      {buildInput(
        'codcde',
        'Code de la commande',
        commande.codcde,
        'text',
        true
      )}
      {buildInput(
        'id_dtl_commande_id',
        'Code du detail de la commande',
        commande.id_dtl_commande_id,
        'text',
        true
      )}

      {buildInput(
        'codcli_id',
        'Code du client de la commande',
        commande.codcli_id,
        'text',
        true
      )}

      {buildInput(
        'idcondit',
        'Code du conditionnement de la commande',
        commande.details[0].produit.idcondit,
        'text',
        true
      )}
      {buildInput('barchive', 'Archivé', commande.barchive, 'text', true)}

      {buildInput('bstock', 'Stocké', commande.bstock, 'text', true)}
    </>
  );
}
