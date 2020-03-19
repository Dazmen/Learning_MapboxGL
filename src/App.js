import React, { useState } from 'react';
import './App.css';
import Map from './compoents/map.js';
import ControlBar from './compoents/controlBar.js';


function App() {
 const [eqLayer, setEqLayer] = useState(false)
 const [control, setControl] = useState(true)

  return (
    <div className="App">
      <ControlBar 
        setEqLayer={setEqLayer} 
        eqLayer={eqLayer}
        setControl={setControl}
      />
      <Map 
        eqLayer={eqLayer}
        control={control}
        setControl={setControl}
        />
    </div>
  );
}

export default App;
