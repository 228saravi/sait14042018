import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 53.902429, lng: 30.338885 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        
      }}
    >
      <Marker position={{ lat: 53.902429, lng: 30.338885 }} />
    </GoogleMap>
  ))
);

function Maps({ ...props }) {
  return (
    <CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDzaOm_m8RwN_dM7xzTx-HZAvLu0hnN_B4"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;