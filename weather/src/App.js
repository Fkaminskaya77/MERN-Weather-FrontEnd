import React from 'react';
import Current from './Components/realtimedata.js';
import Forecast from './Components/forecastData.js';

function App() {
 
 
  return (
    <div className="App">
      <div className='container'>
    <Current/>
    <Forecast/>
    </div>
    </div>
   
  );
}

export default App;
