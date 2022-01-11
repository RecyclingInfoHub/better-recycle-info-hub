/**
 * Google Map Library used:
 * https://github.com/JustFly1984/react-google-maps-api
 *
 * Map design reference:
 * https://codesandbox.io/s/v8wv9?
 */
import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  MarkerClusterer,
} from "@react-google-maps/api";
import Pin from "./Pin";
import InfoWindow from "./InfoWindow";
import { useLocations } from "../firebase/locations";

const containerStyle = {
  height: "80vh",
  width: "100%",
};

const MALAYSIA = { lat: 4.109319, lng: 109.455474 };
// const KUALA_LUMPUR = { lat: 3.140853, lng: 101.693207 };

const options = {
  zoom: 6,
  center: MALAYSIA,
};

function Map() {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.GATSBY_MAPS_API_SECRET,
    // ...otherOptions
  });

  const [listing] = useLocations();

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markerMap, setMarkerMap] = useState({});
  const [infoOpen, setInfoOpen] = useState(false);

  // We have to create a mapping of our places to actual Marker objects
  const markerLoadHandler = (marker, { id: id }) =>
    setMarkerMap(prevState => ({ ...prevState, [id]: marker }));

  const markerClickHandler = (event, place) => {
    // Remember which place was clicked
    setSelectedPlace(place);

    // Required so clicking a 2nd marker works as expected
    if (infoOpen) {
      setInfoOpen(false);
    }

    setInfoOpen(true);

    // setCenter({ lat: place.lat, lng: place.lng });
  };

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    // const onLoad = React.useCallback(
    //   function onLoad (mapInstance) {
    //     // do something with map Instance
    //   }
    // )
    const onLoad = () => null;

    return (
      <GoogleMap
        id="recycle-hub-map"
        mapContainerStyle={containerStyle}
        options={options}
        onLoad={onLoad}
      >
        {listing && (
          <MarkerClusterer>
            {clusterer =>
              listing.map(place => (
                <Pin
                  key={place.id}
                  position={{ lat: place.lat, lng: place.lng }}
                  clusterer={clusterer}
                  onLoad={marker => markerLoadHandler(marker, place)}
                  onClick={event => markerClickHandler(event, place)}
                />
              ))
            }
          </MarkerClusterer>
        )}

        {infoOpen && selectedPlace && (
          <InfoWindow
            anchor={markerMap[selectedPlace.id]}
            onCloseClick={() => setInfoOpen(false)}
          >
            <div>
              <h3>{selectedPlace.name}</h3>
              <div>{selectedPlace.address}</div>
            </div>
          </InfoWindow>
        )}

      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  } else if (!isLoaded) {
    return <div>Loading</div>;
  } else {
    return renderMap();
  }
}

export default Map;
