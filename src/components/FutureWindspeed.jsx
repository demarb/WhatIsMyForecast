import React from 'react'

export default function FutureWindspeed(props) {
  //Error check
  if (!props.future_weather){
    return(
      <div className='bg-green-400 rounded-xl px-5'>...Loading</div>
    )
  }


  const total_windspeed = props.future_weather.windspeed_10m_max[1]


  return (
    <div className='flex flex-col justify-evenly bg-yellow-100 rounded-xl px-5 my-5 w-full h-52 md:w-5/12 md:mx-4 lg:w-1/4'>

      <h2 className='text-center text-2xl'>Windspeed Tomorrow</h2>

      <h3><span className='font-bold'>Expected (km/h) : </span>{total_windspeed}</h3>

    </div>
  )
}
