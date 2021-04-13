import { Component } from "react";
import ApiService from "../services/apiServices";
import { withRouter } from "react-router-dom";
import MoviesList from "../MoviesList";
import queryString from "query-string";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const getCategoryFromProps = (props) =>
  queryString.parse(props.location.search).query;

class MoviePage extends Component {
  state = {
    query: "",
    movies: [],
    page: 1,
    isLoading: false,
  };
  componentDidMount() {
    const query = getCategoryFromProps(this.props);
    // console.log("query before if", query);
    // console.log("this.props before if", this.props);
    if (query) {
      // console.log("query IN if", query);
      const { page } = this.state;
      this.toggleSpinner(this.state);
      ApiService.fetchSearchMovie({ query: query, page: page })
        .then(({ results }) => {
          //   console.log("On Form submit results: ", results);
          this.setState({ movies: [...results] });
        })
        .finally(() => this.toggleSpinner(this.state));
    }
  }
  componentDidUpdate(prevProps) {
    const prevQuery = getCategoryFromProps(prevProps);
    const nextQuery = getCategoryFromProps(this.props);
    // console.log("nextQuery", nextQuery);
    if (prevQuery !== nextQuery) {
      const { page } = this.state;
      this.toggleSpinner(this.state);
      ApiService.fetchSearchMovie({ query: nextQuery, page: page })
        .then(({ results }) => {
          //   console.log("On Form submit results: ", results);
          this.setState({ movies: [...results] });
        })
        .finally(() => this.toggleSpinner(this.state));
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
  toggleSpinner({ isLoading }) {
    this.setState({ isLoading: !isLoading });
  }
  render() {
    // console.log("search page props", this.props);
    const { movies, isLoading, query } = this.state;
    return (
      <div className="container">
        <form
          onSubmit={this.searchSubmit}
          className="mb-3 row align-items-start"
        >
          <label className="label">
            <input
              type="text"
              name="query"
              value={query}
              onChange={this.handleChange}
              className="form-control form-control-sm"
            />
          </label>
          <button type="submit" className="btn btn-primary ml-2 btn-sm">
            Search
          </button>
        </form>
        {movies.length > 0 && isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {!isLoading && <MoviesList movies={movies} />}
      </div>
    );
  }
}
MoviePage.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }),
  history: PropTypes.shape({
    location: PropTypes.shape({
      search: PropTypes.string,
      pathname: PropTypes.string,
    }),
  }),
};
export default withRouter(MoviePage);
