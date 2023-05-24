import React from "react";


function Current({ weather }) {
    
    const { location } = weather;
        if (!location) {
        return <div className="current">Loading weather for city...</div>;
    }
    
    let date = String(new window.Date())
    date = date.slice(3,15)
   
    return (
        <div className="current">
        <h3>Current Weather:{date} </h3>
        <p><img src={`http:${weather?.current?.condition?.icon}`} alt={weather?.current?.condition?.text} /></p>
        <p>Condition: {weather?.current?.condition?.text} </p>
        <p>Temperature: {weather?.current?.temp_f.toFixed()} °F</p>
        <p>Wind Speed: {weather?.current?.wind_mph} mph</p>
        <p>Humidity: {weather?.current?.humidity}%</p>
        <p>Cloudiness: {weather?.current?.cloud}%</p>
        

      </div>
    );
  }

export default Current;