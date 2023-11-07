//https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=9a7cb5c507870cd0efa24a867a546072

import React, { useEffect, useState } from "react";
import "./weather.css";
import "weather-icons/css/weather-icons.min.css";
import Weathercard from "./weathercard";

export const Weather = () => {
  const [searchValue, searchSetValue] = useState("pune");
  const [tempinfo, setTemoinfo] = useState({});

  const getweatherinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=9a7cb5c507870cd0efa24a867a546072`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country } = data.sys;
      const { sunset } = data.sys;

      const mynewweatherinfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTemoinfo(mynewweatherinfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getweatherinfo();
  }, []);

  return (
    <>
      <div className="main">
        <h1 className="appname"> -Weather App-</h1>

        <div className="wrap">
          <div className="maincontainer">
            <div className="search">
              <input
                type="search"
                placeholder="type city name"
                autoFocus
                id="search"
                className="searchTerm"
                value={searchValue}
                onChange={(e) => searchSetValue(e.target.value)}
              />
              <button
                className="searchButton button-90"
                type="button"
                onClick={getweatherinfo}
              >
                Search
              </button>
            </div>

            {/*  card designing*/}
            <Weathercard tempinfo={tempinfo} />
          </div>
        </div>
        <div class="wrapper">
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
          <div>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
