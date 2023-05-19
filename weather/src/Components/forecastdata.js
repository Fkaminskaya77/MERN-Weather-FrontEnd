import React from "react";

function Forecast({forecast}) {

    if (forecast.length === 0) {
        return <div>Loading forecast...</div>;
      }
    
      return (
        <div>
          <h2>Weather Forecast:</h2>
          {forecast.map((day) => (
            <div key={day.date}>
              <h3>Date: {day.date}</h3>
              <p>Max Temperature: {day.day.maxtemp_f.toFixed()}°F</p>
              <p>Min Temperature: {day.day.mintemp_f.toFixed()}°F</p>
              <p>Average Temperature: {day.day.avgtemp_f.toFixed()}°F</p>
              <p>Chance of Rain: {day.day.daily_chance_of_rain.toFixed()}%</p>
              <p>Chance of Snow: {day.day.daily_chance_of_snow.toFixed()}%</p>
              <p>Condition: {day.day.condition.text}</p>
              <img src={`http:${day.day.condition.icon}`} alt={day.day.condition.text} />
            
            <div className="astronomy">

              <p>Sunrise: {day.astro.sunrise}</p>
              <p>Sunset: {day.astro.sunset}</p>
              <p>Moonrise: {day.astro.moonrise}</p>
              <p>Moonset: {day.astro.moonset}</p>
              <p>Moon Phase: {day.astro.moon_phase}</p>
              <p>Moon Illumination: {day.astro.moon_illumination}</p>
            </div>
            </div>
          ))}
        </div>
      );
    }
    
    
    export default Forecast;