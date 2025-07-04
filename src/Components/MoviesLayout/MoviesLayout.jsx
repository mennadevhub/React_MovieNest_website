import React, { useEffect, useState,useRef } from 'react';
import { Box } from '@mui/material';
import Footer from '../Footer/Footer';
import axios from 'axios';
import MoviesNavbar from '../MoviesNavbar/MoviesNavbar';
import DevicesBox from '../DevicesBox/DevicesBox';
import DrawerSideBar from '../DrawerSideBar/DrawerSideBar';
import { Outlet } from 'react-router-dom';

const MoviesLayout = () => {
  const [allMovies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [selectedMovie, setSelectedMovies] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [connected, setConnection] = useState(false);
  const [allCategories, setAllCategories] = useState(null);




  // Function to update allMovies
  const handleAllMovies = (movies) => {
    setMovies(movies);
  };
  const handleTopRatedMovies = (topRatedMovies) => {
    setTopRatedMovies(topRatedMovies);
  };
  const handleUpcomingMovies = (upcomingMovies) => {
    setUpcomingMovies(upcomingMovies);
  };
  const handleSelectedMovie = (selectedMovie) => {
    try {
        setSelectedMovies(selectedMovie);
      localStorage.setItem('selectedMovie', JSON.stringify(selectedMovie));
    } catch (error) {
      console.error('Error saving selectedMovie to localStorage:', error);
    }
  };

  const handleAllCategories=(categories)=>{
setAllCategories(categories);
  }
  // const handleSelectedItem=(item)=>{
  //   setSelectedItem(item);
  //   scrollToSection(item);  
  //   console.log(item);

  // }
  // const scrollToSection = (category) => {
  //   if (category === "All Movies" && allMoviesRef.current) {
  //     allMoviesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  //   if (category === "Top Rated" && topRatedMoviesRef.current) {
  //     topRatedMoviesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //     console.log(category);
  //   }
  //   if (category === "Upcoming" && upcomingMoviesRef.current) {
  //     upcomingMoviesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };
  const fetchMovies = async () => {
    const urls = {
      allMovies: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      topRated: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      upcoming: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    };
  
    try {
      const responses = await Promise.all(
        Object.values(urls).map(url =>
          axios.get(url, {
            headers: {
              accept: "application/json",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA3YTcxNTUzMmMxYTk2ODRmZDRjNTYxMDk1Y2NhYSIsIm5iZiI6MTcyNzg2MjY5OS43NTgwMDAxLCJzdWIiOiI2NmZkMTdhYjZjMzY1OTg1YzhmMjNmMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aR2TSz0MCOlXSMoLjZClgfD_fcGz_Wf1Sf74gnFcD94",
            },
          })
        )
      );
  
      const [allMoviesRes, topRatedRes, upcomingRes] = responses.map(res => res.data.results);
  
      setMovies(allMoviesRes);
      handleAllMovies(allMoviesRes);
      
      setTopRatedMovies(topRatedRes);
      handleTopRatedMovies(topRatedRes);
      
      setUpcomingMovies(upcomingRes);
      handleUpcomingMovies(upcomingRes);
      
      setConnection(true);
    } catch (error) {
      setConnection(false);
      console.error("Error fetching movies:", error);
    }
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);
  
  

  const handleSelectedCategory = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };  

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navbar Section */}
      <Box sx={{ height: '32px' }}>
        <MoviesNavbar allMovies={allMovies} topRatedMovies={topRatedMovies} upcomingMovies={upcomingMovies} handleSelectedMovie=
          {handleSelectedMovie} />
      </Box>

      {/* Drawer Section */}
      <Box sx={{ flexGrow: 1, width: '100%', background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
        <DrawerSideBar handleSelectedCategory={handleSelectedCategory} handleAllCategories={handleAllCategories}/>
      </Box>

      <Box sx={{ flexGrow: 1, width: '100%', margin: 0, padding: 0 , background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
        <Outlet context={{ handleAllMovies, handleTopRatedMovies, handleUpcomingMovies, allMovies:{allMovies} ,topRatedMovies:{topRatedMovies}, upcomingMovies:{upcomingMovies},selectedMovie:{selectedMovie}, connected:{connected} , allCategories}} />
      </Box>
     

      <Box sx={{ flexGrow: 1, width: '100%', background: 'linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))' }}>
        <DevicesBox />
      </Box>

      {/* Footer Section */}
      <Box sx={{ height: '80px', width: '100%', background: 'black' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MoviesLayout;