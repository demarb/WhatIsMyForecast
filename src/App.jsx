import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import FutureTemperature from './components/FutureTemperature'
import FutureSunriseSunset from './components/FutureSunriseSunset'
import FuturePrecipitation from './components/FuturePrecipitation'
import FutureWindspeed from './components/FutureWindspeed'

function App() {
  
  //States
  const [weatherData, setWeatherData] = useState({})

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  if ("geolocation" in navigator) {
    // Geolocation is available
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      },
      error => {
        console.log("Error getting geolocation:", error.message);
      }
    );
  } else {
    // Geolocation is not available in this browser
    console.log("Geolocation is not available");
  }




  // Effects
  useEffect(()=>{
    const ApiCall = async ()=>{
      let res;
      if(!latitude || !longitude){
        res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=17.997&longitude=-46.7936&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto")
      }else{
        res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,windspeed_10m_max&current_weather=true&timezone=auto`)
      }
      const res_json = await res.json()
      setWeatherData(res_json)
    }

    ApiCall()
  }, [longitude, latitude])



  return (


    <>
      
      <Nav latitude={latitude} longitude={longitude}/>

      <section className='flex flex-wrap p-5 justify-center'>
        <CurrentWeather current_weather={weatherData.current_weather} />
        <Forecast future_weather={weatherData.daily} />
        <FutureTemperature future_weather={weatherData.daily} />
        <FutureSunriseSunset future_weather={weatherData.daily} />
        <FuturePrecipitation future_weather={weatherData.daily} />
        <FutureWindspeed future_weather={weatherData.daily} />
      </section>
    </>
  )
}

export default App
