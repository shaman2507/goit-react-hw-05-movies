import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';
const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));
const Movies = lazy(() => import('./Movies'));
const Cast = lazy(() => import('./Cast'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Rewievs/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};