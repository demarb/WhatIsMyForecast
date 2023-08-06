import React from 'react'
import weatherCodeData from '../weatherCodeData'

export default function Forecast(props) {
  //Error check
  if (!props.future_weather){
    return(
      <div className='bg-green-400 rounded-xl px-5'>...Loading</div>
    )
  }

  let forecasts = []
  forecasts = props.future_weather.weathercode
  forecasts = forecasts.slice(1,4)

  const weatherCodeMeaning = forecasts.map((forecast) => {
    const codePair = weatherCodeData.find((code)=> code.code===forecast)
    return codePair
  })


  return (
    <div className='flex flex-col justify-evenly bg-yellow-100 rounded-xl px-5 my-5 w-full h-52 md:w-5/12 md:mx-4 lg:w-1/4'>

      <h2 className='text-center text-2xl'>Forecast</h2>

      <h3><span className='font-bold'>Tomorrow : </span>{weatherCodeMeaning[0].meaning}</h3>
      <h3><span className='font-bold'>2 Day Outlook : </span>{weatherCodeMeaning[1].meaning}</h3>
      <h3><span className='font-bold'>3 Day Outlook : </span>{weatherCodeMeaning[2].meaning}</h3>
      {/* <h3>{Meaning.meaning} </h3>
      <h3>Temperature (&deg;C): {temperature}</h3> */}

    </div>
  )
}
