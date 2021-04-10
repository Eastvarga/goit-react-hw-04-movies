import { Component } from "react";
import { Route } from "react-router-dom";
import NavView from "./component/views/NavView";
import HomeView from "./component/views/HomeView";
import MoviesView from "./component/views/MoviesView";
import "modern-normalize/modern-normalize.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={NavView} />

        <Route exact path="/" component={HomeView} />
        <Route exact path="/movies" component={MoviesView} />
      </div>
    );
  }
}

export default App;
