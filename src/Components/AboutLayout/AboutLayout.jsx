import React from 'react'
import { Box } from '@mui/material';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import Footer from '../Footer/Footer';
import AboutImg  from '../AboutImg/AboutImg';
import AboutUsPage from '../AboutUsPage/AboutUsPage';

const AboutLayout= () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Navbar Section */}
        <Box sx={{ height: '32px' }}>
          <HomeNavbar />
        </Box>

        {/* Image Section */}
        <Box sx={{ flexGrow: 1 }} >
          <AboutImg />
        </Box>

        {/* About Content Section */}
        <Box sx={{ flexGrow: 1 }}>
          <AboutUsPage/>
        </Box>

        {/* Footer Section */}
        <Box sx={{ height: '80px' }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default AboutLayout;
