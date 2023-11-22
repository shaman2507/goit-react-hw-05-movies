import axios from 'axios';

const API_KEY = '0b79c5bca8197408ee9617cf88710b12';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const axiosAPI = async (searchMovie, per_page = 12, page = 1) => {
  return await axios({
    params: {
      key: API_KEY,
      page: page,
      per_page: per_page,
      q: searchName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
};