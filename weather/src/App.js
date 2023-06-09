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
  const [background, setBackground] = useState('https://i.imgur.com/eSBGF86.jpg')
  
  if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
  }
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

 

  function getWeatherData() {
    const URLW = `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${cityname}`;
    fetch(URLW)
    .then((response) => response.json())
    .then((data) => {
      setWeather(data);
      const condition = data?.current?.condition?.text;
  
      if (condition === 'Sunny') {
        setBackground('https://i.imgur.com/toWqCzi.jpg');
      } else if (condition === 'Partly cloudy') {
        setBackground('https://i.imgur.com/wEsmcW2.jpg');
      } else if (condition === 'Rain') {
        setBackground('https://i.imgur.com/JbaKaSW.jpg');
      } else if (condition === 'Snow') {
        setBackground('https://i.imgur.com/WFYX1al.jpg');
      } else if (condition === 'Clear') {
          setBackground('https://i.imgur.com/6kR06wx.jpg');
      } else if (condition === 'Mist') {
            setBackground('https://i.imgur.com/likacMp.jpg');
      } else if (condition === 'Thunder outbreaks possible') {
            setBackground('https://i.imgur.com/D4v6KCK.jpg');
      } else if (condition === 'Thunder storm') {
              setBackground('https://i.imgur.com/hdr9dn7.jpg');
      }  else {
        setBackground('https://i.imgur.com/eSBGF86.jpg');

      }
      getForcastData(cityname);
      setCityName('');
    })
  
  .catch((error) => {
    console.error('Error fetching weather data:', error);
    setWeather([]);  
    setBackground('https://i.imgur.com/eSBGF86.jpg'); 
  });
  setForecast([]);
}

  
 
  function getForcastData(cityname) {
    const URLF = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${cityname}&days=7`;
    fetch(URLF)
    .then((response) => response.json())
    .then((data) => setForecast(data.forecast.forecastday))
  }
 

  function handleInputChange(event) {
    setCityName(event.target.value);
  }

  

  return (
    
    <ClerkProvider publishableKey={clerkPubKey}>
    
    <div className="app" style={{ backgroundImage: `url(${background})` }}>

    <div className='container'>
    <SignedIn>
      
      <UserButton />
      
      <User weather={weather}/>
      
      
      <div className='search'>
      <input type="text" value={cityname} onChange={handleInputChange}
      placeholder='Enter City, ZipCode or Country..'/>
      <button onClick={getWeatherData }>Search</button>
      
      </div>
      
      
      
      <Current weather={weather} />
      <Forecast forecast={forecast}/>
      <Astronomy forecast={forecast}/>
     

    </SignedIn>
    </div>
    </div>
    
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
   
   </ClerkProvider>
  
  );
}
  

export default App;
