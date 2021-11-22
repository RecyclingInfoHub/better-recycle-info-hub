import React from "react";
import { InfoWindow } from "@react-google-maps/api";

const InfoWindowWrapper = ({
  options,
  anchor,
  position,
  children,
  onLoad,
  onClick,
}) => (
  <InfoWindow
    options={options}
    anchor={anchor}
    position={position}
    onLoad={onLoad}
    onClick={onClick}
  >
    <div style={{ padding: 5 }}>{children}</div>
  </InfoWindow>
);

export default InfoWindowWrapper;
