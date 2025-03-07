import PropTypes from 'prop-types';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack.jsx';
import moviesDefault from '../../images/moviesDefault.jpg';
import s from './MovieListId.module.css';
import Modal from '../Modal/VideoModal/VideoModal.jsx';

function MovieListId({ movie, IMG_URL, video, VideoIdEnglish }) {
  const genresMovie = movie['genres'].map(genre => genre.name).join(' | ');

  return (
    <>
      <ButtonGoBack />
      <div className={s.container}>
        <div className={s.containerImg}>
          <p className={s.average}>{movie.vote_average.toFixed(1)}</p>
          <Modal video={video} VideoIdEnglish={VideoIdEnglish} />
          <img
            className={s.images}
            src={
              movie.poster_path
                ? `${IMG_URL}${movie.poster_path}`
                : moviesDefault
            }
            alt={movie.title}
          />
        </div>
        <div className={s.containerInfo}>
          <h2 className={s.desc}>{movie.title} </h2>
          <p className={s.text}>
            <span className={s.spanText}>Genres :</span>
            {genresMovie}
          </p>
          <p className={s.text}>
            <span className={s.spanText}>Release date :</span>
            {movie.release_date}
          </p>
          <p className={s.about}>ABOUT</p>
          <p className={s.overview}>{movie.overview}</p>
        </div>
      </div>
    </>
  );
}

MovieListId.propTypes = {
  movie: PropTypes.object.isRequired,
  IMG_URL: PropTypes.string.isRequired,
};

export default MovieListId;
