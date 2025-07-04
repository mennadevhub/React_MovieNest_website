import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import backgroundImage from '../../imgs/backgroundImage.jpg';


const AboutImg = () => {
  return (
    <Box
      sx={{
        height: '50vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: '#fff',
        overflow: 'hidden',
        margin: 0,
        padding: 15,
        '&:hover':{
          opacity:0.9 ,
        }
      }}
    >
      <Typography
        variant="h2" sx={{
          fontWeight: 700, mb: 5, fontSize: {
            xs: '2rem',
            sm: '3rem',
            md: '3.5rem',
          }, textAlign: 'center'
        }}
      >
        About Us
      </Typography>
    </Box>
  );
};
export default AboutImg;
