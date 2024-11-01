import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import "./infobox.css"

import Typography from '@mui/material/Typography';

const InfoBox = ({info}) => {
    
   let hot ="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=TrdzfkrLvvrvp5CWEqh5C2DNS13jrgLo849g6T583So=";
   let cool ="https://media.istockphoto.com/id/929654528/photo/wintery-scene-of-a-man-with-furry-and-full-beard-shivering-in-a-snow-storm.webp?a=1&b=1&s=612x612&w=0&k=20&c=UsNUwEDjD0IUP2TkxUkZ8YNsiahwvDDMUGKv1UXtJso=";
   let rain ="https://media.istockphoto.com/id/108267676/photo/red-umbrella-and-rain-against-black-background.webp?s=2048x2048&w=is&k=20&c=fDuTznTxGffrlfbdeqbYYPKxSymSqHglQGjDePUQUqc=";
   
  return (
    <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidty> 80 ? rain : info.max >15 ? hot : cool}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <h1>{info.name}</h1>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Maximum Temperature : {info.max}</p>
          <p>Minimum Temperature : {info.min}</p>
          <p>FeelsLike : {info.feelsLike}</p>
          <p>Humidity : {info.humidity}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  )
}

export default InfoBox