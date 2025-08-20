'use client'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from 'next/image'
import followUs1 from '@/../public/followUs1.png'
import followUs2 from '@/../public/followUs2.png'
import followUs3 from '@/../public/followUs3.png'
import followUs4 from '@/../public/followUs4.png'
import followUs5 from '@/../public/followUs5.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function FollowUs() {
    const [sliderRef] = useKeenSlider({
        mode: "snap",
        slides: {
          perView: 5,
          spacing: 0,
        },
        breakpoints: {
          "(max-width: 1024px)": {
            slides: { perView: 2, spacing: 0 },
          },
          "(max-width: 640px)": {
            slides: { perView: 1, spacing: 0 },
          },
        },
      })

  return <>
<section className='w-full my-10 py-10'>

<div ref={sliderRef} className="keen-slider ">
    <div className="keen-slider__slide number-slide1 rounded-xl ">
            
            <div className='relative group'>
                <Image className='w-[100%]' src={followUs1} alt='Zytronic follow us '></Image>

                <div className='followUs-layer opacity-0 group-hover:opacity-100 transition-opacity duration-300"'>
                    <div className='absolute top-[50%] left-[50%] -translate-[50%] text-center  text-xl font-black text-[#1f8f6a] '>
                        <FacebookIcon sx={{fontSize:'3.125rem'}}></FacebookIcon>
                        <h5>Follow Our Facebook</h5>
                    </div>
            </div>

                </div>
                
            
          </div>
    <div className="keen-slider__slide number-slide2 rounded-xl ">
            
            <div className='relative group '>
                <Image className='w-[100%] ' src={followUs2} alt='Zytronic follow us '></Image>

                <div className='followUs-layer opacity-0 group-hover:opacity-100 transition-opacity duration-300"'>
                    <div className='absolute top-[50%] left-[50%] -translate-[50%] text-center  text-xl font-black text-[#1f8f6a] '>
                        <XIcon sx={{fontSize:'3.125rem'}}></XIcon>
                        <h5>Follow Our X</h5>
                    </div>
            </div>

                </div>
                
            
          </div>
    <div className="keen-slider__slide number-slide3 rounded-xl ">
            
            <div className='relative group '>
                <Image className='w-[100%] ' src={followUs4} alt='Zytronic follow us '></Image>

                <div className='followUs-layer opacity-0 group-hover:opacity-100 transition-opacity duration-300"'>
                    <div className='absolute top-[50%] left-[50%] -translate-[50%] text-center  text-xl font-black text-[#1f8f6a] '>
                        <InstagramIcon sx={{fontSize:'3.125rem'}}></InstagramIcon>
                        <h5>Follow Our Instagram</h5>
                    </div>
            </div>

                </div>
                
            
          </div>
    <div className="keen-slider__slide number-slide4 rounded-xl ">
            
            <div className='relative group '>
                <Image className='w-[100%] ' src={followUs3} alt='Zytronic follow us '></Image>

                <div className='followUs-layer opacity-0 group-hover:opacity-100 transition-opacity duration-300"'>
                    <div className='absolute top-[50%] left-[50%] -translate-[50%] text-center  text-xl font-black text-[#1f8f6a] '>
                        <PinterestIcon sx={{fontSize:'3.125rem'}}></PinterestIcon>
                        <h5>Follow Our Pinterest</h5>
                    </div>
            </div>

                </div>
                
            
          </div>
    <div className="keen-slider__slide number-slide4 rounded-xl ">
            
            <div className='relative group '>
                <Image className='w-[100%] ' src={followUs5} alt='Zytronic follow us '></Image>

                <div className='followUs-layer opacity-0 group-hover:opacity-100 transition-opacity duration-300"'>
                    <div className='absolute top-[50%] left-[50%] -translate-[50%] text-center  text-xl font-black text-[#1f8f6a] '>
                        <LinkedInIcon sx={{fontSize:'3.125rem'}}></LinkedInIcon>
                        <h5>Follow Our LinkedIn</h5>
                    </div>
            </div>

                </div>
                
            
          </div>

    
</div>
</section>

  </>
}
