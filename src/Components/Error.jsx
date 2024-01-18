import React from "react";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col h-96 items-center justify-center">
      <h1 className="text-3xl text-red-800 font-bold">{error.status}</h1>
      <p className="text-xl font-semibold">{error.data}</p>

      <button
        className=" border my-4 bg-gray-100 hover:bg-gray-300"
        onClick={() => {
          goBack();
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
