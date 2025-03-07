import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moviesDefault from '../../images/moviesDefault.jpg';
import FilterMovies from '../FilterMovies/FilterMovies.jsx';
import s from './MoviesList.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <>
      <FilterMovies />
      <ul className={s.title}>
        {movies?.map(movie => {
          return (
            <li key={movie.id} className={s.list}>
              <Link
                id={`/movies/${movie.id}`}
                className={s.link}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                <LazyLoadImage
                  width={273}
                  height={410}
                  className={s.images}
                  src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : moviesDefault}
                  alt={movie.title || movie.name}
                  effect="blur"
                  placeholder={false}
                />
                <div className={s.containerInfo}>
                  <p className={s.text}>{movie.title || movie.name}</p>
                  <span className={s.average}>{movie.vote_average.toFixed(1)}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
