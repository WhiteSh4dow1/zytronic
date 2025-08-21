'use client'
import React from 'react'
import Image from 'next/image'
import aboutImg from '@/../public/about.png'
import profile from '@/../public/profile.png'
import CircularText from '../../../../../ReactDivs/CircularText/CircularText'
import { faCheck, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Typography } from '@mui/material'

export default function About() {
  return <>
  <section className='my-10'>
    <div className="container flex  flex-col md:flex-row  mx-auto ">
        <div className='md:w-1/2 w-full'>
            <div className='relative inline-block rounded-2xl '>
        <Image src={aboutImg} alt='about-section' className='rounded-2xl w-100 '></Image>
        <span className="pointer-events-none absolute bottom-0 right-0 w-[70px] h-[70px]
               [clip-path:polygon(100%_0,0_100%,100%_100%)]
               bg-[#0a0a0a]"></span>

  
  <span className="pointer-events-none absolute bottom-0 right-0 w-[60px] h-[60px]
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

    <Box component={'section'} className='px-5 md:w-1/2 mt-10  font-bold mx-auto'>
    <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm'>About Fixyland</h1>
    <h3 className='text-lg font-bold md:text-5xl'> World Class Luxury Hotel </h3>
    <h3 className='text-lg font-bold md:text-5xl mb-5'>and Resort Near City</h3>
    <p>There are many variations of Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae fugit sapiente mollitia incidunt ipsam neque magni dolores nisi dolor? Beatae Lorem ipsum dolor sit amet consectetur.</p>
    

    <div className='mt-5 container  flex mx-auto justify-between  '>

        <div className='w-1/2 me-4'>
        <p className='mb-3'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> 24 - Hours Emeergency Service</p>
        <p className='mb-3'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> Comfortable Atmosphere</p>
        <p className='mb-3'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> Something by accident</p>
        </div>

        <div className=' w-1/2 '>
        <p className='mb-3'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> it is a Long Established Fact</p>
        <p className='mb-3'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> Flexible and Cost-Effective</p>
        <p className='mb-3'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> Get Free Consultation Anytime</p>
        </div>
    </div>

    <div className='flex items-center'>
        <div className='me-3'>
    <Image src={profile} alt='profile-about'></Image>
    </div>

        <div>
    <h3>Robert L. Robinson</h3>
    <span className='font-extralight'>CEO & Founder</span>
    </div>
    </div>
    </Box>


    







    </div>

        

  </section>

  </>
}
