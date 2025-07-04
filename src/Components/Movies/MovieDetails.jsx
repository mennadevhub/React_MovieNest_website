import React, { useState, useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import MoviesCard from '../MoviesCards/MoviesCards';
import { Box } from '@mui/material';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { selectedMovie,allCategories} = useOutletContext();


  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0,
      }}
    >
      {<MoviesCard key={movieId} movie={selectedMovie.selectedMovie} allCategories={allCategories} />}
    </Box>
  );
};

export default MovieDetails;
