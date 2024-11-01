import React from 'react'
import Search from './Search'
import InfoBox from './InfoBox'
import { useState } from 'react'

const WeatherApp = () => {
    let [weather,setWeather]= useState({ 
        feelsLike: 24,
        humidity: 12,
        max: 25.3,
        min:20.34,
        name: "Delhi",
})

let updateInfo =(result)=> {
    setWeather(result);
}
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Search for weather Info</h1>
        < Search updateInfo={updateInfo}/>
        <InfoBox info={weather}/>
    </div>
  )
}

export default WeatherApp