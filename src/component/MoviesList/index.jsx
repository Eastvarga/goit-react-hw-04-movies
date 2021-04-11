import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class MoviesList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <ul>
        {movies.length > 0 &&
          movies.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default withRouter(MoviesList);
