import { useState, useEffect, createContext } from "react";
import clientService from "../services/client.service";

export const useList = () => {
  const initialState = { loading: false, error: null, list: null };
  const [data, setData] = useState(initialState);

  const getList = (page) => {
    setData(
      { ...data, loading: true },
      clientService()
        .fetchAll({ page })
        .then((response) =>
          setData({ ...data, list: response, loading: false })
        )
        .catch((error) => setData({ loading: false, error: error }))
    );
  };

  useEffect((page) => {
    getList(page);
  }, []);

  return {
    data,
    getList,
  };
};
