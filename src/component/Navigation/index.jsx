import { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  navigation,
  navigationLink,
  navigationLinkActive,
} from "./styles.module.css";

class Navigation extends Component {
  render() {
    return (
      <ul className={navigation}>
        <li>
          <NavLink
            exact
            to="/"
            className={navigationLink}
            activeClassName={navigationLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={navigationLink}
            activeClassName={navigationLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default Navigation;
