import React from 'react'
import { Box } from '@mui/material';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import Footer from '../Footer/Footer';
import ContactPage  from '../ContactPage/ContactPage';
import ContactImg  from '../ContactImg/ContactImg';

const ContactLayout= () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column ', height: '100vh' }}>
        {/* Navbar Section */}
        <Box sx={{ height: '32px' }}>
          <HomeNavbar />
        </Box>

        {/* Image Section */}
        <Box sx={{ flexGrow: 1}} >
          <ContactImg />
        </Box>

        {/* Contact Content Section */}
        <Box sx={{ flexGrow: 1 }}>
          <ContactPage/>
        </Box>

        {/* Footer Section */}
        <Box sx={{ height: '80px' }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default ContactLayout;
