import { createRouter } from '@tanstack/react-router';

import { getContext } from '@hearth/client/providers/TanstackQueryProvider';
import { routeTree } from '@hearth/client/routeTree.gen';

export const router = createRouter({
  routeTree,
  context: { queryClient: getContext() },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});
