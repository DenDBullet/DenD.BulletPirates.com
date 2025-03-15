'use client';

import Image from 'next/image';
import About from "./about"; // Import About component
import Menu from "./menu";
import HorizontalNavbooking from "@/components/HorizontalNavbooking";


import { Box, Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Section with Background Image */}
      <div id="home" className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/pages/kusinayon-background.jpg" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      <HorizontalNavbooking />

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-4xl font-semibold bg-transparent font-poppins">Lutong Bahay, Lasang Nayon</h2>
        <h1 className="text-5xl font-bold mt-2 font-poppins">Authentic Filipino Cuisine With A Modern Twist</h1>
        <p className="mt-4 text-lg max-w-2xl bg-transparent font-poppins">
          Experience the warmth of home-cooked Filipino dishes prepared with love, tradition, and the finest ingredients. Our culinary journey brings the countryside to your table.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4">
          <a 
            href="/menu" 
            className="px-6 py-3 bg-transparent border border-[#ffffff] text-[#ffffff] rounded-lg text-lg font-semibold hover:text-[#A1A4A9] transition font-poppins"
          >
            View Our Menu
          </a>

          <a 
            href="/reserve" 
            className="px-6 py-3 bg-[#FFB400] text-black rounded-lg text-lg font-semibold hover:bg-[#FFB400] hover:text-white transition font-poppins"
          >
            Reserve a Table
          </a>
        </div>
        <br></br>

        {/* New Info Section Below Buttons */}
        <Box
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: '20px',
            borderRadius: '10px',
            display: 'flex',
            gap: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: '900px',
            textAlign: 'center',
            marginTop: '40px', // Moves it below the buttons
            fontFamily: 'Poppins, sans-serif'
          }}
        >
          {/* Opening Hours */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              Opening Hours
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              Monday - Friday: 11:00 AM - 10:00 PM
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              Weekends: 10:00 AM - 11:00 PM
            </Typography>
          </Box>

          {/* Reservations */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              Reservations
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              Book in advance to secure
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              your preferred time and table
            </Typography>
          </Box>

          {/* Special Events */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 1, color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              Special Events
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              We host private parties and
            </Typography>
            <Typography variant="body2" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif' }}>
              special celebrations
            </Typography>
          </Box>
        </Box>
      </div>

        {/* About Section */}
        <About />
        <br></br>

        {/*Menu Section*/}
        <Menu />
    </div>
  );
};

export default LandingPage;
