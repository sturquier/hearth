import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/react-vite';

const getAbsolutePackagePath = (value: string): string => {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
};

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [getAbsolutePackagePath('@storybook/addon-vitest')],
  framework: {
    name: getAbsolutePackagePath('@storybook/react-vite'),
    options: {},
  },
  viteFinal(inlineConfig) {
    inlineConfig.resolve ||= {};
    inlineConfig.resolve.alias ||= {};

    Object.assign(inlineConfig.resolve.alias, {
      '@hearth/client': resolve(
        dirname(fileURLToPath(import.meta.url)),
        '../src',
      ),
    });

    return inlineConfig;
  },
};

export default config;
