import { Link } from 'react-router-dom';
import {
  TitleTrending,
  TrendingList,
} from './TrendingMoviesList.styled';
import PropTypes from 'prop-types';

const TrendingMoviesList = ({ trendingmovies }) => {
  if (trendingmovies.length === 0) {
    return;
  }
  const movies = trendingmovies.results ? trendingmovies.results : [];
  return (
    <section>
      <h1>Trending today</h1>
      <TrendingList>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <TitleTrending>{movie.title}</TitleTrending>
            </Link>
          </li>
        ))}
      </TrendingList>
    </section>
  );
};

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      overview: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ),
};

export default TrendingMoviesList;