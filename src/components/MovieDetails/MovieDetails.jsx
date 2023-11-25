import { BsArrowLeftShort } from 'react-icons/bs';
import * as API from '../../MovieApi/moviedbAPI';
import MovieMarkup from 'components/MovieMarkup/MovieMarkup';
import { Suspense, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const findMovieDetails = async () => {
            try {
                setIsLoading(true);
                const res = await API.getMovieById(movieId);
                setMovieDetails(res);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        findMovieDetails();
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
                    <MovieMarkup movie={movieDetails} state={{ from: location }} />
            )}
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
    );
};