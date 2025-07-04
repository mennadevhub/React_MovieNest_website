import { useOutletContext, useParams } from 'react-router-dom';
import MoviesCard from '../MoviesCards/MoviesCards';
import { Box, Grid, Typography } from '@mui/material';


const SelectedCategory = () => {
  const { categoryId } = useParams();
  const { allMovies, upcomingMovies, topRatedMovies, allCategories } = useOutletContext();



  const filteredAllMovies = allMovies.allMovies.filter(movie =>
    movie.genre_ids.includes(parseInt(categoryId))
  );
  const filteredUpcomingMovies = upcomingMovies.upcomingMovies.filter(movie =>
    movie.genre_ids.includes(parseInt(categoryId))
  );
  const filteredTopRatedMovies = topRatedMovies.topRatedMovies.filter(movie =>
    movie.genre_ids.includes(parseInt(categoryId))
  );

  if (!Array.isArray(filteredAllMovies) || !Array.isArray(filteredUpcomingMovies) || !Array.isArray(filteredTopRatedMovies)) {
    return <p>Invalid movie data.</p>;
  }


  const allFilteredMovies = [...filteredUpcomingMovies, ...filteredTopRatedMovies, ...filteredAllMovies];
  const uniqueMovies = [];

  for (let i = 0; i < allFilteredMovies.length; i++) {
    if (!uniqueMovies.some(movie => movie.id === allFilteredMovies[i].id)) {
      uniqueMovies.push(allFilteredMovies[i]);
    }
  }


  console.log(uniqueMovies);
  return (
    <div>
      {uniqueMovies.length > 0 ? (
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
          {uniqueMovies.map(movie => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
              <MoviesCard movie={movie} allCategories={allCategories} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography sx={{ color: "red", pl: 2 }}>
            No movies found in this category
          </Typography>
        </Box>

      )
      }
    </div>
  );


};


export default SelectedCategory;
