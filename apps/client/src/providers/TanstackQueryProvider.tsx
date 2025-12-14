import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import type { JSX, ReactNode } from 'react';

export interface RouterContext {
  queryClient: QueryClient;
}

export const getContext = (): QueryClient => new QueryClient();

export const TanstackQueryProvider = ({
  children,
  queryClient,
}: {
  children: ReactNode;
  queryClient: QueryClient;
}): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
