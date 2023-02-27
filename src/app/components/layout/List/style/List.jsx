import { useState, useEffect } from "react";
import { useList } from "../../../../Hooks/useList";

export const List = () => {
  const { data, getList } = useList(1);
  const [list, setList] = useState();

  console.log(data);

  return <div>Test</div>;
};
