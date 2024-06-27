import React from "react";
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () =>{
  const defaultProps = {
    center: {
      lat: 22.682980153384342,
      lng: 75.83777272511236
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <div>Maps</div>
      </GoogleMapReact>
    </div>
  );
}

export default Map;