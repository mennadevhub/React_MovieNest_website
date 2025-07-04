import { Routes, Route } from "react-router-dom";
import HomeLayout from "./Components/HomeLayout/HomeLayout";
import MoviesLayout from "./Components/MoviesLayout/MoviesLayout";
import MoviesComponents from "./Components/Movies/MoviesComponents";
import SelectedCategory from "./Components/Movies/SelectedCategory";
import MovieDetails from "./Components/Movies/MovieDetails";
import AboutLayout from './Components/AboutLayout/AboutLayout';
import AboutImg from './Components/AboutImg/AboutImg';
import ContactLayout from './Components/ContactLayout/ContactLayout';
import ContactImg from './Components/ContactImg/ContactImg';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />

      {/* Movies Page */}
      <Route path="/Movies" element={<MoviesLayout />}>
        <Route index element={<MoviesComponents />} />
        <Route path="category/:categoryId" element={<SelectedCategory />} />
        <Route path=":movieId" element={<MovieDetails />} />
      </Route>

      {/* About Page */}
      <Route path="/about" element={<AboutLayout />}>
        <Route index element={<AboutImg />} />
      </Route>

      {/* Contact Page */}
      <Route path="/Contact" element={<ContactLayout />}>
        <Route index element={<ContactImg />} />
      </Route>
    </Routes>
  );
}

export default App;
