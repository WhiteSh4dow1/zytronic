'use client'
import React from 'react'
import profile from '@/../public/profile.png'
import Image from 'next/image'

export default function Rooms() {




  return <>
    <div className='my-15 py-15 mx-auto container text-center '>
        <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-4 text-sm text-center mx-auto '>Room Type</h1>
        <h1 className='text-md md:text-5xl'>The Best Luxury Rooms And Suites</h1>
    </div>

    <div>
        



<div className='mx-auto container'>
    
  <div>

  <Image src={profile} alt='s' ></Image>
  <h1>Deluxe Rooms</h1>
  </div>
  
</div>
    </div>
  </>
}

