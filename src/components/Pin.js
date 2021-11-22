import React from "react";
import { Marker } from "@react-google-maps/api";

const Pin = ({ position, index, clusterer, onLoad, onClick }) => (
  <Marker
    key={index}
    position={position}
    clusterer={clusterer}
    onLoad={onLoad}
    onClick={onClick}
  />
);

export default Pin;
