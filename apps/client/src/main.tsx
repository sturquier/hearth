import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { router } from './config/router';
import {
  TanstackQueryProvider,
  getContext,
} from './providers/TanstackQueryProvider';
import { ThemeProvider } from './providers/ThemeProvider';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('app');

if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <TanstackQueryProvider queryClient={getContext()}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </TanstackQueryProvider>
    </StrictMode>,
  );
}
