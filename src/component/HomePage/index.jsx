import { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiService from "../services/apiServices";
import MoviesList from "../MoviesList";
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
    const { movies } = this.state;
    // console.log("HomePage props", this.props);
    return (
      <>
        <h1>Trending films</h1>
        <MoviesList movies={movies} />
      </>
    );
  }
}

export default withRouter(HomePage);
