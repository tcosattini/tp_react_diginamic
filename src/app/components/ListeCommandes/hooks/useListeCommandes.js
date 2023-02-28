import { useEffect, useState } from 'react';
import commandeService from '../../../services/commande.service';

export const useListeCommandes = () => {
  const initialState = { loading: false, error: null, list: null };
  const [data, setData] = useState(initialState);
  const [client, setSelectedClient] = useState(29);

  const getList = (selectedPage) => {
    setData(
      { ...data, loading: true },
      commandeService()
        .fetchClient(client)
        .then((response) =>
          setData({ ...data, list: response.response, loading: false })
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
