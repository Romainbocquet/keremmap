import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/css/KeHome.css'
import data from '../datas/homeData.json';
import HouseDetails from '../components/HouseDetails.jsx';

function KeHome() {
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);

  useEffect(() => {
    setHouses(data);
  }, []);

  const handleMarkerClick = (house) => {
    setSelectedHouse(house);
  };

  const closeSidebar = () => {
    setSelectedHouse(null);
  };

  return (
    <div>
      <div className="map-container">
        <MapContainer className='map' center={[48.642746, -4.251658]} zoom={14}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {houses.map((house) => (
            <Marker key={`Maison` + house.maisonId} position={[house.latitude, house.longitude]}
            eventHandlers={{
              click: () => handleMarkerClick(house)
              }}>
            </Marker>
          ))}
        </MapContainer>
        {selectedHouse && <HouseDetails house={selectedHouse} onClose={closeSidebar} />}
      </div>
    </div>
  );
}

export default KeHome;
