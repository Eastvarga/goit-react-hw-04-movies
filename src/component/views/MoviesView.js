import MoviesPage from "../MoviesPage";
import { Component } from "react";

class MoviesView extends Component {
  render() {
    // console.log("MoviesView props", this.props);
    return <MoviesPage {...this.props} />;
  }
}

export default MoviesView;
