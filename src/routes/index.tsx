import React, { ReactNode, lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import './style.css';

const AccountView = lazy(() => import('views/AccountView'));
const MainView = lazy(() => import('views/MainView'));
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

  const authRoutes = {
    path: '/login',
    element: <AccountLayout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <p>Login</p>
          </>
        ),
      },
    ],
  };

  const mainRoutes = {
    path: '/',
    element: isToken ? <MainLayout /> : <Navigate to="/login" />,
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
    element: isToken ? <AccountLayout /> : <Navigate to="/login" />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: ':id', element: <AccountView /> },
      { path: 'add', element: <AccountView /> },
      { path: 'list', element: <AccountView /> },
    ],
  };

  const routing = useRoutes([authRoutes, mainRoutes, accountRoutes]);

  return <Suspense fallback={<div>Loading... </div>}>{routing}</Suspense>;
};

export default Route;
