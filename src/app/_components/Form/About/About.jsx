'use client'
import React from 'react'
import Image from 'next/image'
import aboutImg from '@/../public/about.png'
import CircularText from '../../../../../ReactDivs/CircularText/CircularText'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Typography } from '@mui/material'

export default function About() {
  return <>
  <section className='my-10'>
    <div className="container flex  flex-col md:flex-row  mx-auto ">
        <div className='md:w-1/2 w-full'>
            <div className='relative inline-block rounded-2xl '>
        <Image src={aboutImg} alt='about-section' className='rounded-2xl w-100 '></Image>
        <span class="pointer-events-none absolute bottom-0 right-0 w-[70px] h-[70px]
               [clip-path:polygon(100%_0,0_100%,100%_100%)]
               bg-[#0a0a0a]"></span>

  
  <span class="pointer-events-none absolute bottom-0 right-0 w-[60px] h-[60px]
               [clip-path:polygon(100%_0,0_100%,100%_100%)]
               bg-[#0a0a0a]"></span>

            <div className='absolute top-50 left-80 text-sm  justify-center items-center hidden md:flex'>
            <CircularText 
                text="30 YEARS OF EXPERIENCE HOTEL BUSINESS - "
                onHover="speedUp"
                spinDuration={20}
                className=" bg-slate-200 text-sm font-semibold about-star w-100 "
                />
                <div className='absolute bg-[#1f8f6a] rounded-full p-3 '>
                    <FontAwesomeIcon icon={faStar} size='lg'/>
                </div>
            </div>
            </div>
        
    </div>

    <Box component={'section'} className='w-1/2 mt-10 text-sm md:text-5xl font-bold mx-auto'>
    <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm'>About Fixyland</h1>
    <h3> World Class Luxury Hotel </h3>
    <h3>and Resort Near City</h3>
    
    </Box>
    </div>
  </section>
  </>
}
