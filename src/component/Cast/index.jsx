import { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiService from "../../services/apiServices";
import Loader from "react-loader-spinner";
import PropTypes from "prop-types";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
class Cast extends Component {
  state = {
    cast: [],
    isLoading: false,
    isEmpty: false,
  };
  componentDidMount() {
    this.toggleSpinner(this.state);
    ApiService.fetchMovieDetails(this.props.match.params.movieId, "cast")
      .then(({ cast }) => {
        // console.log("Cast fetch data", cast);
        this.checkForEmpty(cast);
        this.setState({ cast: cast });
      })
      .catch((error) => {
        console.log("Cast", error);
        this.toggleSpinner(this.state);
      })
      .finally(() => this.toggleSpinner(this.state));
  }
  checkForEmpty(array) {
    if (array.length > 0) {
      this.setState({ isEmpty: false });
      return;
    }
    this.setState({ isEmpty: true });
  }
  toggleSpinner({ isLoading }) {
    this.setState({ isLoading: !isLoading });
  }
  render() {
    // console.log("Cast props", this.props);
    const { isLoading, cast, isEmpty } = this.state;
    return (
      <ul>
        {isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {cast.length > 0 &&
          cast.map(({ id, profile_path, original_name, character }) => {
            return (
              <li key={id}>
                <img
                  width="120"
                  src={`https://image.tmdb.org/t/p/w154${profile_path}`}
                  alt=""
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        {isEmpty && <li>Ops, there are no data</li>}
      </ul>
    );
  }
}
Cast.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.exact({
      movieId: PropTypes.string.isRequired,
    }),
  }),
};
export default withRouter(Cast);
