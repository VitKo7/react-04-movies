import React, { Component } from 'react';
import { getMovieCast } from '../../services/moviesAPI';
// import notFound from '../../images/notfound.png';
import styles from './MovieCast.module.css';

export default class MovieCast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    await getMovieCast(movieId)
      .then(data => {
        // console.log(data.cast);

        this.setState({ cast: [...data.cast] });
      })
      .catch(error => console.log('ERROR >>:', error));
  }

  render() {
    const { cast } = this.state;

    return (
      <div>
        <h3>MovieCast:</h3>
        <ul className={styles.CastList}>
          {cast.map(item => (
            <li className={styles.CastListItem} key={item.id}>
              <img
                src={
                  item.profile_path
                    ? `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.profile_path}`
                    : // : { notFound }
                      'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg'
                }
                alt={item.original_name}
                className={styles.CastListItemImg}
              />
              <p className={styles.CastListItemName}>{item.name} </p>
              <span>
                <i>in the role of</i>
              </span>
              <p className={styles.CastListItemCharacter}>
                <b>
                  <i> {item.character}</i>
                </b>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
