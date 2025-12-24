import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { StorybookConfig } from '@storybook/react-vite';

const getAbsolutePath = (value: string): string => {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
};

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [getAbsolutePath('@storybook/addon-vitest')],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal(inlineConfig) {
    return inlineConfig;
  },
};

export default config;
