import { Component, lazy, Suspense } from "react";
// import Reviews from "../Reviews";
// import Cast from "../Cast";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import ApiService from "../services/apiServices";
import routes from "../../routes";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Cast = lazy(() =>
  import("../Cast/index.jsx" /* webpackChunkName: "Cast component" */)
);
const Reviews = lazy(() =>
  import("../Reviews/index.jsx" /* webpackChunkName: "Reviews component" */)
);

class MovieDetailsPage extends Component {
  state = {
    movieDetails: null,
    location: null,
    isLoading: false,
  };
  componentDidMount() {
    this.setState({ location: this.props.location });
    //   console.log(
    //     "movieDetails componentDidMount",
    //     this.props.match.params.movieId
    //   );
    this.toggleSpinner(this.state);
    ApiService.fetchMovieDetails(this.props.match.params.movieId)
      .then((data) => {
        // console.log("data movieDetails", data);
        this.setState({ movieDetails: data });
      })
      .finally(() => this.toggleSpinner(this.state));
  }
  toggleSpinner({ isLoading }) {
    this.setState({ isLoading: !isLoading });
  }
  goBackHandler = () => {
    const { history } = this.props;
    const { location } = this.state;
    // console.log("history", history);
    if (location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }
    history.push(routes.home);
  };
  render() {
    // console.log("MovieDetails render this.state", this.state);
    // console.log("MovieDetails props", this.props);
    // const { title, vote_average, overview, genres } = this.state.movieDetails;
    return (
      <div>
        <button type="button" onClick={this.goBackHandler}>
          Go back
        </button>
        {this.state.isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {this.state.movieDetails && (
          <div>
            <img
              width="400"
              src={`https://image.tmdb.org/t/p/w780${this.state.movieDetails.backdrop_path}`}
              alt=""
            />
            <div>
              <h2>{this.state.movieDetails.title}</h2>
              <p>
                User Score: {Number(this.state.movieDetails.vote_average) * 10}%
              </p>
              <h3>Overview</h3>
              <p>{this.state.movieDetails.overview}</p>
              <h3>Genres</h3>
              <p>
                {this.state.movieDetails.genres.reduce(
                  (acc, { name }) => acc + " " + name,
                  ""
                )}
              </p>
            </div>
          </div>
        )}

        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div>
        <Suspense
          fallback={
            <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
          }
        >
          <Switch>
            <Route path={`${this.props.match.path}/cast`} component={Cast} />
            <Route
              path={`${this.props.match.path}/reviews`}
              component={Reviews}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default withRouter(MovieDetailsPage);
