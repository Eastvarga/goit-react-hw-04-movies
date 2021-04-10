import MovieDetailsPage from "../MovieDetailsPage";
import Reviews from "../Reviews";
import Cast from "../Cast";
import { Component } from "react";
import { Route, Switch } from "react-router-dom";
class MovieDetailsView extends Component {
  render() {
    // console.log("MovieDetailsView props", this.props);
    return (
      <>
        <MovieDetailsPage {...this.props} />
        <Switch>
          <Route path={`${this.props.match.path}/cast`} component={Cast} />
          <Route
            path={`${this.props.match.path}/reviews`}
            component={Reviews}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsView;
