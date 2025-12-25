import { AppShell, AppShellMain } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import type { JSX, ReactNode } from 'react';

import { Header } from '@hearth/client/components/layout/Header/Header';
import { Navbar } from '@hearth/client/components/layout/Navbar/Navbar';
import { HEADER_HEIGHT, NAVBAR_WIDTH } from '@hearth/client/constants/ui';

export const MainLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      padding="md"
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        breakpoint: 'sm',
        width: NAVBAR_WIDTH,
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
    >
      <Header
        mobileOpened={mobileOpened}
        desktopOpened={desktopOpened}
        onToggleMobileCallback={toggleMobile}
        onToggleDesktopCallback={toggleDesktop}
      />
      <Navbar />
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
};
