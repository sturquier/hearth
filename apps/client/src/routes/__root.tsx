import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { Devtools } from '@hearth/client/config/devtools';
import { MainLayout } from '@hearth/client/layouts/MainLayout';
import type { RouterContext } from '@hearth/client/providers/TanstackQueryProvider';

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Devtools />
    </>
  ),
});
