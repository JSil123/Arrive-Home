import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ userLocation, aiLocation }) => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const userMarker = L.marker(userLocation).addTo(map).bindPopup('You');
    const aiMarker = L.marker(aiLocation).addTo(map).bindPopup('AI');

    return () => {
      map.remove();
    };
  }, [userLocation, aiLocation]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default Map
