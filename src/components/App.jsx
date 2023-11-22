import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage/MoviesPage";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<div>MoviesId</div>} >
          <Route path="/movies/:movieId/cast" element={<div>MoviesCast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>MoviesReviews</div>} />
        </Route>
      </Routes>
    </div>
  )
};
