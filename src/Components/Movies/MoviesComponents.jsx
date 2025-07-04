import { Box } from "@mui/material";
import AllMovies from "./AllMovies";
import TopRatedMovies from "./TopRatedMovies";
import UpcomingMovies from "./UpcomingMovies";
import { useOutletContext } from "react-router-dom";
import { useRef } from "react";

function MoviesComponents() {


  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          background: "linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))",
        }}
      >
        <AllMovies />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          background: "linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))",
        }}
      >
        <TopRatedMovies />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          background: "linear-gradient(to right, rgb(16, 16, 16), rgb(41, 41, 42))",
        }}
      >
        <UpcomingMovies />
      </Box>
    </>
  );
}

export default MoviesComponents;
