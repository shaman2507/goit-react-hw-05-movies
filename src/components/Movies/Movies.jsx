import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieQuery from 'components/MovieQuery';
import * as API from '../../services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(searchParams.get('query') ?? '');
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return;
    const findMovie = async () => {
      try {
        const { results } = await API.getMovieByName(query);
        if (results.length === 0) alert('There is no movie, try another search!');
        setMovies(results);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };
    findMovie();
  }, [query]);


  const onSubmit = e => {
    e.preventDefault();
    if (value === '') {
      return alert('What do you want to find? :)');
    }
    setSearchParams({ query: e.target[0].value });
  };
  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <main>
      <MovieQuery onSubmit={onSubmit} onChange={onChange} value={value} />
      {movies.length > 0 || query ? (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </main>
  );
};

export default Movies;