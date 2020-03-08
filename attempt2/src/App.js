import React, {useState} from 'react';
import logo from './logo.svg';
import ReactMapGL, {Marker} from "react-map-gl";
import cases from "./cases.json";
import pinpoint from "./pinpoint.svg";
import target from "./target.png";
import death from "./deathsjson.json";
import ilCases from "./ilCases.png";
import Navbar from './Components/navbar';

import './App.css';



const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWhwb2JsZXQiLCJhIjoiY2s3aHhmcHpqMDMxejNscnd4bTBrMDNkbCJ9.8sCFpEoGyOUfILX48Xcprg';
function App() {
  const [viewport, setViewport] = useState({
    latitude: 30.5928,
    longitude: 114.3055,
    width: '100vw',
    height: '100vh',
    zoom: 10
  })
  
  return (
    <div className="App">
      <header className="App-header">
       
   
          <ReactMapGL {...viewport} mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
            mapStyle="mapbox://styles/mhpoblet/ck7itbufl64tk1iqtrf1aghl9"
            onViewportChange={(viewport) => {setViewport(viewport);
            }}
          >
            {cases.map(({Lat,Long}) => (
              <Marker key="case.Province/State" 
                latitude={Lat}
                longitude={Long}
              >
                <button>
                  { <img src={ilCases} alt="icon" className="target"/> }
                </button>
              </Marker>
            ))}
            
          </ReactMapGL>
          
      </header>
    </div>
  );
}

export default App;
