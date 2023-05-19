import React from "react";


function Current({ weather }) {
    
    const { location } = weather;
        if (!location) {
        return <div>Loading weather for city...</div>;
    }
    
   
    return (
        <div>
        <h2>Current Weather: {weather?.location?.name}, {weather?.location?.region}, {weather?.location?.country}</h2>
        <p>Temperature: {weather?.current?.temp_f.toFixed()} °F</p>
        <p>Condition: {weather?.current?.condition?.text} <img src={`http:${weather?.current?.condition?.icon}`} alt={weather?.current?.condition?.text} /></p>
        <p>Wind Speed: {weather?.current?.wind_mph} mph</p>
        <p>Humidity: {weather?.current?.humidity}%</p>
        <p>Cloudiness: {weather?.current?.cloud}%</p>
        <p>Localtime: {weather?.location?.localtime}</p>

      </div>
    );
  }

export default Current;