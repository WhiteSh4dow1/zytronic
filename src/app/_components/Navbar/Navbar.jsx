"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  faBehance,
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  faArrowRight,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useCustomTheme } from "../../../../ThemeProviderWrapper";


const pages = [
  {
    name: "Home",
    children: [
      { name: "Home 1", href: "/" },
      { name: "Home 2", href: "/" },
      { name: "Home 3", href: "/" },
    ],
  },
  {
    name: "Pages",
    children: [
      { name: "Pages 1", href: "/pages1" },
      { name: "Pages 2", href: "/pages2" },
      { name: "Pages 3", href: "/pages3" },
    ],
  },
  {
    name: "Rooms & Suites ",
    children: [
      { name: "Rooms 1 ", href: "/rooms1" },
      { name: "Rooms 2", href: "/rooms2" },
      { name: "Rooms 3", href: "/rooms3" },
    ],
  },
  {
    name: "Services",
    children: [
      { name: "Services 1", href: "/services1" },
      { name: "Services 2", href: "/services2" },
      { name: "Services 3", href: "/services3" },
    ],
  },
  {
    name: "Blog",
    children: [
      { name: "Blog 1", href: "/blog1" },
      { name: "Blog 2", href: "/blog2" },
      { name: "Blog 3", href: "/blog3" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

    const { darkMode, toggleTheme } = useCustomTheme();

  // ---- added logic refs & state ----
  const topbarRef = useRef(null);
  const navRef = useRef(null);
  const [navTop, setNavTop] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const topbarH = topbarRef.current?.offsetHeight ?? 0;
      const y = window.scrollY || 0;
      setNavTop(Math.max(topbarH - y, 0));          // top = max(height(topbar) - scrollY, 0)
      setNavHeight(navRef.current?.offsetHeight ?? 0); // spacer height
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    // re-measure when mobile menu toggles (height changes)
    const topbarH = topbarRef.current?.offsetHeight ?? 0;
    const y = window.scrollY || 0;
    setNavTop(Math.max(topbarH - y, 0));
    setNavHeight(navRef.current?.offsetHeight ?? 0);
  }, [mobileOpen]);
  // ---- end added logic ----

  return (
    <div id="header">
      {/* top bar  */}
      <nav ref={topbarRef} className="bg-[#1f8f6a] text-white ">
        <div className="flex flex-col md:flex-row justify-between items-center w-full p-2 px-4 md:px-10">
          <ul className=" list-outside lg:list-inside list-disc marker:text-[#e6c466] 
  text-xs md:text-sm flex flex-col md:flex-row 
  gap-2 md:gap-6 text-center md:text-left">
            <li>
              <Link
                href="https://maps.app.goo.gl/Nv1zkcZ3bLVPJjDs6"
                target="_blank"
              >
                7651 Sabina Park, 115 Devon Isle, USA
              </Link>
            </li>
            <li>
              <Link href="mailto:info@domain.com">info@domain.com</Link>
            </li>
            <li>
              <Link href="tel:(+1) 967 654 3210">(+1) 967 654 3210</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4 text-lg mt-2 md:mt-0">
            <Link href="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link href="https://x.com/" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="https://www.behance.net/" target="_blank">
              <FontAwesomeIcon icon={faBehance} />
            </Link>
          </div>
        </div>
      </nav>

      {/* second navbar (fixed with dynamic top) */}
      <nav
        ref={navRef}
        className="bg-transparent shadow-sm fixed left-0 w-full z-50 "
        style={{ top: navTop ,backgroundColor:theme.palette.mode === "light" ? "#000" : "transparent" }}
        
      >
        <div className="flex items-center justify-between px-4 ">
          
          <div
            className="flex items-center bg-white px-5 py-3 md:px-14 md:py-5 shadow-md"
            style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)" }}
          >
            <LocationCityOutlinedIcon
              sx={{ color: "#1f8f6a", marginRight: "4px" }}
            />
            <Link href="/" className="text-lg md:text-xl font-bold text-black">
              Fixyland
            </Link>
          </div>

          <div className="hidden xl:flex gap-6">
  {pages.map((page) =>
    page.children ? (
      <div key={page.name} className="relative group">
        <button style={{color:theme.palette.mode === "light" ? "#fff" : "#fff"}}
          className={`cursor-pointer flex items-center font-black text-lg hover:text-[#1f8f6a] transition ${
            darkMode ? "text-slate-100" : "text-black"
          }`}
        >
          {page.name}
          <ArrowDropDownIcon />
        </button>
        {/* Dropdown */}
        <div
          className="absolute left-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg opacity-0 invisible 
                     group-hover:opacity-100 group-hover:visible
                     transition-all duration-300 ease-in-out"
        >
          <ul className="flex flex-col py-2">
            {page.children.map((sub) => (
              <li key={sub.name}>
                <Link
                  href={sub.href}
                  className="block px-4 py-2 hover:bg-gray-100 transition"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ) : (
      <Link style={{color:theme.palette.mode === "light" ? "#fff" : "#fff"}}
        key={page.name}
        href={page.href}
        className={`cursor-pointer flex items-center text-lg font-black hover:text-[#1f8f6a] transition ${
          darkMode ? "text-slate-100" : "text-black"
        }`}
      >
        {page.name}
      </Link>
    )
  )}
</div>


          <div className="flex items-center flex-wrap gap-2 md:gap-3 lg:gap-4 max-w-full">
            {/* Search Icon */}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="bg-[#69696967] p-2 sm:p-3 rounded-full cursor-pointer text-slate-200"
            />

            {/* Menu Icon */}
            <FontAwesomeIcon 
              icon={faBars}
              className="bg-[#69696967] p-2 sm:p-3 rounded-full cursor-pointer xl:hidden text-slate-200"
              onClick={() => setMobileOpen(!mobileOpen)}
            />
            <IconButton sx={{backgroundColor:'#69696967'}}
    onClick={toggleTheme}
    className="bg-[#69696967] p-2 sm:p-3 rounded-full"
  >
    {darkMode ? (
      <LightModeIcon sx={{ color: "white"}} />
    ) : (
      <DarkModeIcon sx={{ color: "white"}} />
    )}
  </IconButton>
            {/* Book Your Stay Button */}
            <button
              className="bg-[#e6c466] text-black font-bold 
      px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 
      rounded-md hover:bg-[#ceac47] transition cursor-pointer 
      text-xs sm:text-sm md:text-base whitespace-nowrap
      max-w-[200px] sm:max-w-[220px] md:max-w-none truncate
      hidden 2xl:block
      "
            >
              Book Your Stay{" "}
              <FontAwesomeIcon icon={faArrowRight} className="-rotate-45 ml-1" />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="xl:hidden bg-white shadow-md px-4 py-3">
            <ul className="flex flex-col gap-3">
              {pages.map((page) =>
                page.children ? (
                  <details key={page.name} className="group">
                    <summary className="flex items-center justify-between cursor-pointer text-slate-700 font-medium hover:text-[#1f8f6a]">
                      {page.name}
                      <ArrowDropDownIcon />
                    </summary>
                    <ul className="ml-4 mt-2 flex flex-col gap-2">
                      {page.children.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            href={sub.href}
                            className="text-slate-800 block px-2 py-1 hover:bg-gray-100 rounded"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <li key={page.name}>
                    <Link
                      href={page.href}
                      className="block text-slate-700 font-medium hover:text-[#1f8f6a] transition"
                    >
                      {page.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* spacer to avoid content being covered by fixed navbar */}
      <div style={{ height: navHeight }} />
    </div>
  );
}
