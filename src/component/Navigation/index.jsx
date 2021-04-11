import { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  navigation,
  navigationLink,
  navigationLinkActive,
} from "./styles.module.css";
import routes from "../../routes";

class Navigation extends Component {
  render() {
    return (
      <nav className={navigation}>
        <NavLink
          exact
          to={routes.home}
          className={navigationLink}
          activeClassName={navigationLinkActive}
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={navigationLink}
          activeClassName={navigationLinkActive}
        >
          Movies
        </NavLink>
      </nav>
    );
  }
}
export default Navigation;
