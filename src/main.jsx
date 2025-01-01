import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router';
import { HelmetProvider } from 'react-helmet-async';
import AouthProvider from './aouthentication/AouthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AouthProvider>
        <RouterProvider router={router} />
      </AouthProvider>
    </HelmetProvider>
  </StrictMode>,
)
