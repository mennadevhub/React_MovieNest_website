import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCards/MoviesCards';
import { Button, Card, CardActions, CardContent, Grid, Skeleton, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useOutletContext } from 'react-router-dom';


export const TopRatedMovies = () => {
  const { topRatedMovies } = useOutletContext();
  const [showAll, setShowAll] = useState(false); 
  const {connected}= useOutletContext();
  const {allCategories}=useOutletContext();
  

  // const getTopRatedMovies = async (url) => {
  //   try {
  //     const res = await axios.get(
  //       url, 
  //       {
  //         headers: {
  //           accept: 'application/json',
  //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYTA3YTcxNTUzMmMxYTk2ODRmZDRjNTYxMDk1Y2NhYSIsIm5iZiI6MTcyNzg2MjY5OS43NTgwMDAxLCJzdWIiOiI2NmZkMTdhYjZjMzY1OTg1YzhmMjNmMDEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aR2TSz0MCOlXSMoLjZClgfD_fcGz_Wf1Sf74gnFcD94'
  //         }
  //       }
  //     );

  //     // console.log(res.data.results);
  //     setTopRatedMovies(res.data.results); 
  //     handleTopRatedMovies(res.data.results);
  //     setConnection(true);

  //   } catch (error) {
  //     setConnection(false);
  //     console.error('Error fetching top rated movies:', error);
  //   }
  // };

  // useEffect(() => {
  //   getTopRatedMovies('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1');
  // }, []);
  let visibleMovies;
  if(showAll){
    visibleMovies=topRatedMovies.topRatedMovies;
  }
  else{
    visibleMovies=topRatedMovies.topRatedMovies.slice(0,8);
  }

  return (
    <Stack spacing={3}  sx={{ p: 2 }}>
      <Stack spacing={0} >
         {/* Box containing the text with an arrow */}
      <Box
        component="section"
        sx={{ pt: 6, display: "flex", alignItems: "center",pl:2  }}
      >
        <Typography variant="h6" color="white" fontWeight={'800'}>Top Rated Movies</Typography>
        <ArrowForwardIosIcon sx={{ color: "white" }} />
        
      </Box>
  
      {/* Grey text */}
      <Typography variant="body2" color="grey" sx={{pl:2 }}>
        on Demand
      </Typography>
      </Stack>
     
  
      {/* Movies grid */}
      <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: { xs: 'center', sm: 'center' },
                alignItems: 'center',
                px: 2,
              }}
            >
      
              
      {!connected.connected ? (
  // Show skeleton when not connected
  [...Array(8)].map((_, index) => (
    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ width: '20rem', height: '25rem', marginBottom: '2rem' }}>
        <Skeleton variant="rectangular" width="100%" height="15rem" />
        <CardContent>
          <Skeleton width="80%" height={30} />
          <Skeleton width="60%" height={20} />
        </CardContent>
        <CardActions>
          <Skeleton width="30%" height={30} />
          <Skeleton width="30%" height={30} />
        </CardActions>
      </Card>
    </Grid>
  ))
) : (
  // Show movies when connected
  visibleMovies.map((movie) => (
    <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
      <MoviesCard movie={movie} allCategories={allCategories} />
    </Grid>
  ))
)}

      
      
            </Grid>
            
      {/* See More and See Less Button */}
      {topRatedMovies.topRatedMovies.length > 8 ? (
  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
    <Button
      variant="contained"
      sx={{
        bgcolor: '#FFC107',
        color: 'white',
        '&:hover': { bgcolor: '#FFA000' },
      }}
      onClick={() => setShowAll(!showAll)}
      endIcon={showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
    >
      {showAll ? 'See Less' : 'See More'}
    </Button>
  </Box>
) : null}

    </Stack>
  );
  
};

export default TopRatedMovies;
