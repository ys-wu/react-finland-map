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
    city2: {
      lat: 10.89835602,
      lng: 77.01502627,
    },
  };

  const center = COODINATES.center;

  const buildComponent = (data) => {
    const { city, text } = data
    const { lat, lng } = COODINATES[city];
    return componentFactory(city, lat, lng, text);
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        { data.map((x) => buildComponent(x)) }
      </GoogleMapReact>
    </div>
  );
}
