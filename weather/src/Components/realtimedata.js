import React from "react";


function Current({weather}) {

    const { location, current } = weather;
    const { name, region, country } = location;
    const { last_updated, temp_f, condition, wind_mph, humidity, cloud } = current;
  
    return (
      <div>
        <h2>Current Weather for {name}, {region}, {country}</h2>
        <p>Last Updated: {last_updated}</p>
        <p>Temperature: {temp_f} °F</p>
        <p>Condition: {condition.text}</p>
        <p>Wind Speed: {wind_mph} mph</p>
        <p>Humidity: {humidity}%</p>
        <p>Cloudiness: {cloud}%</p>
      </div>
    );
  }

  
  
  
  
  
  
  

export default Current;