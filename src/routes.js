import { lazy } from "react";
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

const routes = [
  {
    path: "/",
    label: "Home",
    component: HomePage,
    exact: true,
  },
  {
    path: "/movies",
    label: "Movies",
    component: MoviesPage,
    exact: true,
  },
  {
    path: "/movies/:movieId",
    label: "movieDetails",
    component: MovieDetailsPage,
  },
];
export default routes;
