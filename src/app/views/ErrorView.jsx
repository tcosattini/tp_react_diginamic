import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorView = () => {
  const error = useRouteError();
  return <div></div>;
};

export default ErrorView;
