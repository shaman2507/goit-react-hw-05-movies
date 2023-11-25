import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const Header = lazy(() => import('./Header/Header'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./MovieDetails/MovieDetails'));
const MoviesReviews = lazy(() => import('./MoviesReviews/MoviesReviews'));

export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Layout />} />
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<MoviesReviews />} />
          </Route>
      </Routes>
    </div>
  )
};


