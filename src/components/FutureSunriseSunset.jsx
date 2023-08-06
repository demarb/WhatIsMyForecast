import React from 'react'

export default function FutureSunriseSunset(props) {
  //Error check
  if (!props.future_weather){
    return(
      <div className='bg-green-400 rounded-xl px-5'>...Loading</div>
    )
  }


  let sunrise = props.future_weather.sunrise[1]
  let sunset = props.future_weather.sunset[1]

  const sunrise_dateObj = new Date(sunrise);
  const sunset_dateObj = new Date(sunset);
  
  sunrise = sunrise_dateObj.toLocaleString(undefined, { timeStyle: "short" })
  sunset = sunset_dateObj.toLocaleString(undefined, { timeStyle: "short" })


  return (
    <div className='flex flex-col justify-evenly bg-yellow-100 rounded-xl px-5 my-5 w-full h-52 md:w-5/12 md:mx-4 lg:w-1/4'>

      <h2 className='text-center text-2xl'>Sunrise/Sunset Tomorrow</h2>

      <h3><span className='font-bold'>Sunrise (America/Jamaica) : </span>{sunrise}</h3>
      <h3><span className='font-bold'>Sunset (America/Jamaica) : </span>{sunset}</h3>

    </div>
  )
}
