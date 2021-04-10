import { Component } from "react";
import ApiService from "../services/apiSerivces";
class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    ApiService.fetchTrendigMovies().then(({ results }) => {
      console.log(results);
      this.setState({ movies: results });
    });
  }
  render() {
    const movies = this.state.movies;
    return (
      <ul>
        {movies.length > 0 &&
          movies.map(({ original_title, id }) => (
            <li key={id}>{original_title}</li>
          ))}
      </ul>
    );
  }
}

export default HomePage;
