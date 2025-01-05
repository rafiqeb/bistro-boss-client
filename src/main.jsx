import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './router/Router';
import { HelmetProvider } from 'react-helmet-async';
import AouthProvider from './aouthentication/AouthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AouthProvider>
          <RouterProvider router={router} />
        </AouthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>,
)
