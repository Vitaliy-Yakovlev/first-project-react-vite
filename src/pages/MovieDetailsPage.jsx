import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, useRouteMatch, Route, Switch } from 'react-router-dom';
import * as movieShelfAPI from '../services/movieshelf-api.js';
import PageHeading from '../components/PageHeading/PageHeading.jsx';
import MovieListId from '../components/MovieListId/MovieListId.jsx';
import NavLinkListId from '../components/NavLinkListId/NavLinkListId.jsx';
// import Animations from '../components/Animations/Animations.jsx';
// import MovieReviews from '../components/MovieReviews/MovieReviews.jsx';
import Spinner from '../components/Loader/Loader';

const Animations = lazy(() => import('../components/Animations/Animations.jsx' /*webpackChunkName: "animations" */));
const MovieReviews = lazy(() =>
  import('../components/MovieReviews/MovieReviews.jsx' /*webpackChunkName: "movies-review" */),
);
const IMG_URL = 'https://image.tmdb.org/t/p/original';

export default function MoviesPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [actor, setActor] = useState(null);
  const [page, setPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [VideoIdEnglish, setVideoIdEnglish] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    movieShelfAPI
      .fetchMovieById(movieId)
      .then(setMovie)
      .finally(() => setIsLoading(false));
  }, [movieId]);

  useEffect(() => {
    movieShelfAPI.fetchMovieActorById(movieId).then(setActor);
  }, [movieId]);

  useEffect(() => {
    movieShelfAPI.fetchMoviePageById(movieId).then(setPage);
  }, [movieId]);

  useEffect(() => {
    movieShelfAPI.fetchMovieVideoByIdEnglish(movieId).then(setVideoIdEnglish);

    movieShelfAPI.fetchMovieVideoById(movieId).then(setVideoId);
  }, [movieId]);

  return (
    <>
      {isLoading && <Spinner />}
      <PageHeading text={`Movie`} />

      {movie && <MovieListId movie={movie} IMG_URL={IMG_URL} video={videoId} VideoIdEnglish={VideoIdEnglish} />}

      <NavLinkListId routeMatch={url} />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path={`${url}/cast`}>{actor && <Animations actor={actor} />}</Route>

          <Route path={`${url}/reviews`}>{page && <MovieReviews page={page} />}</Route>
        </Switch>
      </Suspense>
    </>
  );
}
