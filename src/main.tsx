import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '@/App.tsx';
import '@/i18n';
import '@/index.css';
import Home from '@/pages/Home.tsx';
import NotFound from '@/pages/NotFound.tsx';

import Compdoc from './pages/projects/Compdoc';
import MyVPS from './pages/projects/MyVps';
import SpotifyProfile from './pages/projects/SpotifyProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'not-found',
        element: <NotFound />,
      },
      {
        path: 'projects/spotify-profile',
        element: <SpotifyProfile />,
      },
      {
        path: 'projects/my-vps',
        element: <MyVPS />,
      },
      {
        path: 'projects/compdoc',
        element: <Compdoc />,
      },
      {
        path: '*',
        element: <Navigate to="/not-found" replace />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
