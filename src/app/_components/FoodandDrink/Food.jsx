import { faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Typography } from '@mui/material'
import React from 'react'
import HotTubOutlinedIcon from '@mui/icons-material/HotTubOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import Image from 'next/image';
import foodImg from '@/../public/food.png'
import drinkImg from '@/../public/drink.png'
import profile from '@/../public/profile.png'

export default function Food() {
  return <>
    <section className='container mx-auto my-10 py-10'>
    
    <div className="row flex flex-col md:flex-row container mx-auto t">
        <div className='w-full mx-auto md:w-1/2 mb-6 '>
        <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm mx-auto md:mx-0 '>Food & Drink</h1>
        <h3 className='text-md md:text-5xl text-center  md:text-start font-semibold text-lg'> Quality Food And Drink </h3>
        <h3 className='text-md md:text-5xl mb-5 text-center  md:text-start font-semibold text-lg'>Your Trip Are Enjoyable</h3>
        <p className='mb-5 w-[80%] text-center mx-auto  md:text-start md:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa dolores est explicabo minima nobis hic enim blanditiis, dolorum aliquid distinctio eligendi eaque temporibus itaque amet.</p>

        <div className='mb-5'>
            <h5 className='font-bold text-2xl mb-3 ms-1 md:text-start text-center '> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> Free Breakfast, Tea & Coffee</h5>
            <p className='md:text-start text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur error sequi, commodi labore laboriosam dicta fuga ipsa non voluptas eius!</p>
        </div>
        <div className='mb-5'>
            <h5 className='font-bold text-2xl mb-3 ms-1 md:text-start text-center'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> Quality Food & Drink</h5>
            <p className='md:text-start text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur error sequi, commodi labore laboriosam dicta fuga ipsa non voluptas eius!</p>
        </div>
        <div className='mb-5'>
            <h5 className='font-bold text-2xl mb-3 ms-1 md:text-start text-center'> <FontAwesomeIcon icon={faCheck} style={{color:'#1f8f6a'}}/> Restaurant & Bar</h5>
            <p className='md:text-start text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur error sequi, commodi labore laboriosam dicta fuga ipsa non voluptas eius!</p>
        </div>


        <Button sx={{ color: '#fff', fontWeight: '600', borderBottom: '2px solid #1f8f6a', background:'#1f8f6a', textAlign:'center' ,margin: { xs: '0 auto', sm: 'unset' } , display:'flex', paddingBlock:2}} variant="contained">
                    Learn More Hotel <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                  </Button>
        </div>

        <div className='w-1/2 mx-auto justify-center container items-center'>
        <div className='row flex flex-wrap flex-col md:flex-row '>
        <div className='md:relative top-15'>
            <Image className='w-80 rounded-lg me-3 ' src={foodImg} alt='food'></Image>
            <div className='md:absolute hidden bottom-0 -right-20 md:flex bg-slate-100 rounded-4xl p-3 flex-col'>
                <div className='flex flex-col text-[#1f8f6a] text-center py-2 font-semibold'>
                    <h1>Popular Client</h1>
                </div>
                <div className='flex flex-row'>
                    <Image className=' rounded-lg  ' src={profile} alt='client1'></Image>
                <Image className=' rounded-lg  ' src={profile} alt='client2 '></Image>
                <Image className=' rounded-lg  ' src={profile} alt='client3'></Image>
                </div>
            </div>
            
            
            
        </div>
        <Image className='w-80  rounded-lg mt-3' src={drinkImg} alt='drink'></Image>
        
        
       
        </div>
        </div>
    </div>
    </section>
  </>
}
