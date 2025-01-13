import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import Commands from './Commands.tsx';
import Premium from './pages/Premium.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/commands",
    element: <Commands />
  },
  {
    path: "/premium",
    element: <Premium />
  },
  {
    path: "/terms",
    element: <TermsOfService />
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);