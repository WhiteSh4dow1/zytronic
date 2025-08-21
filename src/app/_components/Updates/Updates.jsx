'use client'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';



export default function Updates() {
const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
    perView: 3,
    spacing: 10,
    },
    breakpoints: {
    "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 10 },
    },
    "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
    },
    },
})

  const rooms = [
    { title: "Most Expensive Hotel Rooms In New York", type: "Hotel", image: "/hotelUpdates.png" },
    { title: "Our New Miami Beach Hotel Is Open", type: "Room", image: "/hotelUpdates2.png" },
    { title: "Guests Offers Exclusive Facilities To Services", type: "Resort", image: "/hotelUpdates3.png" },
    
  ]

return <>
<div className='mt-15 py-15 mx-auto container text-center '>
        <h3 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-5 text-sm text-center mx-auto '>Hotel News</h3>
        <h1 className='text-xl font-bold md:text-5xl text-center mx-auto mb-3'>Get More Updates For</h1>
        <h2 className='text-xl font-bold md:text-5xl text-center mx-auto mb-0'>Fixyland</h2>
      </div>

      <div className="mx-auto container overflow-hidden mb-10 pb-10 ">
        <div ref={sliderRef} className="keen-slider">
          {rooms.map((room, index) => (
            <div key={index} className="keen-slider__slide px-2">
              <Card sx={{ borderRadius: '10px', position: 'relative', height: '560px' }}>
                
                <CardMedia
                  sx={{ height: 280}}
                  image={room.image}
                  title={room.title}
                />
                <CardActions sx={{px:2, pt:3}}>
                  <span className='text-slate-400'> <CalendarMonthIcon sx={{ marginBottom: 0.5, color: '#1f8f6a' }} /> January 16, 2024</span>
                  <span className='text-slate-400'> <PersonIcon sx={{ marginBottom: 0.5, color: '#1f8f6a' }} /> Admin</span>
                </CardActions>
                <CardContent>
                  <Typography sx={{ textAlign: 'start', fontWeight: 'bold' ,width:'80%'}} gutterBottom variant="h5" component="h3">
                    {room.title}
                  </Typography>
                </CardContent>
                

                <div className='text-start ms-2 text-slate-500 mb-2'>
                  <p className='mb-3'>There are many variations of passengers of Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <Button sx={{ color: '#fff', fontWeight: '600', borderBottom: '2px solid #1f8f6a',bgcolor:'#1f8f6a', px:3, py:1 }} variant="contained">
                    Read More <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                  </Button>
                </div>

                <div className='absolute top-3 left-3'>
                  <span className='bg-[#1f8f6a] p-2 rounded-md text-slate-300 px-4' >{room.type}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
</>
}
