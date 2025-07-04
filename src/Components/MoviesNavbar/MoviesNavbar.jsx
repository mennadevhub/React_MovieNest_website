import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



// const drawerWidth = 240;
const navItems = [{ page: 'Home', route: '/' }];

function MoviesNavbar({ window, allMovies, topRatedMovies, upcomingMovies, handleSelectedMovie }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const [selectedMovie, setSelectedMovie] = useState(null);
  localStorage.setItem('allMovies', JSON.stringify(allMovies));
  localStorage.setItem('topRatedMovies', JSON.stringify(topRatedMovies));
  localStorage.setItem('handleSelectedMovie', JSON.stringify(handleSelectedMovie));



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handlePageNavigation = (pageRoute) => {
    setMobileOpen(false);
    navigate(pageRoute);
  };

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       MovieNest
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <Button
  //     key={item.page}
  //     sx={{
  //       color: '#fff',
  //       mx: 3,
  //       display: { xs: 'block', sm: 'block' }, // Hide on small screens
  //       '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
  //     }}
  //     onClick={() => handlePageNavigation(item.route)}
  //   >
  //     {item.page}
  //   </Button>
  //       ))}
  //       <Divider />
  //     </List>
  //   </Box>
  // );

  // const container = window !== undefined ? () => window().document.body : undefined;
  const uniqueMovies = new Map();

  [...allMovies, ...topRatedMovies, ...upcomingMovies].forEach(movie => {
    if (!uniqueMovies.has(movie.id)) {
      uniqueMovies.set(movie.id, { label: movie.original_title, id: movie.id, movieData: movie });
    }
  });

  const movieOptions = Array.from(uniqueMovies.values());

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#1A1A1D', color: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            {/* Left Section: Logo and Search Box */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton color="inherit" aria-label="slideshow" sx={{ fontSize: '5rem', '&:hover': { color: '#FBBC04' } }}>
                <SlideshowIcon />
              </IconButton>
              <Typography variant="h6" sx={{ fontFamily: 'Comfortaa, sans-serif', fontWeight: 700 }}>
                Movie<span style={{ color: '#FFC107' }}>Nest</span>
              </Typography>
            </Box>
  
            {/* Center Section */}
            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.page}
                  sx={{
                    color: '#fff',
                    mx: 3,
                    '&:hover': { color: '#FBBC04', bgcolor: '#1A1A1D' },
                  }}
                  onClick={() => handlePageNavigation(item.route)}
                >
                  {item.page}
                </Button>
              ))}
            </Box>
          </Box>
  
          {/* Right Section */}
          <Box sx={{ display: { xs: 'block', sm: 'block' }, alignItems: 'center' }}>
            {/* Search Box */}
            <Autocomplete
              disablePortal
              options={movieOptions}
              getOptionLabel={(option) => option.label}
              onChange={(event, value) => {
                if (handleSelectedMovie) {
                  if (value) {
                    handleSelectedMovie(value.movieData);
                    navigate(`/Movies/${value.movieData.id}`);
                  } else {
                    navigate(`/Movies`);
                  }
                }
              }}
              sx={{
                width: 200,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '15px',
                  height: '30px',
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: '#FFC107',
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white',
                  top: '-12px',
                },
                '& .MuiInputBase-root': {
                  height: '30px',
                  color: 'white',
                },
                '& .MuiInputBase-input': {
                  color: 'white',
                },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
  
            {selectedMovie && handleSelectedMovie(selectedMovie)}
          </Box>
        </Toolbar>
      </AppBar>
  
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
  }
  
  MoviesNavbar.propTypes = {
    window: PropTypes.func,
  };

export default MoviesNavbar;
