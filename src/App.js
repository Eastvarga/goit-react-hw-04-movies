import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./component/AppBar";
import HomeView from "./component/views/HomeView";
import MoviesView from "./component/views/MoviesView";
import MovieDetailsView from "./component/views/MovieDetailsView";
import routes from "./routes";
import "modern-normalize/modern-normalize.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Switch>
          <Route exact path={routes.home} component={HomeView} />
          <Route exact path={routes.movies} component={MoviesView} />
          <Route path={routes.movieDetails} component={MovieDetailsView} />
        </Switch>
      </div>
    );
  }
}

export default App;
