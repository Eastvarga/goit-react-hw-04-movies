import { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiService from "../services/apiServices";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
class Rewiews extends Component {
  state = {
    reviews: [],
    isLoading: false,
    isEmpty: false,
  };
  componentDidMount() {
    this.toggleSpinner(this.state);
    ApiService.fetchMovieDetails(this.props.match.params.movieId, "reviews")
      .then(({ results }) => {
        //   console.log("Rewiews fetch data", results);
        this.checkForEmpty(results);
        this.setState({ reviews: results });
      })
      .catch((error) => {
        console.log("Rewiews", error);
        this.toggleSpinner(this.state);
      })
      .finally(() => this.toggleSpinner(this.state));
  }
  checkForEmpty(array) {
    if (array.length > 0) {
      this.setState({ isEmpty: false });
      return;
    }
    this.setState({ isEmpty: true });
  }
  toggleSpinner({ isLoading }) {
    this.setState({ isLoading: !isLoading });
  }
  render() {
    return (
      <ul>
        {this.state.isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={40} width={40} />
        )}
        {this.state.reviews.length > 0 &&
          this.state.reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Autor: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        {this.state.isEmpty && <li>Ops, there are no data</li>}
      </ul>
    );
  }
}

export default withRouter(Rewiews);
