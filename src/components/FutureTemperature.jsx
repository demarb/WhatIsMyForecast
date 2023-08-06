import React from 'react'

export default function FutureTemperature(props) {
  //Error check
  if (!props.future_weather){
    return(
      <div className='bg-green-400 rounded-xl px-5'>...Loading</div>
    )
  }


  const min_temp = props.future_weather.temperature_2m_min[1]
  const max_temp = props.future_weather.temperature_2m_max[1]


  return (
    <div className='flex flex-col justify-evenly bg-blue-100 rounded-xl px-5 my-5 w-full h-52 md:w-5/12 md:mx-4 lg:w-1/4'>

      <h2 className='text-center text-2xl'>Temperature Tomorrow</h2>

      <h3><span className='font-bold'>Minimum (&deg;C) : </span>{min_temp}</h3>
      <h3><span className='font-bold'>Maximum (&deg;C) : </span>{max_temp}</h3>

    </div>
  )
}
