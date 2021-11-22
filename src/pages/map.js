import React from "react";
import Layout from "../components/layouts/AppLayout";
import MapContainer from "../components/MapContainer";

const Map = ({ location }) => (
  <Layout location={location}>
    <MapContainer />
  </Layout>
);

export default Map;
