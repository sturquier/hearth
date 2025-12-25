import { AppShellNavbar, NavLink } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { Home, Image } from 'lucide-react';

import type { FC } from 'react';

import { PATHS } from '@hearth/client/constants/paths';

export const Navbar: FC = () => {
  return (
    <AppShellNavbar p="md">
      <NavLink
        component={Link}
        to={PATHS.HOME}
        label="Home"
        leftSection={<Home size={24} />}
      />
      <NavLink
        component={Link}
        to={PATHS.MEDIA}
        label="Media"
        leftSection={<Image size={24} />}
      />
    </AppShellNavbar>
  );
};
