import { List, ListItem, Title } from '@mantine/core';
import { createFileRoute } from '@tanstack/react-router';

import type { JSX } from 'react';

import { PATHS } from '@hearth/client/constants/paths';
import { useFetchCategories } from '@hearth/client/queries/useFetchCategories';

export const Route = createFileRoute(PATHS.HOME)({
  component: Home,
});

function Home(): JSX.Element {
  const { data: categories } = useFetchCategories();

  return (
    <>
      <Title order={1}>HOME</Title>
      <List>
        {(categories ?? []).map((category) => (
          <ListItem key={category.id}>{category.name}</ListItem>
        ))}
      </List>
    </>
  );
}
