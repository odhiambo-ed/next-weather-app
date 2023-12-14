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
            const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a56449efdbaf78b106e83996dce7690`);
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
                  
                  <div class="weather-card">
                      <div class="search">
                          <input type="search" placeholder="enter city name" spellcheck="false"/>
                              <button>
                                  <i class="bi bi-search"></i>
                              </button>
                      </div>
                      <div class="weather">
                          <img class="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..."/>
                              <h1 class="temp">15°C </h1>
                              <h2 class="city">New York</h2>
                              <div class="details">
                                  <div style="display: flex;" class="col">
                                      <img class="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"/>
                                          <div class="info">
                                              <p class="humidity">50%</p>
                                              <p>Humidity</p>
                                          </div>
                                  </div>
                                  <div class="col">
                                      <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png"/>
                                          <div class="info">
                                              <p class="wind">15 km/h</p>
                                              <p>Wind Speed</p>
                                          </div>
                                  </div>
                              </div>
                      </div>
                  </div>
                </div>
            )}
    </>
  )
}

export default Weather