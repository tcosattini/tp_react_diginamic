import React from "react";
import { List } from "./List/style/List";

const MainLayout = ({ children }) => {
  return (
    <div>
      {children}
      <List />
    </div>
  );
};

export default MainLayout;
