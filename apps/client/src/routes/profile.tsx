import { Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

import type { JSX } from 'react';

import { PATHS } from '@hearth/client/constants/paths';

export const Route = createFileRoute(PATHS.PROFILE)({
  component: Profile,
});

function Profile(): JSX.Element {
  return <Title order={1}>PROFILE</Title>;
}
