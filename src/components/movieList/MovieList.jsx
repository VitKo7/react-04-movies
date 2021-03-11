import React from 'react';
import { Link } from 'react-router-dom';
import MoviePreview from '../moviePreview/MoviePreview';
import styles from './MovieList.module.css';

const MovieList = ({ movies, location, search }) => {
  return (
    <div>
      <ul className={styles.MoviesList}>
        {movies.map(movie => (
          <li className="MoviesListItem" key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location, search },
              }}
            >
              <MoviePreview
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
