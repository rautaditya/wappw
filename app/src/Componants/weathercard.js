
import React, { useEffect, useState } from 'react';

const Weathercard = ({tempinfo}) => {
  const[weatherState,setweatherState]=useState("");

  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  }=tempinfo;
  useEffect(()=>{
    if(weathermood)
    {
      switch(weathermood)
      {
        case "Clouds":
           setweatherState("wi-day-cloudy");
          break;
          case "Haze":
           setweatherState("wi-fog");
          break;
          case "Clear":
           setweatherState("wi-day-sunny");
          break;
          case "Mist":
           setweatherState("wi-dust ");
          break;
          default:
            setweatherState("wi-day-sunny");

            break
      }
    }
  },[weathermood]);

  let sec=sunset;
  let date=new Date(sec*1000);
  let newtime=`${date.getHours()}:${date.getMinutes()}`;


  return (
    <>
      <article className='widset'>
        <div className='weathericon'>
          <i className= {`wi ${weatherState} mainicon`}></i>
        </div>
        <div className='weatherinfo'>
          <div className='tempreture'>
            <span className='temp'>{temp}&deg;</span>
          </div>
          <div className='description'>
            <div className='weathercondition'><b>{weathermood}</b></div>
            <div className='place'>
              {name}, {country}
            </div>
          </div>
          <div className='date'>{new Date().toLocaleString()}</div>
        </div>
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p className='iconinfo'><i className={"wi wi-sunset sicons iconinfo"}></i></p>
              <p className='extra-info-leftside'>
                {newtime} PM<br></br>
                sunset
              </p>
            </div>
            <div className='two-sided-section'>
              <p className='iconinfo'><i className={"wi wi-rain sicons iconinfo"}></i></p>
              <p className='extra-info-leftside'>
                {humidity} <br></br>
                Humidity
              </p>
            </div>
          </div>
          <div className='weather-extra-info'>
            <div className='two-sided-section'>
              <p className='iconinfo'><i className={"wi wi-time-2 iconinfo"}></i></p>
              <p className='extra-info-leftside'>
                {pressure} <br></br>
                Pressure
              </p>
            </div>
            <div className='two-sided-section'>
              <p className='iconinfo'><i className={"wi wi-strong-wind sicons iconinfo"}></i></p>
              <p className='extra-info-leftside'>
                {speed} <br></br>
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weathercard;
