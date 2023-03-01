import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import commandeService from '../../../services/commande.service';

export const useListeCommandes = () => {
  const initialState = { loading: false, error: null, list: null };
  const [data, setData] = useState(initialState);
  const params = useParams();
  const [client, setClient] = useState(params.client);

  useEffect(
    (data) => {
      setData(
        { ...data, loading: true },
        commandeService()
          .fetchClient(client)
          .then((response) =>
            setData({ ...data, list: response, loading: false })
          )
          .catch((error) => setData({ loading: false, error: error }))
      );
    },
    [client]
  );

  return {
    data,
    client,
    setClient,
  };
};
