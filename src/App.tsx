import React, { ReactNode, lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import './App.css';

const AccountView = lazy(() => import('views/AccountView'));
const MainView = lazy(() => import('views/MainView'));
const AccountLayout = lazy(() => import('layouts/AccountLayout'));
const MainLayout = lazy(() => import('layouts/MainLayout'));

// import PageNotFoundView from './error/PageNotFoundView';

interface AppType {
  // Counter: CounterType;
  name?: string;
  children?: ReactNode;
}

const App: React.FC<AppType> = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
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
    element: <AccountLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: ':id', element: <AccountView /> },
      { path: 'add', element: <AccountView /> },
      { path: 'list', element: <AccountView /> },
    ],
  };

  const routing = useRoutes([mainRoutes, accountRoutes]);

  return <Suspense fallback={<div>Loading... </div>}>{routing}</Suspense>;
};

export default App;
