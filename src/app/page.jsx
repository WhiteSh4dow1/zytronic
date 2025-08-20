import Image from "next/image";

import headerImg from "../../public/header.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "./_components/Form/Form";
import About from "./_components/Form/About/About";
import Marquee from "./_components/Marquee/Marquee";
import Rooms from "./_components/Rooms/Rooms";
import Services from "./_components/Services/Services";
import Video from "./_components/Video/Video";
import Food from "./_components/FoodandDrink/Food";
import Offers from "./_components/Offers/Offers";
import Testimonial from "./_components/Testimonial/Testimonial";
import Team from "./_components/Team/Team";
import Updates from "./_components/Updates/Updates";
import FollowUs from "./_components/FollowUs/FollowUs";

export default function Home() {
  return (
    <>
      <div className="header-layer text-center px-4 py-8 ">
        {/* Heading */}
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-10">
          <h1>Book With Best</h1>
          <span className="main-yellow block mt-1">Luxury Hotel</span>
        </div>

        {/* Paragraph */}
        <div>
          <p className="text-sm sm:text-base md:text-lg mt-4 font-light max-w-2xl text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at
            possimus molestias natus, eligendi quaerat dolore voluptate.
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
          <button className="btn-yellow flex items-center justify-center gap-2">
            Explore Now
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
          </button>

          <button className="btn-white flex items-center justify-center gap-2">
            Our Services
            <FontAwesomeIcon icon={faArrowRight} className="-rotate-45" />
          </button>
        </div>
      </div>


      <Form/>
      <About/>
      <Marquee/>
      <Rooms/>
      <Services/>
      <Video/>
      <Food/>
      <Offers/>
      <Testimonial/>
      <Team/>
      <Updates/>
      <FollowUs/>
    </>
  );
}
