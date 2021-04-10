import { Component } from "react";
import ApiService from "../services/apiServices";
class Cast extends Component {
  state = {
    cast: [],
  };
  componentDidMount() {
    ApiService.fetchMovieDetails(this.props.match.params.movieId, "cast").then(
      ({ cast }) => {
        // console.log("Cast fetch data", cast);
        this.setState({ cast: cast });
      }
    );
  }
  render() {
    // console.log("Cast props", this.props);
    return (
      <ul>
        {this.state.cast.length > 0 &&
          this.state.cast.map(
            ({ id, profile_path, original_name, character }) => {
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
            }
          )}
      </ul>
    );
  }
}

export default Cast;
