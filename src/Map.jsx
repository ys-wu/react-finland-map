import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map({
  apiKey,
  zoom,
  componentFactory,
  data,
}){
  const COODINATES = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    city1: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
  };

  const center = COODINATES.center;
  const { city, text } = data[0]
  const { lat, lng } = COODINATES[city];

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        { componentFactory(lat, lng, text)}
      </GoogleMapReact>
    </div>
  );
}
