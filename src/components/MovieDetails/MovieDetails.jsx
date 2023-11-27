import { BsArrowLeftShort } from 'react-icons/bs';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import * as API from '../../services/api';
import MovieMarkup from 'components/MovieMarkup';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetailed, setmovieDetailed] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const findMovieDetailed = async () => {
      try {
        setIsLoading(true);
        const res = await API.getMovieById(movieId);
        setmovieDetailed(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovieDetailed();
  }, [movieId]);

  return (
    <main>
      <Link to={location?.state?.from ?? '/'}>
        <button
          type="button"
          style={{
            marginTop: '0.5rem',
            backgroundColor: 'transparent',
            border: '0.02rem solid rgba(0, 0, 0, 0.3)',
            borderRadius: '0.2rem',
            fontSize: '0.7rem',
          }}
        >
          <BsArrowLeftShort
            style={{
              verticalAlign: 'middle',
              marginRight: '0.2rem',
            }}
          />
          Go back
        </button>
      </Link>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <MovieMarkup movie={movieDetailed} state={{ from: location }} />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;