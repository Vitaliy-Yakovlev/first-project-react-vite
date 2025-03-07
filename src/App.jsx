import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar.jsx';
import Container from './components/Container/Container.jsx';
import Loader from './components/Loader/Loader';
// import HomePage from './pages/HomePage.jsx';
// import MoviesPage from './pages/MoviesPage.jsx';
// import MovieDetailsPage from './pages/MovieDetailsPage.jsx';
// import NotFoundPage from './pages/NotFoundPage.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx' /* webpackChunkName: "home-page"*/));
const MoviesPage = lazy(() => import('./pages/MoviesPage.jsx' /* webpackChunkName: "movies-page"*/));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page"*/));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx' /* webpackChunkName: "not-found-page"*/));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <ToastContainer autoClose={3000} />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path={`/movies/:movieId`}>
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
