import { useParams } from 'react-router-dom';
import * as API from '../../MovieApi/moviedbAPI';
import { CastList, CastText } from './Cast.styled';
import { useEffect, useState } from 'react';

export default Cast = () => {
    const { movieId } = useParams;
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const findMovieCast = async () => {
            try {
                setIsLoading(true);
                const res = await API.getMovieCast(movieId);
                setCast(res.cast);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        findMovieCast();
    }, [movieId]);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {cast.length ? (
                        <CastList>
                            {cast.map(actor => (
                                <li key={actor.id}>
                                    {actor.profile_path ? (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                                            alt={`${actor.name} poster`}
                                            width="100"
                                        />
                                    ) : (
                                        <img
                                            src={`https://via.placeholder.com/100x150?text=No+Image`}
                                            alt={`${actor.name} profile`}
                                        />
                                    )}
                                    {actor.name ? (
                                        <CastText>{actor.name}</CastText>
                                    ) : (
                                        <CastText>No actor name</CastText>
                                    )}
                                    {actor.character ? (
                                        <>
                                            <CastText>
                                                <span>Character: </span> {actor.character}
                                            </CastText>
                                        </>
                                    ) : (
                                        <CastText>
                                            No information about character
                                        </CastText>
                                    )}
                                </li>
                            ))}
                        </CastList>
                    ) : (
                        <CastText>
                            No information about cast
                        </CastText>
                    )}
                </>
            )}
        </>
    );
};