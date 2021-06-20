import React, { ReactNode, lazy, Suspense } from 'react';
import './App.css';

const Route = lazy(() => import('routes'));

interface AppType {
  children?: ReactNode;
}

const App: React.FC<AppType> = (): JSX.Element => (
  <Suspense fallback={<div>Loading... </div>}>
    <Route />
  </Suspense>
);

export default App;
