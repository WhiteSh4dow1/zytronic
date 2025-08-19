import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@mui/material'
import React from 'react'

export default function Services() {
  return <>
    <div className='container mx-auto my-10 py-10'>
    
    <div className="row flex">
        <div className='w-1/2'>
        <h1 className='uppercase text-[#1f8f6a] bg-slate-200 w-fit p-1 px-2 rounded-md font-semibold mb-3 text-sm'>Hotel Services</h1>
        <h3 className='text-md md:text-5xl'> Get The Best Hotel </h3>
        <h3 className='text-md md:text-5xl mb-5'>Fixyland Services</h3>
        <p className='mb-5 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsa dolores est explicabo minima nobis hic enim blanditiis, dolorum aliquid distinctio eligendi eaque temporibus itaque amet.</p>
        <Button sx={{ color: '#fff', fontWeight: '600', borderBottom: '2px solid #1f8f6a', background:'#1f8f6a'}} variant="contained">
                    View All <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
                  </Button>
        </div>

        <div className='w-1/2'>
    <h1>Second Section</h1>
        </div>
    </div>
    </div>
  </>
}
