import React, { ReactNode, lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import './style.css';

const ErrorBoundary = lazy(() => import('./ErrorBoundary'));

const CounterView = lazy(() => import('views/Test'));
const AccountView = lazy(() => import('views/AccountView'));
const MainView = lazy(() => import('views/MainView'));

const DefaultLayout = lazy(() => import('layouts/DefaultLayout'));
const AccountLayout = lazy(() => import('layouts/AccountLayout'));
const MainLayout = lazy(() => import('layouts/MainLayout'));

// import PageNotFoundView from './error/PageNotFoundView';

interface RouteType {
  name?: string;
  children?: ReactNode;
}

// TODOs
const Route: React.FC<RouteType> = (): JSX.Element => {
  const isToken = false;

  const exampleRoutes = {
    path: '/example',
    element: <DefaultLayout />,
    children: [{ path: '/', element: <CounterView /> }],
  };

  const mainRoutes = {
    path: '/',
    element: isToken ? <MainLayout /> : <Navigate to="/example" />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <MainView /> },
      {
        path: '404',
        element: (
          <>
            <p>Not found</p>
          </>
        ),
      },
      { path: 'account', element: <Navigate to="/account/add" /> },
    ],
  };

  const accountRoutes = {
    path: 'account',
    element: isToken ? <AccountLayout /> : <Navigate to="/example" />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: ':id', element: <AccountView /> },
      { path: 'add', element: <AccountView /> },
      { path: 'list', element: <AccountView /> },
    ],
  };

  const routing = useRoutes([exampleRoutes, mainRoutes, accountRoutes]);

  return (
    <Suspense fallback={<div>Loading... </div>}>
      <ErrorBoundary>{routing}</ErrorBoundary>
    </Suspense>
  );
};

export default Route;
