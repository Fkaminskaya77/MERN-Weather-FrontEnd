import React, { useEffect,useState } from 'react';
import Current from './Components/realtimedata.js';
import Forecast from './Components/forecastdata.js';


function App() {
  const [cityname, setCityName] = useState([])
  const URLW = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=denver`;
  // const URLF = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=denver&days=7`;
  
  
  function getCityName() {
    fetch(URLW)
    .then((response) => response.json())
    .then((data) => setCityName(data))
  }
  useEffect(getCityName,[]);
  console.log(cityname)


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
