import { useState, useEffect } from 'react';
// import { IoReloadSharp } from 'react-icons/io5';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as movieShelfAPI from '../services/movieshelf-api.js';
import PageHeading from '../components/PageHeading/PageHeading.jsx';
import MoviesList from '../components/MoviesList/MoviesList.jsx';
import UpArrowBtn from '../components/UpArrowBtn/UpArrowBtn.jsx';
import Spinner from '../components/Loader/Loader';
import useSessionStorage from '../Hook/useSessionStorage.js';

export default function MoviesPage() {
  // const [movies, setMovies] = useState(
  //   () => JSON.parse(window.sessionStorage.getItem('movies')) ?? [],
  // );
  const [currentPage, setCurrentPage] = useState(() => JSON.parse(window.sessionStorage.getItem('currentPage')) ?? 1);

  const [movies, setMovies] = useSessionStorage('movies', []);
  // const [currentPage, setCurrentPage] = useSessionStorage('currentPage', 1);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentPage !== JSON.parse(window.sessionStorage.getItem('currentPage'))) {
      setIsLoading(true);
      movieShelfAPI
        .fetchMovies(currentPage)
        .then(data => {
          setMovies(prev => [...prev, ...data.results]);

          // TODO: Добавляет плавный Scroll в низ при нажатии на Loader
          // if (currentPage > 1) {
          //   setTimeout(() => {
          //     window.scrollBy({
          //       top: document.documentElement.clientHeight - 120,
          //       behavior: 'smooth',
          //     });
          //   }, 600);
          // }
        })
        .finally(() => setIsLoading(false));
    }
  }, [currentPage, movies, setMovies]);

  // useEffect(() => {
  //   window.sessionStorage.setItem('movies', JSON.stringify(movies));
  // }, [movies]);

  useEffect(() => {
    window.sessionStorage.setItem('currentPage', JSON.stringify(currentPage));
  }, [currentPage]);

  // TODO : Замена "Infinite Scroll" на кнопку "Loader"
  // const onClickBtn = () => {
  //   setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  // };

  function onNextPages() {
    setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
  }

  // movies.map(element => {
  //   if (element.id === 335983) {
  //     setTimeout(() => {
  //       const element = document.getElementById(335983);

  //       if (element) {
  //         return element.scrollIntoView();
  //       }
  //     }, 500);
  //   }

  //   return element;
  // });

  return (
    <>
      {isLoading && <Spinner />}
      <InfiniteScroll dataLength={currentPage} next={() => onNextPages()} scrollThreshold="0px" hasMore={true}>
        <PageHeading text="Trending today" />
        {movies && <MoviesList movies={movies} />}
      </InfiniteScroll>

      <UpArrowBtn />
      {
        // TODO: Замена "Infinite Scroll" на кнопку "Loader"
        /* {!isLoading && (
        <button onClick={onClickBtn} type="button" className="btnLoadMoreSharp">
          <IoReloadSharp className="loadMoreSharp" />
        </button>
      )} */
      }
    </>
  );
}
