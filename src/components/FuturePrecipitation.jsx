import React from 'react'

export default function FuturePrecipitation(props) {
  //Error check
  if (!props.future_weather){
    return(
      <div className='bg-green-400 rounded-xl px-5'>...Loading</div>
    )
  }


  const total_precip = props.future_weather.precipitation_sum[1]


  return (
    <div className='flex flex-col justify-evenly bg-blue-100 rounded-xl px-5 my-5 w-full h-52 md:w-5/12 md:mx-4 lg:w-1/4'>

      <h2 className='text-center text-2xl'>Precipitation Tomorrow</h2>

      <h3><span className='font-bold'>Expected (mm) : </span>{total_precip}</h3>
      <h3><span className='italic'>*Total Rain, Snow and Shower</span></h3>

    </div>
  )
}
