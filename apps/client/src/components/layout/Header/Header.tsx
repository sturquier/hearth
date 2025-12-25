import { ActionIcon, AppShellHeader, Burger, Group } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { User } from 'lucide-react';

import type { FC } from 'react';

import { PATHS } from '@hearth/client/constants/paths';

import type { IHeader } from './Header.interface';

export const Header: FC<IHeader> = ({
  mobileOpened,
  desktopOpened,
  onToggleMobileCallback,
  onToggleDesktopCallback,
}) => {
  return (
    <AppShellHeader>
      <Group h="100%" px="md" justify="space-between">
        <Group>
          <Burger
            opened={mobileOpened}
            onClick={onToggleMobileCallback}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={onToggleDesktopCallback}
            visibleFrom="sm"
            size="sm"
          />
        </Group>
        <ActionIcon component={Link} to={PATHS.PROFILE} variant="subtle">
          <User size={24} />
        </ActionIcon>
      </Group>
    </AppShellHeader>
  );
};
