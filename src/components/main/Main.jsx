import React, { Suspense, lazy } from 'react';
import { MainContainer } from './MainStyled';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loader from '../../shared/loader/Loader';

// import HomePage from '../../pages/HomePage/HomePage';
// import SearchPage from '../../pages/SearchPage/SearchPage';
// import NotFoundPage from '../../pages/NotFoundPage';
// import MovieDetailsPage from '../../pages/movieDetailsPage/movieDetailsPage';

const HomePage = lazy(() =>
  import('../../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const SearchPage = lazy(() =>
  import(
    '../../pages/SearchPage/SearchPage' /* webpackChunkName: "search-page" */
  ),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: "not-found-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/movieDetailsPage/movieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const Main = () => {
  return (
    <MainContainer>
      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Suspense>
      </div>
    </MainContainer>
  );
};

export default Main;
