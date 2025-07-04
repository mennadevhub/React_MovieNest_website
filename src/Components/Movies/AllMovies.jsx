import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCards/MoviesCards';
import { Grid, Stack, Typography, Button, Box, CardContent, CardActions, Card } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Skeleton from '@mui/material/Skeleton';
import { useOutletContext } from 'react-router-dom';


const AllMovies = () => {
  const [showAll, setShowAll] = useState(false);
  const { allMovies, connected, allCategories } = useOutletContext();

  let visibleMovies = showAll ? allMovies.allMovies : allMovies.allMovies.slice(0, 8);

  return (
    <Stack spacing={3} sx={{ p: 2 }}>
      <Stack spacing={0}>
        <Box component="section" sx={{ pt: 4, display: 'flex', alignItems: 'center', pl: 2 }}>
          <Typography variant="h6" color="white" fontWeight="800">
            All Movies
          </Typography>
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </Box>
        <Typography variant="body2" color="grey" sx={{ pl: 2 }}>
          on Demand
        </Typography>
      </Stack>

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

      {allMovies.allMovies.length > 8 && (
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
      )}
    </Stack>
  );
};

export default AllMovies;
