import React from "react";
import { useRouteError } from "react-router";

export const ErrorMessage = () => {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h1>{error.data}</h1>
      <h2>{error.status}</h2>
    </div>
  );
};
