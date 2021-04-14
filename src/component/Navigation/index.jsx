import { NavLink } from "react-router-dom";
// import {
//   navigation,
//   navigationLink,
//   navigationLinkActive,
// } from "./styles.module.css";
import routes from "../../routes";

const Navigation = () => {
  return (
    <nav className="nav mb-2 mt-2 shadow-bot">
      <NavLink
        exact
        to={routes[0].path}
        className="nav-link font-weight-bold  d-inline-flex p-2 mr-2"
        activeClassName="text-danger"
      >
        Home
      </NavLink>
      <NavLink
        to={routes[1].path}
        className="nav-link font-weight-bold d-inline-flex p-2"
        activeClassName="text-danger"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
