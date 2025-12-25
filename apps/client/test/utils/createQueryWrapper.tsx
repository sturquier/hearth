import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { JSX, ReactNode } from 'react';

export const createQueryWrapper = (): (({
  children,
}: {
  children: ReactNode;
}) => JSX.Element) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
