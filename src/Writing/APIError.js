import React from "react";
import Directions from "../SVGs/WomanDirections";

const APIError = () => {
  return (
    <div className="fancy-border bg-pastel-orange text-center py-5 flex items-center justify-evenly">
      <p className="w-6/12">
        <p className="font-open font-bold">OOPS,</p>
        <br></br>something went wrong with the API call. Try refreshing the
        page.
      </p>
      <Directions className="w-2/12" />
    </div>
  );
};

export default APIError;
