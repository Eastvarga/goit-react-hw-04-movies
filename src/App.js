import { Suspense } from "react";
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
import "./index.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  return (
    <div className="container App">
      <AppBar />
      <Suspense
        fallback={
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        }
      >
        <Switch>
          {routes.map(({ path, exact, component }) => (
            <Route key={path} exact={exact} path={path} component={component} />
          ))}
          {/* <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} /> */}
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
