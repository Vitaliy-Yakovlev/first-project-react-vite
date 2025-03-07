import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api.js';
import queryString from 'query-string';
// import { IoReloadSharp } from 'react-icons/io5';
import { toast } from 'react-toastify';
import InfiniteScroll from 'react-infinite-scroll-component';
import PageHeading from '../components/PageHeading/PageHeading.jsx';
import Form from '../components/Form/Form.jsx';
import MoviesList from '../components/MoviesList/MoviesList.jsx';
import Spinner from '../components/Loader/Loader';
import UpArrowBtn from '../components/UpArrowBtn/UpArrowBtn.jsx';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const location = useLocation();
  const { query } = queryString.parse(location.search);

  useEffect(() => {
    setIsLoading(true);

    if (!query) {
      setIsLoading(false);
      return;
    }

    movieShelfAPI
      .fetchMovieKeywordById(query, currentPage)
      .then(data => {
        setMovies(prev => [...prev, ...data.results]);

        if (!data.total_pages) {
          toast.warning('Не верный запрос');
          return;
        }

        setTotalPages(data.total_pages);

        setIsLoading(false);

        // if (currentPage > 2) {
        //   setTimeout(() => {
        //     window.scrollBy({
        //       top: document.documentElement.clientHeight - 120,
        //       behavior: 'smooth',
        //     });
        //   }, 600);
        // }
      })
      .finally(() => setIsLoading(false));
  }, [query, currentPage, searchQuery]);

  const handleSubmit = searchQuery => {
    if (query === searchQuery) {
      toast.warning('Введите другой запрос');
      return;
    }

    setSearchQuery(searchQuery);
    setCurrentPage(1);
    setMovies([]);
  };

  // TODO : Замена "Infinite Scroll" на кнопку "Loader"
  // const onClickBtn = () => {
  //   if (currentPage === totalPages) {
  //     toast.warning('Фильмов больше не найдено');
  //     return;
  //   }

  //   setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  //   setSearchQuery(searchQuery);
  // };

  const onNextPages = () => {
    if (currentPage === totalPages) {
      toast.warning('Фильмов больше не найдено');
      return;
    }

    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    setSearchQuery(searchQuery);
  };

  return (
    <>
      {isLoading && <Spinner />}

      <PageHeading text={movies.length === 0 ? 'Movies not found' : 'Movies'} />
      <Form onSubmit={handleSubmit} />

      <InfiniteScroll dataLength={currentPage} next={() => onNextPages()} hasMore={true}>
        {movies && <MoviesList movies={movies} />}
      </InfiniteScroll>

      {
        // TODO : Замена "Infinite Scroll" на кнопку "Loader"
        /* {movies.length > 1 && (
        <button onClick={onClickBtn} type="button" className="btnLoadMoreSharp">
          <IoReloadSharp className="loadMoreSharp" />
        </button>
      )} */
      }
      {movies && <UpArrowBtn />}
    </>
  );
}
