import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { Header } from '@hearth/client/components/layout/Header/Header';
import { Devtools } from '@hearth/client/config/devtools';
import type { RouterContext } from '@hearth/client/providers/TanstackQueryProvider';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <Header />
      <Outlet />
      <Devtools />
    </>
  ),
});
