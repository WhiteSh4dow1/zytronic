import Image from 'next/image'
import React from 'react'
import hotelOffer1 from '@/../public/hotelOffer1.png'
import resortOffer from '@/../public/resortOffer.png'
import { Button, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Offers() {
  return <>
  <section className='my-10 py-10 container mx-auto items-center overflow-hidden'>
    
        <h5 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm mx-auto  '>Special Offers</h5>
    <h1 className='md:text-5xl text-center   font-semibold text-lg'>Special Discount for Hotel & </h1>
    <h1 className=' md:text-5xl text-center   font-semibold text-lg mb-10'> Resort Booking </h1>
    
    
    <div className='container flex flex-col md:flex-row mx-auto justify-center items-center'>
        <div className='md:w-1/2 relative mx-5 mb-3'>
        <Image  src={hotelOffer1} alt='offer' className='w-[100%] rounded-[10px]'></Image>
        <h3 className=' md:hidden flex text-lg md:text-4xl font-bold w-80 mt-2 mx-2 text-slate-200'>Get 30% Off On Hotel Booking</h3>
        <Button sx={{ color: '#111', fontWeight: '600', background:'#fff', textAlign:'center' ,margin: { xs: '0 auto', sm: 'unset' } , display: {xs: 'flex' , md:'none'} ,  paddingBlock:2, paddingInline:3}} variant="contained">
                                Book Now <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                              </Button>
        
        <div className="offerLayer  absolute">
            <div className='opacity-0 lg:opacity-100 md:absolute top-50 left-20'>
            <h3 className=' opacity-0 md:opacity-100 text-lg md:text-4xl font-bold w-[80%] text-slate-200'>Get 30% Off On Hotel Booking</h3>
            <span className='relative bottom-40 left-0'>
            <Typography sx={{ color: '#fff', fontWeight: '600', borderBottom: '2px solid #fff',  textAlign:'center', width:'fit-content' ,margin: { xs: '0 auto', sm: 'unset' } , display:'flex', paddingBlock:2}} >
                    30% Off
                </Typography>
            </span>
            <Button sx={{ color: '#111', fontWeight: '600', background:'#fff', textAlign:'center' ,margin: { xs: '0 auto', sm: 'unset' } , display:'flex', paddingBlock:2, paddingInline:3}} variant="contained">
                                Book Now <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                              </Button>
            </div>
        </div>
        </div>
        <div className='md:w-1/2 relative mx-5 mb-3'>
        <Image  src={resortOffer} alt='offer2' className='w-[100%] rounded-[10px]'></Image>
        <h3 className=' md:hidden flex text-lg md:text-4xl font-bold w-80 mt-2 mx-2 text-slate-200'>Get 35% Off On Resort Booking</h3>
        <Button sx={{ color: '#111', fontWeight: '600', background:'#fff', textAlign:'center' ,margin: { xs: '0 auto', sm: 'unset' } , display:{xs: 'flex' , md:'none'} , paddingBlock:2, paddingInline:3}} variant="contained">
                                Book Now <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                              </Button>
        <div className="offerLayer  absolute">
            <div className='absolute top-50 left-20 opacity-0 lg:opacity-100'>
            <h3 className='text-4xl font-bold w-100 opacity-0 lg:opacity-100 text-slate-200'>Get 35% Off On Resort Booking</h3>
            <span className='relative bottom-40 left-0'>
            <Typography variant='span' sx={{ color: '#fff', fontWeight: '600', borderBottom: '2px solid #fff',  textAlign:'center', width:'fit-content' ,margin: { xs: '0 auto', sm: 'unset' } , display:'flex', paddingBlock:2}} >
                    35% Off
                </Typography>
            </span>
            <Button sx={{ color: '#111', fontWeight: '600', background:'#fff', textAlign:'center' ,margin: { xs: '0 auto', sm: 'unset' } , display:'flex', paddingBlock:2, paddingInline:3}} variant="contained">
                                Book Now <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                              </Button>
            </div>
        </div>
        </div>
    </div>
  </section>
  </>
}
