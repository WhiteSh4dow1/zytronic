'use client'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function Rooms() {

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3.3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  })

  const rooms = [
    { title: "Deluxe Rooms", price: "$800 / Night", image: "/Deluxe-Rooms.jpg" },
    { title: "Junior Rooms", price: "$400 / Night", image: "/juniorRooms.png" },
    { title: "Family Rooms", price: "$600 / Night", image: "/familyRooms.png" },
    { title: "Single Rooms", price: "$200 / Night", image: "/singleRooms.png" }
  ]

  return (
    <>
      <div className='my-15 py-15 mx-auto container text-center'>
        <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-4 text-sm text-center mx-auto '>Room Type</h1>
        <h1 className='text-lg font-bold md:text-5xl'>The Best Luxury Rooms And Suites</h1>
      </div>

      <div className="mx-auto container overflow-hidden">
        <div ref={sliderRef} className="keen-slider">
          {rooms.map((room, index) => (
            <div key={index} className="keen-slider__slide px-2">
              <Card sx={{ borderRadius: '10px', position: 'relative', height: '550px' }}>
                <CardMedia
                  sx={{ height: 280 }}
                  image={room.image}
                  title={room.title}
                />
                <CardContent>
                  <Typography sx={{ textAlign: 'start', fontWeight: 'bold' }} gutterBottom variant="h5" component="h3">
                    {room.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <span> <PeopleIcon sx={{ marginBottom: 0.5, color: '#1f8f6a' }} /> 2 Guests</span>
                  <span> <BedIcon sx={{ marginBottom: 0.5, color: '#1f8f6a' }} /> 2 Beds</span>
                  <span> <BathtubIcon sx={{ marginBottom: 0.5, color: '#1f8f6a' }} /> 1 Bath</span>
                </CardActions>

                <div className='text-start ms-2 text-slate-500 mb-2'>
                  <p className='mb-3'>There are many variations of passengers of Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                  <Button sx={{ color: '#1f8f6a', fontWeight: '600', borderBottom: '2px solid #1f8f6a' }} variant="text">
                    Read More <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                  </Button>
                </div>

                <div className='absolute top-3 left-3'>
                  <span className='bg-[#1f8f6a] p-2 rounded-md text-slate-300'>{room.price}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
