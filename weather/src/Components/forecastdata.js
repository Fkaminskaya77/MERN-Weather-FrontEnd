import React from "react";
import './forecastdata.css';

function Forecast({forecast}) {

    if (forecast.length === 0) {
      return <div className="forecast-data">Loading forcast weather for city...</div>;
        
      }
    
      return(
        <div className="forecast-container">
        <div className="forecast-scroll">
      <div className="forecast-data">
      {forecast.map((day) => {
        return (
          <div key={day.date}>
            <h5 className="day-title">Date: {day.date}</h5>
            <img className="icon" src={`http:${day.day.condition.icon}`} alt={day.day.condition.text} />
            <p>Max Temperature: {day.day.maxtemp_f.toFixed()}°F</p>
            <p>Min Temperature: {day.day.mintemp_f.toFixed()}°F</p>
            <p>Average Temperature: {day.day.avgtemp_f.toFixed()}°F</p>
            <p>Chance of Rain: {day.day.daily_chance_of_rain.toFixed()}%</p>
            <p>Chance of Snow: {day.day.daily_chance_of_snow.toFixed()}%</p>
            <p>Condition: {day.day.condition.text}</p>
            
          </div>
        );
      })}
    </div>
    </div>
    </div>
  );
}
    
    export default Forecast;