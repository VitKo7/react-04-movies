import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const keyAPI = process.env.REACT_APP_API_KEY;

export const fetchMovies = () => {
  return axios
    .get(`/trending/movie/day?api_key=${keyAPI}`)
    .then(response => response.data);
};
// https://api.themoviedb.org/3/trending/movie/day?api_key=8c70e92845ff03879b2dd3fe0ba57aa8

export const fetchMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?api_key=${keyAPI}&language=en-US`)
    .then(response => ({
      ...response.data,
      genres: [...response.data.genres.map(item => item.name)],
    }));
};

// https://api.themoviedb.org/3/movie/464052?api_key=8c70e92845ff03879b2dd3fe0ba57aa8&language=en-US

export const getMovieCast = movieId => {
  return axios
    .get(`/movie/${movieId}/credits?api_key=${keyAPI}&language=en-US`)
    .then(response => response.data);
};

// https://api.themoviedb.org/3/movie/464052/credits?api_key=8c70e92845ff03879b2dd3fe0ba57aa8&language=en-US

export const getMovieReview = movieId => {
  return axios
    .get(`/movie/${movieId}/reviews?api_key=${keyAPI}&language=en-US&page=1`)
    .then(response => response.data);
};

// https://api.themoviedb.org/3/movie/464052/reviews?api_key=8c70e92845ff03879b2dd3fe0ba57aa8&language=en-US&page=1

export const searchMovies = query => {
  return axios
    .get(`/search/movie?api_key=${keyAPI}&language=en-US&page=1&query=${query}`)
    .then(response => response.data);
};

// https://api.themoviedb.org/3/search/movie?api_key=8c70e92845ff03879b2dd3fe0ba57aa8&language=en-US&page=1&query=car

// https://api.themoviedb.org/3/genre/movie/list?api_key=8c70e92845ff03879b2dd3fe0ba57aa8&language=en-US
