import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';
import { fetchMovies } from '../../services/moviesAPI';
// import movies from '../../data/moviesDB.json';
// const INITIAL_STATE = [...movies];

class HomePage extends Component {
  state = {
    // movies: [...INITIAL_STATE],
    movies: [],
  };

  async componentDidMount() {
    await fetchMovies()
      .then(data => {
        this.setState({ movies: [...data.results] });
      })
      .catch(error => console.log('ERROR >>:', error));
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props;

    return (
      <div>
        <h3>Trending Today: </h3>
        <MovieList movies={movies} location={location} />
      </div>
    );
  }
}

export default withRouter(HomePage);
