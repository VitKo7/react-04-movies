import React, { Component } from 'react';
import { getMovieReview } from '../../services/moviesAPI';
import styles from './MovieReviews.module.css';

class MovieReviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    await getMovieReview(movieId)
      .then(data => {
        // console.log(data.results);

        this.setState({ reviews: [...data.results] });
      })
      .catch(error => console.log('ERROR >>:', error));
  }

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <h3>MovieReviews:</h3>
        {reviews.length === 0 ? (
          <p>There are no reviews yet...</p>
        ) : (
          <ul className={styles.ReviewsList}>
            {reviews.map(item => (
              <li className={styles.ReviewsListItem} key={item.id}>
                <h5 className={styles.ReviewsListItemTitle}>
                  <i>by </i>
                  {item.author}
                </h5>
                <span>
                  <i>{`${item.created_at}`.substring(0, 10)}</i>
                </span>
                <p className={styles.ReviewsListItemContent}>
                  {item.content.length > 300
                    ? (item.content = item.content.substring(0, 300) + '...')
                    : item.content}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default MovieReviews;
