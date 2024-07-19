import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Spring = lazy(() => import('./pages/Spring'));
const Summer = lazy(() => import('./pages/Summer'));
const Fall = lazy(() => import('./pages/Fall'));
const Winter = lazy(() => import('./pages/Winter'));



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/spring' element={<Spring />} />
          <Route path='/summer' element={<Summer />} />
          <Route path='/fall' element={<Fall />} />
          <Route path='/winter' element={<Winter />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
