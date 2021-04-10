import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavView from "./component/views/NavView";
import HomeView from "./component/views/HomeView";
import MoviesView from "./component/views/MoviesView";
import MovieDetailsView from "./component/views/MovieDetailsView";

import "modern-normalize/modern-normalize.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" component={NavView} />
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/movies" component={MoviesView} />
          <Route path="/movies/:movieId" component={MovieDetailsView} />
        </Switch>
      </div>
    );
  }
}

export default App;
