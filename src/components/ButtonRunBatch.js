import React, { useState } from "react";

import { writeBatchFromJSON as writeBatchMaterial } from "../firebase/batch/material";
import { writeBatchFromJSON as writeBatchLocation } from "../firebase/batch/location";

const ButtonRunBatch = () => {
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  // Execute batch
  const runBatch = async () => {
    try {
      setIsLoading(true);
      await writeBatchMaterial();
      await writeBatchLocation();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const Spinner = () => {
    if (isLoading) {
      return (
        <div className="animate-spin inline-block ml-1 w-4 h-4 border-1 rounded-full border-base-200">
          {/* <span className="visually-hidden">Loading...</span> */}
        </div>
      )
    }
  };

  return (
    <button className="btn-md btn-primary" onClick={runBatch}>
      Run Batch
      {/* Bugged, spinner not showing */}
      <Spinner />
    </button>
  )
};

export default ButtonRunBatch;