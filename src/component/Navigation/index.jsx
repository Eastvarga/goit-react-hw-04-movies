import { Component } from "react";
import { navigation } from "./styles.module.css";
class Navigation extends Component {
  render() {
    return (
      <ul className={navigation}>
        <li>Home Link</li>
        <li>Movies link</li>
      </ul>
    );
  }
}
export default Navigation;
