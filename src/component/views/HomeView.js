import HomePage from "../HomePage";
import { Component } from "react";

class HomeView extends Component {
  render() {
    // console.log("HomeView props", this.props);
    return <HomePage {...this.props} />;
  }
}

export default HomeView;
