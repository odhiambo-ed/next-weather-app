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
            <div className="weather-card">
                <div className="search">
                    <input
                        type="search"
                        placeholder="Enter city name"
                        spellcheck="false"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button onClick={getWeather} className='flex justify-center items-center'>
                        <CiSearch className='text-[20px] text-gray-500' />
                    </button>
                </div>
                <div className="weather">
                    <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="..." />

                    {loading && <p>Loading...</p>}

                    {weatherData && (
                    //   <div className='flex flex-col justify-center items-center'>
                    //       <h1>{weatherData.name} City</h1>
                    //       <h1>{weatherData.main.temp.toFixed(0)}°C</h1>
                    //       <h2 className='capitalize'>{weatherData.weather[0].description}</h2>
                    //       <p>Humidity: {weatherData.main.humidity}%</p>
                    //       <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    //   </div>

                        <div>
                            <h1 className="temp">{weatherData.main.temp.toFixed(0)}°C</h1>
                            <h2 className="city">{weatherData.name}</h2>
                            <div className="details">
                                <div style={{ "display": "flex" }} classNameName="col">
                                    <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" />
                                    <div className="info">
                                        <p className="humidity">{weatherData.main.humidity}%</p>
                                        <p>Humidity</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <img src="https://cdn-icons-png.flaticon.com/512/136/136712.png" />
                                    <div className="info">
                                        <p className="wind">{weatherData.wind.speed} m/s</p>
                                        <p>Wind Speed</p>
                                    </div>
                                </div>
                            </div>
                      </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Weather