import React from "react";

import materialsJSON from "../json/materials.json";

const MapFilter = ({ materialFilterList, toggleMaterialFilterHandler }) => {
  const materials = materialsJSON.map((material) => (
    {
      label: material,
      value: material
    }
  ));

  return (
    <div tabIndex={0} className="w-4/5 p-12 mx-auto">
      {/* Stop at stylings */}
      <div className="collapse border border-base-100 rounded-box collapse-arrow">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-bold">
          Search Map
        </div>
        <div className="collapse-content">
          <input
            type="text"
            placeholder="Enter materials or location name or address to search"
            className="input w-full bg-gray-200 mb-4"
          />
          <hr />
          <div>
            <div className="text-lg fond-bold text-gray-400 mb-4">Materials</div>
            <div className="grid grid-cols-4">
              {
                materials.map(({ label, value }, index) =>
                  <label key={index}>
                    <input
                      disabled={!materialFilterList.includes(value) && materialFilterList.length >= 10}
                      type="checkbox"
                      className="checkbox checkbox-sm checkbox-primary"
                      onChange={() => toggleMaterialFilterHandler(value)}
                    />
                    <span className="ml-2">
                      {label}

                    </span>
                  </label>
                )
              }
            </div>
            <div className="w3/4 grid grid-cols-4 bg-base-100">
              {
                materialFilterList.map((filter, index) =>
                  <div key={index}>{filter}</div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapFilter;