import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Typography } from '@mui/material'
import React from 'react'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import HotTubOutlinedIcon from '@mui/icons-material/HotTubOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';

export default function Services() {
  return <>
    <section className='container mx-auto my-10 py-10'>
    
    <div className="row flex flex-col md:flex-row container mx-auto ">
        <div className='w-full mx-auto md:w-1/2 mb-6 '>
        <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm mx-auto md:mx-0 '>Hotel Services</h1>
        <h3 className='text-md md:text-5xl text-center  md:text-start font-semibold text-lg'> Get The Best Hotel </h3>
        <h3 className='text-md md:text-5xl mb-5 text-center  md:text-start font-semibold text-lg'>Fixyland Services</h3>
        <p className='mb-5 w-[80%] text-center mx-auto  md:text-start md:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa dolores est explicabo minima nobis hic enim blanditiis, dolorum aliquid distinctio eligendi eaque temporibus itaque amet.</p>
        <Button sx={{ color: '#fff', fontWeight: '600', borderBottom: '2px solid #1f8f6a', background:'#1f8f6a', textAlign:'center' ,margin: { xs: '0 auto', sm: 'unset' } , display:'flex'}} variant="contained">
                    View All <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                  </Button>
        </div>

        <div className='w-1/2  '>
        <div className='row flex flex-wrap'>
        <div className="card me-3  mt-3 text-slate-950 bg-slate-200 p-3 rounded-3xl px-4 py-10 hover:bg-[#1f8f6a] hover:text-slate-200 group transition-all delay-75  hover:bg-[url('/fitness.jpg')] bg-cover bg-bottom  relative" >
        <FitnessCenterOutlinedIcon sx={{fontSize:'60px', marginBottom:3 }}></FitnessCenterOutlinedIcon>
        <Typography sx={{marginBottom:2, fontWeight:'600'}} variant="h5" >Fitness Center</Typography>
        <p className='w-80 text-slate-500 group-hover:text-slate-200 '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='absolute layer'>

        </div>

        </div>
        <div className="card mt-3 text-slate-950 bg-slate-200 p-3 rounded-3xl px-4 py-10 hover:bg-[#1f8f6a] hover:text-slate-200 group transition-all delay-75  hover:bg-[url('/jacuzzi.jpg')] bg-cover bg-bottom  relative" >
        <HotTubOutlinedIcon sx={{fontSize:'60px', marginBottom:3 }}></HotTubOutlinedIcon>
        <Typography sx={{marginBottom:2, fontWeight:'600'}} variant="h5" >Jacuzzi</Typography>
        <p className='w-80 text-slate-500 group-hover:text-slate-200 '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='absolute layer'>

        </div>

        </div>
        <div className="card me-3 mt-3 text-slate-950 bg-slate-200 p-3 rounded-3xl px-4 py-10 hover:bg-[#1f8f6a] hover:text-slate-200 group transition-all delay-75  hover:bg-[url('/swimming.jpg')] bg-cover bg-bottom  relative" >
        <PoolOutlinedIcon sx={{fontSize:'60px', marginBottom:3 }}></PoolOutlinedIcon>
        <Typography sx={{marginBottom:2, fontWeight:'600'}} variant="h5" >Swimming Pool</Typography>
        <p className='w-80 text-slate-500 group-hover:text-slate-200 '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='absolute layer'>

        </div>

        </div>
        <div className="card mt-3  text-slate-950 bg-slate-200 p-3 rounded-3xl px-4 py-10 hover:bg-[#1f8f6a] hover:text-slate-200 group transition-all delay-75  hover:bg-[url('/spa.jpg')] bg-cover bg-bottom relative" >
        <HotelOutlinedIcon sx={{fontSize:'60px', marginBottom:3 }}></HotelOutlinedIcon>
        <Typography sx={{marginBottom:2, fontWeight:'600'}} variant="h5" >SPA Treatments</Typography>
        <p className='w-80 text-slate-500 group-hover:text-slate-200 '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='absolute layer'>

        </div>

        </div>
        </div>
        </div>
    </div>
    </section>

    <div className='mx-auto container flex flex-col md:flex-row justify-center text-center text-slate-400'>
        <p className='me-3'>Call Us Today: (+1) 234 567 8910 </p>
        <span className='me-3'>OR</span>
        <p>Email Us: info@domain.com </p>
    </div>
  </>
}
