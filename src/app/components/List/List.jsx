import React, { useState } from "react";
import { useList } from "./hooks/useList";
const List = () => {
  const { data } = useList();

  return (
    <div className="flex flex-wrap items-center justify-center w-full list"></div>
  );
};

export default List;
