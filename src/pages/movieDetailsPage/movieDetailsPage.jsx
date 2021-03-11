import React, { Component, Suspense, lazy } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/moviesAPI';
import Loader from '../../shared/loader/Loader';
// import MovieCast from '../../components/movieCast/MovieCast';
// import MovieReviews from '../../components/movieReview/MovieReviews';
import { MoviesContainer } from './movieDetailsPageStyled';

const MovieCast = lazy(() =>
  import(
    '../../components/movieCast/MovieCast' /* webpackChunkName: "movie-cast" */
  ),
);

const MovieReviews = lazy(() =>
  import(
    '../../components/movieReview/MovieReviews' /* webpackChunkName: "movie-review" */
  ),
);

const INITIAL_DATA = [
  'id',
  'title',
  'tagline',
  'vote_average',
  'vote_count',
  'overview',
  'popularity',
  'poster_path',
  'release_date',
  'genres',
];

class MovieDetailsPage extends Component {
  state = {};

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await fetchMovieDetails(movieId)
      .then(data => {
        // console.log(data);
        const newData = INITIAL_DATA.reduce((acc, item) => {
          acc[item] = data[item];
          return acc;
        }, {});
        // console.log(newData);
        this.setState({
          ...newData,
          from: this.props.location?.state?.from,
          search: this.props.location?.state?.search,
        });
      })
      .catch(error => console.log('ERROR >>:', error));

    // this.props.history.push(`${this.props.match.url}`);
  }

  handleGoBack = () => {
    const { history } = this.props;
    // if(location.state && location.state.from ) {
    // return history.push(location.state.from);
    //   }
    // history.push('/');

    this.state.from
      ? history.push({
          pathname: this.state.from.pathname,
          query: this.state.search,
        })
      : history.push('/');

    // history.push(
    //   this.state.from
    //     ? { pathname: this.state.from, search: this.state.search }
    //     : '/',
    // );
  };

  render() {
    const {
      id,
      title,
      tagline,
      vote_average,
      vote_count,
      overview,
      popularity,
      poster_path,
      release_date,
      genres,
    } = this.state;

    return (
      <MoviesContainer>
        <>
          <div className="titleContainer">
            <button
              type="button"
              onClick={this.handleGoBack}
              className="btnBack"
            >
              Go back
            </button>
            <h4>Movie details:</h4>{' '}
          </div>

          <div className="movieContainer">
            <div>
              <img
                src={
                  poster_path
                    ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`
                    : ''
                }
                alt={`a poster to ${title} film`}
                // width="240"
                className="movieImg"
              />
            </div>

            <div className="movieInfo">
              <h3>
                {title} ({`${release_date}`.substring(0, 4)})
              </h3>
              <i>{tagline}</i>
              <p>
                <b>Aver.: </b> {vote_average}
              </p>
              <p>
                <b>Votes: </b> {vote_count}
              </p>
              <p>
                <b>Pop-ty: </b> {popularity}
              </p>
              <p>
                <b>Genres: </b> {genres?.join(', ')}
              </p>
              <p>{overview}</p>
            </div>
          </div>

          <div className="addInfo">
            <h5>Additional information:</h5>
            <ul>
              <NavLink
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { from: this.props.location.state?.from },
                }}
                className="navLink"
                activeClassName="activeNavLink"
              >
                Cast
              </NavLink>

              <NavLink
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: { from: this.props.location.state?.from },
                }}
                className="navLink"
                activeClassName="activeNavLink"
              >
                Reviews
              </NavLink>
            </ul>
          </div>
        </>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path={`${this.props.match.url}/cast`}
              render={props => <MovieCast {...props} movieId={id} />}
            />
            <Route
              path={`${this.props.match.url}/reviews`}
              render={props => <MovieReviews {...props} movieId={id} />}
            />
          </Switch>
        </Suspense>
      </MoviesContainer>
    );
  }
}

export default MovieDetailsPage;
