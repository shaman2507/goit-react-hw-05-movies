import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0b79c5bca8197408ee9617cf88710b12';

axios.defaults.baseURL = BASE_URL;
export const getTrendingMovies = async () => {
  const res = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieById = async id => {
  const res = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieCast = async id => {
  const res = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieReviews = async id => {
  const res = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return res.data;
};

export const getMovieByName = async name => {
  const res = await axios.get(`/search/movie?api_key=${API_KEY}&query=${name}`);
  return res.data;
};
    
    
// };

// End-points
//
// '/' – компонент Home                          /trending/get-trending
// '/movies' – компонент Movies                  /search/search-movies
// '/movies/:movieId' – компонент MovieDetails   /movies/get-movie-details
// /movies/:movieId/cast – компонент Cast        /movies/get-movie-credits
// /movies/:movieId/reviews                      /movies/get-movie-reviews

