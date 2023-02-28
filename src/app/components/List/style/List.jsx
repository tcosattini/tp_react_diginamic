import React, { useState } from 'react';
import { useList } from '../../hooks';
const List = ({ clients }) => {
  const { data, getList } = useList(1);
  const [list, setList] = useState();

  console.log(data);

  return (
    <div className="flex flex-wrap items-center justify-center w-full list">
      TEST
    </div>
  );
};

export default List;
