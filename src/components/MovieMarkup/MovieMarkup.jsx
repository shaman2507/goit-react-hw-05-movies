import { Link, useLocation } from 'react-router-dom';
import {
  Movie,
  MovieAddInfo,
  MovieText,
  MovieTitle,
} from './MovieMarkup.styled';
import PropTypes from 'prop-types';

const MovieMarkup = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, overview, genres } =
    movie;

  const location = useLocation();
  const goBack = location?.state?.from ?? '/';

  const releaseDate = new Date(release_date);

  const releaseYear = isNaN(releaseDate)
    ? 'Unknown'
    : releaseDate.getFullYear();

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : 'Not rated';

  if (!title) {
    return 'Unknown';
  }

  return (
    <section>
      <Movie>
        <img src={posterUrl} alt={`${title} poster`} />
        <div>
          <MovieTitle>
            {title ?? 'Unknown'} ({releaseYear})
          </MovieTitle>
          <MovieText>User Score: {userScore}</MovieText>
          <MovieText>
            <span>Overview:</span> {overview}
          </MovieText>

          {genres && genres.length > 0 && (
            <MovieText>
              <span>Genres: </span>
              {genres.map(genre => genre.name).join(', ')}
            </MovieText>
          )}
        </div>
      </Movie>
      <MovieAddInfo>
        <MovieText>Additional information:</MovieText>

        <ul>
          <li>
            <Link to="cast" state={{ from: goBack }}>
              Cast
            </Link>
          </li>

          <li>
            <Link to="reviews" state={{ from: goBack }}>
              Reviews
            </Link>
          </li>
        </ul>
      </MovieAddInfo>
    </section>
  );
};

MovieMarkup.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }).isRequired,
};

export default MovieMarkup;