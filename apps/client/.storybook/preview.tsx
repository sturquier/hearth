import { MantineProvider } from '@mantine/core';

import type { Decorator, Parameters, Preview } from '@storybook/react-vite';
import type { JSX } from 'react';

import { mantineTheme } from '@hearth/client/theme/mantine';

const parameters: Parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

const decorators: Decorator[] = [
  (renderStory): JSX.Element => {
    return (
      <MantineProvider theme={mantineTheme}>{renderStory()}</MantineProvider>
    );
  },
];

const preview: Preview = {
  parameters,
  decorators,
};

export default preview;
