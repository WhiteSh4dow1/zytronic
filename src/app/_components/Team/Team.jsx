'use client'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import staff1 from '@/../public/staff1.png'
import staff2 from '@/../public/staff2.png'
import staff3 from '@/../public/staff3.png'
import BeachAccessOutlinedIcon from '@mui/icons-material/BeachAccessOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import KitesurfingOutlinedIcon from '@mui/icons-material/KitesurfingOutlined';
import AirplanemodeActiveOutlinedIcon from '@mui/icons-material/AirplanemodeActiveOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';

export default function Team() {

      const [sliderRef] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: 4,
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
      const [sliderRef2] = useKeenSlider({
    mode: "snap",
    slides: {
      perView: 6,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 15 },
      },
      "(max-width: 640px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
  })

  return <>
        <section className='container mx-auto my-10  bg-[#1f8f6a] px-10 pb-6'>
            <div className=' text-center justify-center my-10 py-10'>
                <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm mx-auto my-6 '>Fixyland Staff</h1>
                <h3 className='text-md md:text-5xl text-center font-semibold text-lg mx-auto mt-5'> Expert Staff Persons </h3>
            </div>
            <div ref={sliderRef} className="keen-slider ">
      <div className="keen-slider__slide number-slide1 rounded-xl">
        <div className='bg-slate-200 pb-5 '>
        <Image src={staff1} alt='staff1'></Image>
            <h5 className='mt-3 px-3 text-lg font-bold text-slate-950 py-2'>Michael Dean</h5>
            
            <div className="flex items-center gap-2 px-3 ">
            <div className="h-[5px] w-5 bg-[#1f8f6a]"></div>
            <span className="font-bold text-md text-slate-400">Chef Master</span>
            </div>
            
        </div>
      </div>

      <div className="keen-slider__slide number-slide2 rounded-xl">
        <div className='bg-slate-200 pb-5'>
        <Image  src={staff2} alt='staff1'></Image>
            <h5 className='mt-3 px-3 text-lg font-bold text-slate-950 py-2'>Arnold Taylor</h5>
            
            <div className="flex items-center gap-2 px-3 ">
            <div className="h-[5px] w-5 bg-[#1f8f6a]"></div>
            <span className="font-bold text-md text-slate-400">Room Cleaner</span>
            </div>
            
        </div>

      </div>
      <div className="keen-slider__slide number-slide3 rounded-xl">
        <div className='bg-slate-200 pb-5'>
        <Image  src={staff3} alt='staff1'></Image>
            <h5 className='mt-3 px-3 text-lg font-bold text-slate-950 py-2'>Micheal Dean</h5>
            
            <div className="flex items-center gap-2 px-3 ">
            <div className="h-[5px] w-5 bg-[#1f8f6a]"></div>
            <span className="font-bold text-md text-slate-400">Assitant Chef</span>
            </div>
            
        </div>
      </div>
      <div className="keen-slider__slide number-slide4 rounded-lg">
        <div className='bg-slate-200 pb-5'>
        <Image src={staff1} alt='staff1'></Image>
            <h5 className='mt-3 px-3 text-lg font-bold text-slate-950 py-2'>Michael Dean</h5>
            
            <div className="flex items-center gap-2 px-3 ">
            <div className="h-[5px] w-5 bg-[#1f8f6a]"></div>
            <span className="font-bold text-md text-slate-400">Chef Master</span>
            </div>
            
        </div>
      </div>
    </div>


    
        </section>

        <div className="container mx-auto p-5 py-10 my-10">
            <div>
        <div ref={sliderRef2} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <BeachAccessOutlinedIcon sx={{fontSize:'4rem', color:'#333'}}></BeachAccessOutlinedIcon>
      </div>
      <div className="keen-slider__slide number-slide2">
        <HouseboatOutlinedIcon sx={{fontSize:'4rem' , color:'#333'}}></HouseboatOutlinedIcon>
      </div>
      <div className="keen-slider__slide number-slide3">
        <ForestOutlinedIcon sx={{fontSize:'4rem' , color:'#333'}}></ForestOutlinedIcon>
      </div>
      <div className="keen-slider__slide number-slide4">
        <KitesurfingOutlinedIcon sx={{fontSize:'4rem' , color:'#333'}}></KitesurfingOutlinedIcon>
      </div>
      <div className="keen-slider__slide number-slide5">
        <GrassOutlinedIcon sx={{fontSize:'4rem' , color:'#333'}}></GrassOutlinedIcon>
      </div>
      <div className="keen-slider__slide number-slide6">
        <AirplanemodeActiveOutlinedIcon sx={{fontSize:'4rem' , color:'#333'}}></AirplanemodeActiveOutlinedIcon>
      </div>
    </div>
    </div>
        </div>
  </>
}
