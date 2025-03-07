import ClipLoader from 'react-spinners/ClipLoader';
import s from './Loader.module.css';

const Spinner = () => (
  <ClipLoader
    color="rgba(0, 200, 255, 0.694)"
    aria-label="Loading Spinner"
    data-testid="loader"
    size={100}
    className={s.spinnerStyle}
  />
);

export default Spinner;
