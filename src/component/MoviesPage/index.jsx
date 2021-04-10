import { Component } from "react";
import ApiService from "../services/apiSerivces";

class MoviePage extends Component {
  state = {
    query: "",
    movies: [],
    page: 1,
  };
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  searchSubmit = (event) => {
    event.preventDefault();
    const { query, page, movies } = this.state;
    if (query !== "") {
      ApiService.fetchSearchMovie({ query: query, page: page }).then(
        ({ results }) => {
          console.log("On Form submit results: ", results);
          this.setState({ movies: [...movies, ...results] });
        }
      );
    }
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <form onSubmit={this.searchSubmit}>
          <label>
            <input
              type="text"
              name="query"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        <ul>
          {movies.length > 0 &&
            movies.map(({ id, original_title }) => {
              return <li key={id}>{original_title}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default MoviePage;
