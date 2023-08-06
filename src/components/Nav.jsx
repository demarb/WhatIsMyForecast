import React from 'react'

export default function Nav(props) {


    if(props.latitude && props.longitude){
      return (

      <nav className='bg-emerald-600'>
         <h1 className='text-white text-center p-3 text-3xl'>What Is My Forecast?</h1>
         <h1 className='text-white text-center p-3 text-xl'>Lat: {props.latitude} Lon: {props.longitude}</h1>
     </nav>
        
      )
    }

    return(
      <nav className='bg-emerald-600'>
        <h1 className='text-white text-center p-3 text-3xl'>What Is My Forecast?</h1>
        <h1 className='text-red-700 text-center p-3 text-xl'>Location Undetected-Fallback: KGN, JM</h1>
      </nav>
    )

  
}
