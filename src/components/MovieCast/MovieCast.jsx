import PropTypes from 'prop-types';
import s from './MovieCast.module.css';

function MovieCast({ actor, defaultImg, IMG_URL }) {
  if (actor.cast.length === 0) {
    return <p className={s.error}>No cast information.</p>;
  }

  return (
    <ul className={s.title}>
      {actor['cast'].map(actor => (
        <li key={actor.cast_id} className={s.list}>
          <img
            className={s.images}
            src={actor.profile_path ? `${IMG_URL}${actor.profile_path}` : defaultImg}
            alt={actor.original_name || actor.character}
            width="100"
          />
          <div className={s.containerInfo}>
            <p className={s.text}>{actor.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

MovieCast.propTypes = {
  actor: PropTypes.object.isRequired,
  defaultImg: PropTypes.string.isRequired,
  IMG_URL: PropTypes.string.isRequired,
};

export default MovieCast;
