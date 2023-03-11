import React from 'react';
import GoogleMapReact from 'google-map-react';
import { COORDINATES } from './coordinates';

export default function Map({
  apiKey,
  initStatus,
  Component,
  data,
}){
  const { center, zoom } = initStatus;

  const buildComponent = (data) => {
    const { city } = data;
    const { lat, lng } = COORDINATES[city];
    return (
      <Component
        key={ city }
        lat={ lat }
        lng={ lng }
        data={ data }
      />
    );
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
