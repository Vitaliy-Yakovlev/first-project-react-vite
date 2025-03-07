import { GrFormPreviousLink } from 'react-icons/gr';
import { useLocation, useHistory } from 'react-router-dom';
import s from './ButtonGoBack.module.css';

function ButtonGoBack() {
  const location = useLocation();
  const history = useHistory();

  const onGoBack = () => {
    history.push(location?.state?.from ?? '/');

    setTimeout(() => {
      const element = document.getElementById(location.pathname);

      if (element) {
        return element.scrollIntoView();
      }
    }, 0);
  };

  return (
    <GrFormPreviousLink
      type="button"
      onClick={onGoBack}
      className={s.btn}
    ></GrFormPreviousLink>
  );
}

export default ButtonGoBack;
