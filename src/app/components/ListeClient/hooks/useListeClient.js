import { useState, useEffect } from "react";
import clientService from "../../../services/client.service";

export const useListeClient = () => {
  const initialState = { loading: false, error: null, list: null };
  const [data, setData] = useState(initialState);
  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(
    (data) => {
      setData(
        { ...data, loading: true },
        clientService(selectedPage)
          .fetchAll({ page: selectedPage })
          .then((response) =>
            setData({ ...data, list: response.response, loading: false })
          )
          .catch((error) => setData({ loading: false, error: error }))
      );
    },
    [selectedPage]
  );

  return {
    data,
    selectedPage,
    setSelectedPage,
  };
};
