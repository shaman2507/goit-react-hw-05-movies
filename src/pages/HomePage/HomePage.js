import { useEffect, useState } from 'react';
import * as API from '../../services/api';
import TrendingMoviesList from "components/TrendingMoviesList/TrendingMoviesList";

export default Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const findTrendingMovies = async () => {
            try {
                setIsLoading(true);
                const res = await API.getTrendingMovies();
                setTrendingMovies(res);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        findTrendingMovies();
    }, []);

    return (
        <main>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <TrendingMoviesList trendingmovies={trendingMovies} />
            )}
        </main>
    );
};
