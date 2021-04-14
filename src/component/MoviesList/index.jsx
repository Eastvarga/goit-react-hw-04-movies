import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.length > 0 &&
        movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${id}`,
                  state: { from: location },
                }}
              >
                {original_title}
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

// class MoviesList extends Component {
//   render() {
//     const { movies } = this.props;
//   }
// }
MoviesList.propTypes = {
  location: PropTypes.object,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
    })
  ),
};
export default withRouter(MoviesList);
