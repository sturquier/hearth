import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { Header } from '@/client/components/layout/Header/Header';
import { Devtools } from '@/client/config/devtools';
import type { RouterContext } from '@/client/providers/TanstackQueryProvider';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Devtools />
    </>
  ),
});
