'use client';

import React, { useState } from 'react'
import axios from 'axios';
import { CiSearch } from "react-icons/ci";

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

          <div className="weather-card">
              <div className="search">
                  <input type="search" placeholder="enter city name" spellcheck="false" />
                  <button className='flex justify-center items-center'>
                      <CiSearch className='text-[20px] text-gray-500'/>
                  </button>
              </div>
              <div className="weather">
                  <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />
                  <h1 className="temp">15°C </h1>
                  <h2 className="city">New York</h2>
                  <div className="details">
                      <div style={{ "display": "flex" }} classNameName="col">
                          <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" />
                          <div className="info">
                              <p className="humidity">50%</p>
                              <p>Humidity</p>
                          </div>
                      </div>
                      <div className="col">
                          <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" />
                          <div className="info">
                              <p className="wind">15 km/h</p>
                              <p>Wind Speed</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
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