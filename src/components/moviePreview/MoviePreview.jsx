import React from 'react';
import styles from './MoviePreview.module.css';

const MoviePreview = ({ title, poster_path, release_date }) => (
  <div className={styles.card}>
    <img
      src={
        poster_path
          ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`
          : ''
      }
      alt={`a poster to ${title} film`}
      className={styles.cardImg}
    />
    <div className={styles.cardBody}>
      <h5 className={styles.cardTitle}>
        {title.length > 31 ? (title = title.substring(0, 29) + '...') : title} (
        {`${release_date}`.substring(0, 4)})
      </h5>
    </div>
  </div>
);

export default MoviePreview;
