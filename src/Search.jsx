import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useState } from 'react';
import "./search.css"

const Search = ({updateInfo}) => {
    const [city, setCity] = useState("");
    const [error,setError] = useState(false);

    let API_URL= 'https://api.openweathermap.org/data/2.5/weather';
    let API_KEYS= '22e4df1640dca7394e95a01e817b1d47';

    let getInfo = async() => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEYS}&units=metric`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
         let data = await response.json();
         console.log(data);
         let result = {
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            max: data.main.temp_max,
            min:data.main.temp_min,
            name: data.name,
           

         };
         console.log(result);
         return result;
        }catch( err) {
            throw err;
            
        }
    }
    


   let handleChange = (event) => {
    setCity(event.target.value);
   }

   let handleSubmit = async(e) => {
   try {
    e.preventDefault();
    console.log(city);
    let info = await getInfo();
    updateInfo(info);
   } catch(err) { setError(true)

   }
    
   }

  return (
    
    <>
    <div className='search' >
    
    <form onSubmit={handleSubmit}>
    
    <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange} /> <br />
    <Button variant="contained" type='submit'>Search</Button>
    {error && <h3>No city found</h3>
    }
    </form>
    </div>
    </>
  )
}

export default Search