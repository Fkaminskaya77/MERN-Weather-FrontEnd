import React, { useState } from 'react';
import './App.css';
import Current from './Components/realtimedata.js';
import Forecast from './Components/forecastdata.js';
import Astronomy from './Components/astronomy.js';
import User from './Components/user.js';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn,
} from "@clerk/clerk-react";


 
function App() {
  const [weather, setWeather] = useState([])
  const [cityname, setCityName] = useState('')
  const [forecast, setForecast] = useState([])
  
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

 

  function getWeatherData() {
    const URLW = `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityname}`;
    fetch(URLW)
    .then((response) => response.json())
    .then((data) => setWeather(data))
    getForcastData(cityname)
    setCityName('');
  }
  console.log(weather)
 
  function getForcastData(cityname) {
    const URLF = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${cityname}&days=7`;
    fetch(URLF)
    .then((response) => response.json())
    .then((data) => setForecast(data.forecast.forecastday))
  }
  console.log(forecast)

  function handleInputChange(event) {
    setCityName(event.target.value);
  }



  return (
    
    <ClerkProvider publishableKey={clerkPubKey}>


    <div className='container'>
    <SignedIn>
      
      <UserButton />
      
      <User/>
      
      
      <div className='search'>
      <input type="text" value={cityname} onChange={handleInputChange}
      placeholder='Enter City or Country..'/>
      <button onClick={getWeatherData }>Search</button>
      </div>
      
      
      
      <Current weather={weather} />
      <Forecast forecast={forecast}/>
      <Astronomy forecast={forecast}/>
     

    </SignedIn>
    </div>
    
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
   
   </ClerkProvider>
  
  );
}
  

export default App;
