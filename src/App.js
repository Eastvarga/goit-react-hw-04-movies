import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./component/AppBar";
import HomePage from "./component/HomePage";
import MoviesPage from "./component/MoviesPage";
import MovieDetailsPage from "./component/MovieDetailsPage";
// import HomeView from "./component/views/HomeView";
// import MoviesView from "./component/views/MoviesView";
// import MovieDetailsView from "./component/views/MovieDetailsView";
import routes from "./routes";
import "modern-normalize/modern-normalize.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
