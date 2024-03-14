import { useState } from 'react'
import '../assets/css/Map.css'
import HouseMap from '../components/HouseMap.jsx';
import HouseDetail from '../components/HouseDetail.jsx';
import housesData from '../assets/datas/house-datas.json';

function Map() {
  const [selectedHouse, setSelectedHouse] = useState(null);

  return (
    <div>
      <HouseMap houses={housesData} onSelectHouse={setSelectedHouse} />
      <HouseDetail house={selectedHouse} />
    </div>
  );
}

export default Map;