import React from "react";

const OfflinePage = () => {
  return (
    <div className="flex flex-col h-96 w-full items-center justify-center">
      <h1 className="text-3xl text-green-700 font-bold">
        It seems to be Offline !
      </h1>
      <p className="text-xl font-semibold">
        Please Check Your Internet Connection
      </p>
    </div>
  );
};

export default OfflinePage;
