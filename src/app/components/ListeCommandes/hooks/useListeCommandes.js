import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import commandeService from '../../../services/commande.service';

export const useListeCommandes = () => {
  const initialState = { loading: false, error: null, list: null };
  const [data, setData] = useState(initialState);
  const params = useParams();
  const [client, setSelectedClient] = useState(params.client);

  const getList = () => {
    setData(
      { ...data, loading: true },
      commandeService()
        .fetchClient(client)
        .then((response) =>
          setData({ ...data, list: response, loading: false })
        )
        .catch((error) => setData({ loading: false, error: error }))
    );
  };

  useEffect(() => {
    getList(client);
  }, [client]);

  return {
    data,
    getList,
    client,
  };
};
