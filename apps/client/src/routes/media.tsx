import { Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

import type { JSX } from 'react';

import { PATHS } from '@hearth/client/constants/paths';

export const Route = createFileRoute(PATHS.MEDIA)({
  component: Media,
});

function Media(): JSX.Element {
  return <Title order={1}>MEDIA</Title>;
}
