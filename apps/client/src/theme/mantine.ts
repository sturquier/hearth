import '@fontsource-variable/open-sans';
import { createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

import { BREAKPOINTS } from '@hearth/client/constants/ui';

export const mantineTheme = createTheme({
  breakpoints: BREAKPOINTS,
  fontFamily: 'Open Sans Variable, sans-serif',
});
