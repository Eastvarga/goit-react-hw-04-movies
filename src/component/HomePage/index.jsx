import { Component } from "react";
import { Link } from "react-router-dom";
import ApiService from "../services/apiServices";
class HomePage extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    ApiService.fetchTrendigMovies().then(({ results }) => {
      //   console.log(results);
      this.setState({ movies: results });
    });
  }
  render() {
    const movies = this.state.movies;
    // console.log("HomePage props", this.props);
    return (
      <ul>
        {movies.length > 0 &&
          movies.map(({ original_title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          ))}
      </ul>
    );
  }
}

export default HomePage;
