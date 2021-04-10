import { Component } from "react";
import Reviews from "../Reviews";
import Cast from "../Cast";
class MovieDetails extends Component {
  render() {
    return (
      <div>
        <button type="button">Go back</button>
        <div>
          <img src="" alt="" />
          <div>
            <h2>Film Name</h2>
            <p>User Score: some score</p>
            <h3>Overview</h3>
            <p>Some overview</p>
            <h3>Genres</h3>
            <p>array of ganres</p>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <Cast />
          <Reviews />
        </div>
      </div>
    );
  }
}

export default MovieDetails;
