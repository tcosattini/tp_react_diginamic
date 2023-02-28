import { useState, useEffect } from "react";
import clientService from "../../../services/client.service";

export const useList = () => {
  const initialState = { loading: false, error: null, list: null };
  const [data, setData] = useState(initialState);
  const [selectedPage, setSelectedPage] = useState(1);

  const getList = (selectedPage) => {
    setData(
      { ...data, loading: true },
      clientService(selectedPage)
        .fetchAll({ page: selectedPage })
        .then((response) =>
          setData({ ...data, list: response.response, loading: false })
        )
        .catch((error) => setData({ loading: false, error: error }))
    );
  };

  useEffect(() => {
    getList(selectedPage);
  }, [selectedPage]);

  return {
    data,
    getList,
    selectedPage,
  };
};
