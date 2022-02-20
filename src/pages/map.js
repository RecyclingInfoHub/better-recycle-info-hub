import React from "react";
import Layout from "../components/layouts/AppLayout";
import MapContainer from "../components/MapContainer";

const Map = ({ location }) => (
  <Layout location={location}>
    <div className="mx-auto pt-10 container">
      <MapContainer />
    </div>
  </Layout>
);

export default Map;
