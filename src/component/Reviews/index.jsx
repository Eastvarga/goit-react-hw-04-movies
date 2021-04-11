import { Component } from "react";
import { withRouter } from "react-router-dom";
import ApiService from "../services/apiServices";
class Rewiews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    ApiService.fetchMovieDetails(
      this.props.match.params.movieId,
      "reviews"
    ).then(({ results }) => {
      //   console.log("Rewiews fetch data", results);
      this.setState({ reviews: results });
    });
  }
  render() {
    return (
      <ul>
        {this.state.reviews.length > 0 ? (
          this.state.reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <h3>Autor: {author}</h3>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <li>Ops, there are no data</li>
        )}
      </ul>
    );
  }
}

export default withRouter(Rewiews);
