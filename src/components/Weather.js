'use client';

import React, { useState } from 'react'
import axios from 'axios';

function Weather() {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');

    const getWeather = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b7b8f1e6f9b5d2b2c3a0d8e3b6e4e0e`);
            setWeatherData(res.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
  return (
      <>
          <input
              type='text'
              placeholder='Enter City'
              value={city}
                onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeather}>Get Weather</button>
          
          {loading && <p>Loading...</p>}
          
            {weatherData && (
                <div>
                    <h1>{weatherData.name}</h1>
                  <h2>{weatherData.weather[0].main.temp}°C</h2>
                    <h2>{weatherData.weather[0].description}</h2>
                </div>
            )}
    </>
  )
}

export default Weather