'use client'
import { useTheme } from "@mui/material/styles";
import { Typography, Link } from "@mui/material";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
  const theme = useTheme();

  return (
    <section
      style={{
        backgroundColor:
          theme.palette.mode === "light" ? "#000" : "#020618",
        color: "#fff",
      }}
      className="mt-10 py-10 w-full px-14"
    >
      <div className="md:flex md:flex-row md:flex-wrap">
        {/* ------- Fixyland Section ------- */}
        <div className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col justify-center">
          <div className="mb-4 flex items-center">
            <LocationCityOutlinedIcon sx={{ fontSize: "2.5rem", color: "#fff" }} />
            <Typography
              sx={{ fontWeight: "bold", ml: 1.5, color: "#fff" }}
              variant="h5"
            >
              Fixyland
            </Typography>
          </div>
          <p className="w-full md:w-[80%] mb-4" style={{ color: "#aaa" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
            assumenda ut quae officiis harum.
          </p>
        </div>

        {/* ------- Explore ------- */}
        <div className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col justify-center">
          <Typography
            sx={{ fontWeight: "bold", my: 2, textTransform: "uppercase", color: "#fff" }}
            variant="h5"
          >
            Explore
          </Typography>
          <Link sx={{mb:1}} className="mb-10" style={{ color: "#aaa" }} href="">
            About Hotel
          </Link>
          <Link sx={{mb:1}} className="mb-2" style={{ color: "#aaa" }} href="">
            Pricing
          </Link>
          <Link sx={{mb:1}} className="mb-2" style={{ color: "#aaa" }} href="">
            Hotel Staff
          </Link>
          <Link sx={{mb:1}} className="mb-2" style={{ color: "#aaa" }} href="">
            Latest News
          </Link>
          <Link sx={{mb:1}} className="mb-2" style={{ color: "#aaa" }} href="">
            Contact US
          </Link>
        </div>

        {/* ------- Contact ------- */}
        <div className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col">
          <Typography
            sx={{ fontWeight: "bold", my: 2, textTransform: "uppercase", color: "#fff" }}
            variant="h5"
          >
            Contact
          </Typography>
          <Link sx={{mb:1}} className="mb-4 md:w-[50%]" style={{ color: "#aaa" }} href="">
            7651 Sabina Park, 115 Devon Isle, USA
          </Link>
          <Link sx={{mb:1}} className="mb-2" style={{ color: "#aaa" }} href="tel:(+1) 967 654 3210">
            (+1) 967 654 3210
          </Link>
          <Link sx={{mb:1}} className="mb-2" style={{ color: "#aaa" }} href="">
            info@domain.com
          </Link>
        </div>

        {/* ------- Newsletter ------- */}
        <div
          className="box-border md:w-1/2 lg:w-1/4 px-4 md:px-4 lg:px-6 flex flex-col p-8 py-10 rounded-3xl mt-3 md:mt-0"
          style={{ backgroundColor: "#111" }}
        >
          <Typography
            sx={{ fontWeight: "bold", mb: 4, textTransform: "uppercase", color: "#fff" }}
            variant="h5"
          >
            NewsLetter
          </Typography>
          <div className="flex items-center gap-3">
            <Link
              className="mb-5 pb-3 border-b-4 w-full"
              style={{ color: "#aaa" }}
              href=""
            >
              EX: info@domain.com
            </Link>
            <TelegramIcon sx={{ color: "#fff" }} />
          </div>
          <div className="flex items-center mt-3">
            <p style={{ color: "#aaa" }}>
              <CheckCircleIcon sx={{ fontSize: "18px", color: "#fff" }} /> I agree
              to all terms and policies
            </p>
          </div>
        </div>
      </div>

      {/* ------- Bottom Section ------- */}
      <div className="mt-10 border-t-2 w-full" style={{ borderColor: "#333" }}>
        <div className="md:flex justify-between mt-4 flex md:flex-row flex-col-reverse">
          <div className="my-3 text-center">
            <p>© Copyright 2025 Fixyland. All Rights Reserved</p>
          </div>
          <div className="text-center flex md:flex-row flex-col items-center">
            <Link className="mb-3 md:mx-3" style={{ color: "#aaa" }} href="">
              Terms and Conditions <span className="md:mx-3 md:border-1"></span>
            </Link>
            <Link className="mb-3 " style={{ color: "#aaa" }} href="">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
