import React, { ReactNode } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import './App.css';

import AccountView from './views/AccountView';
import MainView from './views/MainView';

import AccountLayout from './layouts/AccountLayout';
import MainLayout from './layouts/MainLayout';

// import PageNotFoundView from './error/PageNotFoundView';

interface AppType {
  // Counter: CounterType;
  name?: string;
  children?: ReactNode;
}

const App: React.FC<AppType> = () => {
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

  return <>{routing}</>;
};

export default App;
