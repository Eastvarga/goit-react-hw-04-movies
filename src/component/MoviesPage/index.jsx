import { Component } from "react";
import ApiService from "../services/apiServices";
import { withRouter } from "react-router-dom";
import MoviesList from "../MoviesList";
import queryString from "query-string";

const getCategoryFromProps = (props) =>
  queryString.parse(props.location.search).query;

class MoviePage extends Component {
  state = {
    query: "",
    movies: [],
    page: 1,
  };
  componentDidMount() {
    const query = getCategoryFromProps(this.props);
    console.log("query before if", query);
    // console.log("this.props before if", this.props);
    if (query) {
      console.log("query IN if", query);
      const { page } = this.state;
      ApiService.fetchSearchMovie({ query: query, page: page }).then(
        ({ results }) => {
          //   console.log("On Form submit results: ", results);
          this.setState({ movies: [...results] });
        }
      );
    }
  }
  componentDidUpdate(prevProps) {
    const prevQuery = getCategoryFromProps(prevProps);
    const nextQuery = getCategoryFromProps(this.props);
    console.log("nextQuery", nextQuery);
    if (prevQuery !== nextQuery) {
      const { page } = this.state;
      ApiService.fetchSearchMovie({ query: nextQuery, page: page }).then(
        ({ results }) => {
          //   console.log("On Form submit results: ", results);
          this.setState({ movies: [...results] });
        }
      );
    }
  }
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  searchSubmit = (event) => {
    event.preventDefault();
    const { query } = this.state;
    if (query !== "") {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${query}`,
      });
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
        <MoviesList movies={movies} />
      </div>
    );
  }
}

export default withRouter(MoviePage);
