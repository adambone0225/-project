import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';

// Code Splitting with React.lazy
const Home = lazy(() => import('./pages/Home'));
const MovingServices = lazy(() => import('./pages/MovingServices'));
const StorageSolutions = lazy(() => import('./pages/StorageSolutions'));
const Booking = lazy(() => import('./pages/Booking'));

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense 
          fallback={
            <div className="min-h-screen flex items-center justify-center bg-[#f5f2ed] text-[#8b0000] font-calligraphy text-3xl">
              載入中 Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="moving" element={<MovingServices />} />
              <Route path="storage" element={<StorageSolutions />} />
              <Route path="quote" element={<Booking />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}
