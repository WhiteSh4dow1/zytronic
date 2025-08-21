import React from 'react'
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import Typography from '@mui/material/Typography'
import {
  faBehance,
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import TelegramIcon from '@mui/icons-material/Telegram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Footer() {
  return (
    <>
      <section className="dark:bg-slate-950 my-10 py-10 w-full px-14">
        {/* مهم: flex-wrap */}
        <div className="md:flex md:flex-row md:flex-wrap">
          
          {/* عمود 1 */}
          <div className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col justify-center">
            <div className="mb-4 flex items-center">
              <LocationCityOutlinedIcon sx={{ fontSize: '2.5rem' }} />
              <Typography sx={{ fontWeight: 'bold', ml: 1.5 }} variant="h5">Fixyland</Typography>
            </div>
            <p className="w-full md:w-[80%] mb-4 text-slate-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet assumenda ut quae officiis harum.
            </p>
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faFacebook} className="bg-gray-900 p-3" />
              <FontAwesomeIcon icon={faXTwitter} className="bg-gray-900 p-3" />
              <FontAwesomeIcon icon={faInstagram} className="bg-gray-900 p-3" />
              <FontAwesomeIcon icon={faBehance} className="bg-gray-900 p-3" />
            </div>
          </div>

          {/* عمود 2 */}
          <div className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col justify-center">
            <Typography sx={{ fontWeight: 'bold', my: 2, textTransform: 'uppercase' }} variant="h5">Explore</Typography>
            <Link className="mb-2 text-slate-400" href="">About Hotel</Link>
            <Link className="mb-2 text-slate-400" href="">Pricing</Link>
            <Link className="mb-2 text-slate-400" href="">Hotel Staff</Link>
            <Link className="mb-2 text-slate-400" href="">Latest News</Link>
            <Link className="mb-2 text-slate-400" href="">Contact US</Link>
          </div>

          {/* عمود 3 */}
          <div className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col">
            <Typography sx={{ fontWeight: 'bold', my: 2, textTransform: 'uppercase' }} variant="h5">Contact</Typography>
            <Link className="mb-4 md:w-[50%] text-slate-400" href="">7651 Sabina Park, 115 Devon Isle, USA</Link>
            <Link className="mb-2" href="tel:(+1) 967 654 3210">(+1) 967 654 3210</Link>
            <Link className="mb-2" href="">info@domain.com</Link>
          </div>

          {/* عمود 4 */}
          <div className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col p-8 py-10 rounded-3xl bg-gray-900 mt-3 md:mt-0">
            <Typography sx={{ fontWeight: 'bold', mb: 4, textTransform: 'uppercase' }} variant="h5">NewsLetter</Typography>
            <div className="flex items-center gap-3">
              <Link className="mb-5 pb-3 text-slate-400 border-b-4 w-full" href="">EX: info@domain.com</Link>
              <TelegramIcon />
            </div>
            <div className="flex items-center">
              <p><CheckCircleIcon sx={{ fontSize: '18px' }} /> I agree to all terms and policies</p>
            </div>
          </div>
        </div>

        {/* الفوتر السفلي */}
        <div className="mt-10 text-slate-400 border-t-2 w-full">
          <div className="md:flex justify-between mt-4 flex md:flex-row flex-col-reverse">
            <div className="my-3 text-center">
              <p className="md:w-[100%] text-center">© Copyright 2025 Fixyland. All Rights Reserved</p>
            </div>
            <div className="text-center flex md:flex-row flex-col items-center">
              <Link className="mb-3 md:mx-3" href="">
                Terms and Conditions <span className="mx-3 md:border-1"></span>
              </Link>
              <Link className="mb-3" href="">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
