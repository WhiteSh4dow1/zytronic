'use client'
import React from 'react'
import ScrollVelocity from '../../../../ReactDivs/ScrollVelocity/ScrollVelocity'

export default function Marquee() {
  // هنا هتحط النصوص كلها بس مع فاصل (مثلا ✦ أو صورة CSS)
  const texts = [
    "Hotel & Resort ✦ Holiday Booking ✦ Luxury Hotel"
  ]

  return (
    <>
      <div className="w-full ">
        <div className="py-2 bg-[#1f8f6a] rotate-2">
          <ScrollVelocity
            texts={texts}
            velocity={80}
            className="custom-scroll-text"
          />
        </div>
      </div>

      <div className="w-full ">
        <div className="py-2 bg-slate-950 -rotate-5">
          <ScrollVelocity
            texts={["Hotel & Resort ✦ Holiday Booking ✦ Luxury Hotel"]}
            velocity={80}
            className="custom-scroll-text"
          />
        </div>
      </div>
    </>
  )
}
