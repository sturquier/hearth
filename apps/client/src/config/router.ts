import { createRouter } from '@tanstack/react-router';

import { getContext } from '@/client/providers/TanstackQueryProvider';
import { routeTree } from '@/client/routeTree.gen';

export const router = createRouter({
  routeTree,
  context: { queryClient: getContext() },
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});
