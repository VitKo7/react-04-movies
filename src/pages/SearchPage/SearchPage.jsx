import React, { Component} from 'react';
import MovieList from '../../components/movieList/MovieList';
import { searchMovies } from '../../services/moviesAPI';
import styles from './SearchPage.module.css';

class SearchPage extends Component {
  state = {
    search: '',
    results: [],
    isSearching: false,
  };

  componentDidMount() {
    if (this.props.location.query) {
      this.setState({ search: this.props.location.query });

      searchMovies(this.props.location.query)
        .then(data => {
          // console.log(data.results);
          this.setState({ results: [...data.results] });

          this.props.history.push({
            pathname: `${this.props.match.url}`,
            search: `query=${this.props.location.query}`,
          });
        })
        .catch(error => console.log('ERROR >>:', error))
        .finally(
          this.setState(prevState => ({ isSearching: !prevState.isSearching })),
        );
    }
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    searchMovies(this.state.search)
      .then(data => {
        // console.log(data.results);
        this.setState({ results: [...data.results] });
        this.props.history.push({
          pathname: `${this.props.match.url}`,
          search: `query=${this.state.search}`,
        });
      })
      .catch(error => console.log('ERROR >>:', error))
      .finally(
        this.setState(prevState => ({ isSearching: !prevState.isSearching })),
      );
  };

  render() {
    const { search, results: movies, isSearching } = this.state;
    const { location } = this.props;
    return (
      <div className={styles.searchSection}>
        <div className={styles.search}>
          <form className={styles.searchForm} onSubmit={this.handleSubmit}>
            <input
              className={styles.searchFormInput}
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movies..."
              value={search}
              onChange={this.handleInput}
            />

            <button type="submit" className={styles.searchFormButton}></button>
          </form>
        </div>

        {isSearching ? (
          <div className={styles.searchResults}>
            <h3>Search results: </h3>
            <MovieList movies={movies} location={location} search={search} />
          </div>
        ) : (
          <p>You may try to search any film here ...</p>
        )}
      </div>
    );
  }
}

export default SearchPage;
