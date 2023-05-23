import React from "react";

function Astronomy ({ forecast }) {
    if (!forecast || forecast.length === 0) { 
        return <div className="astronomy">Loading astronomy weather for city...</div>;
    }
  
    const { astro } = forecast[0];
  
    return (
      <div className="astronomy">
        <h2>Astronomy Data</h2>
        <p>Sunrise: {astro.sunrise}</p>
        <p>Sunset: {astro.sunset}</p>
        <p>Moonrise: {astro.moonrise}</p>
        <p>Moonset: {astro.moonset}</p>
        <p>Moon Phase: {astro.moon_phase}</p>
        <p>Moon Illumination: {astro.moon_illumination}</p>
      </div>
    );
  };
  
  export default Astronomy;