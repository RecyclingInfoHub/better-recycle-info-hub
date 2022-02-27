import * as React from "react";

import { writeBatchFromJSON as writeBatchMaterial } from "../firebase/batch/material";
import { writeBatchFromJSON as writeBatchLocation } from "../firebase/batch/location";

// Execute batch
const runBatch = async () => {
  await writeBatchMaterial();
  await writeBatchLocation();
};

const ButtonRunBatch = () => {
  return (
    <button className="btn-md btn-primary" onClick={runBatch}>Run Batch</button>
  )
};

export default ButtonRunBatch;