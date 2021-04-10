import { Component } from "react";
import ApiService from "../services/apiServices";
import { Link } from "react-router-dom";

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
    const { query, page } = this.state;
    if (query !== "") {
      ApiService.fetchSearchMovie({ query: query, page: page }).then(
        ({ results }) => {
          //   console.log("On Form submit results: ", results);
          this.setState({ movies: [...results] });
        }
      );
    }
  };

  render() {
    // console.log("search page props", this.props);
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
              return (
                <li key={id}>
                  <Link to={`${this.props.match.url}/${id}`}>
                    {original_title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default MoviePage;
