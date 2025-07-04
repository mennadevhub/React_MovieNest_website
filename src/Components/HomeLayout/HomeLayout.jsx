import React from 'react';
import { Box } from '@mui/material';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import HomeImage from '../HomeImage/HomeImage';
import Footer from '../Footer/Footer';
import HomeContent from '../HomeContent/HomeContent';
const HomeLayout = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Navbar Section */}
        <Box sx={{ height: '32px' }}>
          <HomeNavbar />
        </Box>

        {/* Image Section */}
        <Box sx={{ flexGrow: 1 }}>
          <HomeImage />
        </Box>

        {/* Home Content Section */}
        <Box sx={{ flexGrow: 1 }}>
          <HomeContent />
        </Box>


        {/* Footer Section */}
        <Box sx={{ height: '80px' }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default HomeLayout;
