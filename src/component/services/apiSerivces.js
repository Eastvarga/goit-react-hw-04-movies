import axios from "axios";

import key from "../../apiHandle";
const trendingFilter = "/trending/movie/week";
const serchFilter = "/search/movie";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

const fetchTrendigMovies = () => {
  return axios.get(`${trendingFilter}?api_key=${key}`).then(({ data }) => {
    // console.log(data);
    return data;
  });
};
const fetchSearchMovie = ({ query, page }) => {
  return axios
    .get(
      `${serchFilter}?api_key=${key}&language=en-US&query=${query}&page=${page}`
    )
    .then(({ data }) => {
      console.log(data);
      return data;
    });
};

const ApiService = {
  fetchTrendigMovies,
  fetchSearchMovie,
};
export default ApiService;
