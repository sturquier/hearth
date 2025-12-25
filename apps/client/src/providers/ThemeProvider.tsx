import { MantineProvider } from '@mantine/core';

import type { JSX, ReactNode } from 'react';

import { mantineTheme } from '@hearth/client/theme/mantine';

export const ThemeProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return <MantineProvider theme={mantineTheme}>{children}</MantineProvider>;
};
