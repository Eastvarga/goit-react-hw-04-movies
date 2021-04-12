import { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AppBar from "./component/AppBar";
// import HomePage from "./component/HomePage";
// import MoviesPage from "./component/MoviesPage";
// import MovieDetailsPage from "./component/MovieDetailsPage";

// import HomeView from "./component/views/HomeView";
// import MoviesView from "./component/views/MoviesView";
// import MovieDetailsView from "./component/views/MovieDetailsView";
import routes from "./routes";
import "modern-normalize/modern-normalize.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() =>
  import("./component/HomePage/index.jsx" /* webpackChunkName: "Home Page" */)
);
const MoviesPage = lazy(() =>
  import(
    "./component/MoviesPage/index.jsx" /* webpackChunkName: "Movies Page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./component/MovieDetailsPage/index.jsx" /* webpackChunkName: "MovieDetails Page" */
  )
);
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar />
        <Suspense
          fallback={
            <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
          }
        >
          <Switch>
            <Route exact path={routes.home} component={HomePage} />

            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default App;
