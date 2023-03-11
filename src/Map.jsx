import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map({
  apiKey,
  zoom,
  // componentFactory,
  Component,
  data,
}){
  const COODINATES = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
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
    let propObj = data;
    const coodinate = COODINATES[propObj.city];
    propObj = { ...propObj, ...coodinate}
    return (
      <Component
        key={propObj.city}
        propObj={ propObj }
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
