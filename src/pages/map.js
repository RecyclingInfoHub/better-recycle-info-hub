import React, { useState } from "react";

// Components
import Layout from "../components/layouts/AppLayout";
import MapFilter from "../components/MapFilter";
import MapContainer from "../components/MapContainer";

const Map = ({ location }) => {

  const [materialFilterList, setMaterialFilterList] = useState([]);

  const toggleMaterialFilterHandler = (material) => {
    let updatedMaterialFilter = [...materialFilterList];
    const index = materialFilterList.indexOf(material);

    if (materialFilterList.length === 0 || index === -1) {
      updatedMaterialFilter = [...updatedMaterialFilter, material];
    } else {
      updatedMaterialFilter = materialFilterList.filter((filter) => (filter !== material));
    }

    setMaterialFilterList(updatedMaterialFilter);
  }

  return (
    <Layout location={location}>
      <MapFilter
        materialFilterList={materialFilterList}
        toggleMaterialFilterHandler={toggleMaterialFilterHandler}
      />
      <div className="mx-auto pt-10 container">
        <MapContainer materialFilterList={materialFilterList} />
      </div>
    </Layout>
  )
};

export default Map;
