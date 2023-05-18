import React, { useEffect,useState } from 'react';
import Current from './Components/realtimedata.js';
import Forecast from './Components/forecastdata.js';



function App() {
  const [weather, setWeather] = useState([])
  const [cityname, setCityName] = useState('')
  
  // const URLF = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=denver&days=7`;
  
  
  function getWeatherData() {
    const URLW = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityname}`;
    fetch(URLW)
    .then((response) => response.json())
    .then((data) => setWeather(data))
    setCityName('');
  }
  console.log(weather)
 
  
  function handleInputChange(event) {
    setCityName(event.target.value);
  }
 

  return (
    <div className="App">
      <div className='container'>
       </div>
      <div className='search'>
      <input type="text" value={cityname} onChange={handleInputChange}
      placeholder='Enter City or Country..'/>
      <button onClick={getWeatherData}>Search</button>
      </div>
      
        
    <Current weather={weather} />
    <Forecast/>
    
    </div>
   
   
  );
}

export default App;
