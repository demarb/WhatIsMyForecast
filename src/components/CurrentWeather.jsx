import React from 'react'
import weatherCodeData from '../weatherCodeData'

export default function CurrentWeather(props) {
  //Error check
  if (!props.current_weather){
    return(
      <div className='bg-green-400 rounded-xl px-5'>...Loading</div>
    )
  }

  const {
    temperature, weathercode
  } = props.current_weather

  const weatherCodeMeaning = weatherCodeData.map(code=>code)
  

  const Meaning = weatherCodeMeaning.find((codepair)=>codepair.code===weathercode)

  return (
    <div className='flex flex-col justify-evenly bg-blue-100 rounded-xl px-5 my-5 w-full h-52 md:w-5/12 md:mx-4 lg:w-1/4'>

      <h2 className='text-center text-2xl'>Current Weather</h2>

      <h3><span className='font-bold'>Condition : </span>{Meaning.meaning} </h3>
      <h3><span className='font-bold'>Temperature (&deg;C) : </span>{temperature}</h3>

    </div>
  )
}
