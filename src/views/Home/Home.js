import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home(){

const[city,setCity]=useState('yavatmal');
const[temperature,setTemperature]=useState(0)
const [message,setMessage]=useState('')

async function loadWeatherInfo(){
try{
    const response=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c`)
    setTemperature((response.data.main.temp -273).toFixed(2))
    setMessage('Data Fetched Successfully...')
}
catch(err){
    setTemperature(0)
    setMessage('City not Found')
}}
useEffect(()=>{
    loadWeatherInfo()
},[city])
    return (
        <div>
            <h1 className='app-title'>Weather For {city}</h1>

            <input 
            className='search-bar' 
            type='text' 
            placeholder='Enter city..'
            value={city}
            onChange={(e)=>{
                setCity(e.target.value)
            }}
            />
       
            <p className='message-text'>{message}</p>
       <h1 className='temperature-text'>Temperature:{temperature}°C</h1>
        </div>
    )
}

export default Home