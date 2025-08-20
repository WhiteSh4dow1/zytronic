import Image from 'next/image'
import React from 'react'
import testimonial1 from '@/../public/testimonialSection.png'
import testimonial2 from '@/../public/testimonialSection2.png'
import testimonial3 from '@/../public/testimonialProfile.png'

export default function Testimonial() {
  return <>
<section className='container mx-auto my-10 py-10'>
    
    <div className="row flex flex-col md:flex-row container mx-auto">
        

        <div className='w-1/2 mx-auto justify-center container items-center '>
        <div className='row flex flex-wrap flex-col md:flex-row '>
        <div className='md:relative top-15'>
            <Image className='w-100 rounded-2xl me-3 ' src={testimonial1} alt='testimonial1'></Image>
            <div className='md:absolute hidden bottom-10 -right-20 md:flex bg-slate-100 rounded-xl p-1 flex-col'>
                
                <div className='flex flex-row'>
                    <Image className=' rounded-lg  w-50' src={testimonial2} alt='testimonial'></Image>
                
                </div>
            </div>
        </div>

        </div>
        </div>

        <div className='w-full mx-auto md:w-1/2 mb-6 '>
        <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm mx-auto md:mx-0 mt-5 '>Testimonial</h1>
        <h3 className='text-md md:text-5xl text-center  md:text-start font-semibold text-lg'> Amazing Feedback Say </h3>
        <h3 className='text-md md:text-5xl mb-5 text-center  md:text-start font-semibold text-lg'>About Services</h3>
        
        <div className='mb-5'>
            <div className='p-4'>
            <p className=' border-b-2 border-b-slate-400 pb-4'>"Special treat to dine, it was wow experience food was really delicious outstanding dinner made by Master chef, food experience was unforgetable!"</p>
            <div className='mt-6 flex items-center '>
                <Image className='me-3' src={testimonial3} alt='testimonail zytronic'></Image>

                <div>
                    <h5 className='font-bold text-lg'>Bella Andrew</h5>
                <span className='text-slate-400'>Customer</span>
                </div>
            </div>
            </div>
        </div>
        

        </div>
    </div>
    </section>
  </>
}
