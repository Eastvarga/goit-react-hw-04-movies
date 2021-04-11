import MovieDetailsPage from "../MovieDetailsPage";
// import Reviews from "../Reviews";
// import Cast from "../Cast";
import { Component } from "react";
// import { Link, Route, Switch } from "react-router-dom";

class MovieDetailsView extends Component {
  render() {
    // console.log("MovieDetailsView props", this.props);
    return (
      <>
        <MovieDetailsPage />
        {/* <div>
          <p>Additional information</p>
          <ul>
            <li>
              <Link to={`${this.props.match.url}/cast`}>Cast</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
            </li>
          </ul>
        </div> */}
       
      </>
    );
  }
}

export default MovieDetailsView;
